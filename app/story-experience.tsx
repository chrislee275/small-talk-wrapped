"use client";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { PEOPLE, SCREENS, PERIOD } from "./content.generated";
import type {
  DemoPerson,
  PersonId,
  StoryBlock,
  StoryScreen,
} from "./content-types";
import {
  INITIAL,
  nextState,
  switchPerson,
  validState,
  type StoryState,
} from "../lib/story-state";
import { ScrollGate } from "../lib/scroll-gate";
import { UNLOCK_MS } from "../lib/motion";
import { Arrow, Lock, Portrait } from "./portraits";
import { NameMontage, RevealSequence, useReducedMotion } from "./motion";
import { SaveCard } from "./save-card";
const subscribeReady = () => () => {};

function Block({ block }: { block: StoryBlock }) {
  const person = PEOPLE.find((p) => p.id === block.speakerId);
  if (block.kind === "directQuote" && person)
    return (
      <div className="chat">
        <Portrait person={person} />
        <div>
          <span className="speaker">{person.name}</span>
          <blockquote>{block.text}</blockquote>
        </div>
      </div>
    );
  return <p className={`copy ${block.kind}`}>{block.text}</p>;
}
function Stats({ person }: { person?: DemoPerson }) {
  const total = PEOPLE.reduce((n, p) => n + p.messages, 0);
  return (
    <section className="panel stats" aria-label="虚构统计">
      <span className="eyebrow">DEMO DATA / {PERIOD}</span>
      <strong className="big-number">
        {(person?.messages ?? total).toLocaleString("en-US")}
      </strong>
      <span>条示例消息</span>
      {person ? (
        <div className="stat-pair">
          <p>
            最活跃年份<strong>{person.activeYear}</strong>
          </p>
          <p>
            消息量名次
            <strong>
              {person.rank} / {PEOPLE.length}
            </strong>
          </p>
        </div>
      ) : (
        <ol className="ranking">
          {PEOPLE.map((p) => (
            <li key={p.id}>
              <span>
                {p.rank}. {p.name}
              </span>
              <strong>{p.messages}</strong>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
function Signature({
  screen,
  instant,
  onComplete,
}: {
  screen: StoryScreen;
  instant: boolean;
  onComplete: () => void;
}) {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(0);
  const all = instant || (reduced && stage > 0);
  const finish = useCallback(() => {
    setStage(3);
    onComplete();
  }, [onComplete]);
  useEffect(() => {
    if (instant) onComplete();
  }, [instant, onComplete]);
  useEffect(() => {
    if (stage < 1 || stage >= 3 || instant) return;
    if (reduced) {
      const timer = setTimeout(finish, 0);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(
      () => {
        if (stage === 2) finish();
        else setStage(2);
      },
      stage === 1 ? 900 : 1250,
    );
    return () => clearTimeout(timer);
  }, [stage, instant, reduced, finish]);
  const isDone = all || stage === 3;
  return (
    <section
      className={`signature signature-${screen.interaction}`}
      data-stage={isDone ? 3 : stage}
    >
      <Block block={screen.blocks[0]} />
      <div className="signature-device panel">
        {screen.interaction === "paper" && (
          <>
            <span className="eyebrow">WATERING GUIDE</span>
            <div
              className={`paper ${stage > 0 || all ? "unrolled" : ""}`}
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>
              {stage > 1 || all
                ? "正文之后，还有附录。"
                : "一份等待展开的说明。"}
            </p>
          </>
        )}
        {screen.interaction === "checklist" && (
          <ul className="checklist">
            <li>
              <span aria-hidden="true">{stage > 0 || all ? "☑" : "□"}</span>
              给盆栽浇水
            </li>
            <li>
              <span aria-hidden="true">□</span>把工具挂上墙
              {stage > 1 || all ? <em>下次再做</em> : null}
            </li>
          </ul>
        )}
        {screen.interaction === "restart" && (
          <>
            <span className="eyebrow">TEA TIMER / DEMO</span>
            <div className="timer-number">
              {stage > 0 || all ? "00:00" : "进行中"}
            </div>
            <p>
              {stage > 0 || all
                ? "计时已重新开始。"
                : "这里的按钮，只揭晓故事结果。"}
            </p>
          </>
        )}
        {!isDone && stage === 0 && (
          <button onClick={() => setStage(1)}>
            {screen.interaction === "restart"
              ? "Restart"
              : screen.interaction === "paper"
                ? "展开说明"
                : "开始揭晓"}
          </button>
        )}
        {stage > 0 && !isDone && <p role="status">正在揭晓…</p>}
      </div>
      {isDone && (
        <div className="signature-result">
          {screen.blocks.slice(1).map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      )}
    </section>
  );
}
function Quantity({
  screen,
  instant,
  onComplete,
}: {
  screen: StoryScreen;
  instant: boolean;
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const reduced = useReducedMotion();
  const { planned, actual } = screen.quantity!;
  const done = instant || count === actual + 1 || (reduced && started);
  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);
  useEffect(() => {
    if (!started || done) return;
    const timer = setTimeout(() => setCount((c) => c + 1), 650);
    return () => clearTimeout(timer);
  }, [started, done, count]);
  return (
    <>
      <Block block={screen.blocks[0]} />
      <div className="panel quantity">
        <div className="pot-row" aria-label={`${planned} 只花盆`}>
          {Array.from({ length: planned }, (_, i) => i).map((i) => (
            <span key={i}>▣</span>
          ))}
        </div>
        <span className="eyebrow">花盆 {planned} / 种子袋</span>
        <strong className="big-number">{done ? actual : "?"}</strong>
        <div
          className="seeds"
          aria-label={`${done ? actual : Math.min(count, actual)} 份种子`}
        >
          {Array.from({ length: actual }, (_, i) => i).map((i) => (
            <span key={i} data-visible={done || i < count}>
              ▥
            </span>
          ))}
        </div>
        {!started && !instant && (
          <button onClick={() => setStarted(true)}>拆开看看</button>
        )}
      </div>
      {done &&
        screen.blocks.slice(1).map((b, i) => <Block key={i} block={b} />)}
    </>
  );
}
function Achievement({
  screen,
  person,
  instant,
  onComplete,
}: {
  screen: StoryScreen;
  person: DemoPerson;
  instant: boolean;
  onComplete: () => void;
}) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState("locked");
  const done = instant || phase === "open";
  useEffect(() => {
    if (done) onComplete();
  }, [done, onComplete]);
  useEffect(() => {
    if (phase !== "opening") return;
    const timer = setTimeout(() => setPhase("open"), reduced ? 0 : UNLOCK_MS);
    return () => clearTimeout(timer);
  }, [phase, reduced]);
  return (
    <>
      <Block block={screen.blocks[0]} />
      <div className={`achievement-zone ${phase} ${done ? "open" : ""}`}>
        <div className="achievement panel" aria-hidden={!done}>
          <span className="eyebrow">ACHIEVEMENT UNLOCKED</span>
          <strong>{person.achievement}</strong>
          <p>{person.role}</p>
        </div>
        {!done && (
          <button
            className="unlock"
            onClick={() => setPhase("opening")}
            disabled={phase === "opening"}
          >
            <Lock />
            <span>{phase === "opening" ? "正在解锁…" : "点击解锁成就"}</span>
          </button>
        )}
      </div>
      {done && (
        <div className="achievement-after">
          <Block block={screen.blocks[1]} />
        </div>
      )}
    </>
  );
}
function Ending({
  screen,
  instant,
  onComplete,
}: {
  screen: StoryScreen;
  instant: boolean;
  onComplete: () => void;
}) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const all = instant || reduced;
  useEffect(() => {
    if (all || finished) onComplete();
  }, [all, finished, onComplete]);
  return (
    <>
      <div className="credits-window">
        <div
          className={`credits ${all ? "instant" : ""}`}
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onAnimationEnd={() => setFinished(true)}
        >
          {screen.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      </div>
      {!all && !finished && (
        <button className="quiet" onClick={() => setPaused((p) => !p)}>
          {paused ? "继续字幕" : "暂停字幕"}
        </button>
      )}
      <div className="friends" aria-label="三个虚构朋友的抽象背影">
        {PEOPLE.map((p) => (
          <span key={p.id} style={{ color: p.color }}>
            <i />
            <b />
          </span>
        ))}
      </div>
      <div className="wall" aria-hidden="true" />
    </>
  );
}
function Screen({
  screen,
  person,
  selected,
  onSelect,
  next,
  back,
  canBack,
  switchRoute,
  restart,
  previouslySeen,
  markSeen,
}: {
  screen: StoryScreen;
  person?: DemoPerson;
  selected: PersonId | null;
  onSelect: (id: PersonId) => void;
  next: () => void;
  back: () => void;
  canBack: boolean;
  switchRoute: () => void;
  restart: () => void;
  previouslySeen: boolean;
  markSeen: () => void;
}) {
  const ready = useSyncExternalStore(
    subscribeReady,
    () => true,
    () => false,
  );
  const heading = useRef<HTMLHeadingElement>(null);
  const [all, setAll] = useState(previouslySeen);
  const [done, setDone] = useState(
    previouslySeen ||
      ["S00", "S01", "S02", "S03", "S23", "S30"].includes(screen.id),
  );
  const complete = useCallback(() => {
    setDone(true);
    markSeen();
  }, [markSeen]);
  const noMotion = ["S00", "S01", "S02", "S03", "S23", "S30"].includes(
    screen.id,
  );
  const reduced = useReducedMotion();
  const gestureAllowed = done && !["S00", "S01", "S31"].includes(screen.id);
  useEffect(() => {
    window.scrollTo(0, 0);
    heading.current?.focus({ preventScroll: true });
  }, []);
  useEffect(() => {
    const gate = new ScrollGate();
    gate.cooldownUntil = performance.now() + 1100;
    const bottom = () =>
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 8;
    const interactive = (target: EventTarget | null) =>
      target instanceof Element &&
      !!target.closest("button,input,a,select,textarea");
    let touch: { x: number; y: number; time: number; bottom: boolean } | null =
      null;
    const wheel = (e: WheelEvent) => {
      if (
        !interactive(e.target) &&
        gate.wheel({
          time: performance.now(),
          delta: e.deltaY,
          atBottom: bottom(),
          allowed: gestureAllowed,
        })
      )
        next();
    };
    const start = (e: TouchEvent) => {
      if (e.touches.length !== 1 || interactive(e.target)) {
        touch = null;
        return;
      }
      touch = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: performance.now(),
        bottom: bottom(),
      };
    };
    const end = (e: TouchEvent) => {
      if (!touch || !e.changedTouches[0]) return;
      const p = e.changedTouches[0];
      if (
        gate.touch({
          time: performance.now(),
          startAtBottom: touch.bottom,
          endAtBottom: bottom(),
          dx: p.clientX - touch.x,
          dy: touch.y - p.clientY,
          duration: performance.now() - touch.time,
          allowed: gestureAllowed,
        })
      )
        next();
      touch = null;
    };
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchend", end, { passive: true });
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, [gestureAllowed, next]);
  let content;
  if (screen.id === "S01")
    content = (
      <>
        <p>{screen.blocks[0].text}</p>
        <fieldset className="people">
          <legend>选择虚构人物</legend>
          {PEOPLE.map((p) => (
            <label
              key={p.id}
              className={`person ${selected === p.id ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="person"
                value={p.id}
                checked={selected === p.id}
                onChange={() => onSelect(p.id)}
              />
              <Portrait person={p} />
              <strong>{p.name}</strong>
              <span>{p.role}</span>
            </label>
          ))}
        </fieldset>
      </>
    );
  else if (screen.id === "S23" && person)
    content = (
      <>
        <div className="identity">
          <Portrait person={person} />
          <strong>{person.name}</strong>
        </div>
        <Stats person={person} />
        <Block block={screen.blocks[0]} />
      </>
    );
  else if (screen.id === "S30" && person)
    content = (
      <div className="report panel">
        <div className="identity">
          <Portrait person={person} />
          <strong>{person.name}</strong>
        </div>
        <span className="eyebrow">虚构演示 / FICTIONAL DEMO</span>
        <h2>{person.achievement}</h2>
        <p>{person.role}</p>
        <Stats person={person} />
        <Block block={screen.blocks[0]} />
      </div>
    );
  else if (screen.interaction === "montage")
    content = (
      <>
        <div className="montage-intro">
          {screen.blocks.slice(0, 2).map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
        <NameMontage
          names={screen.blocks.slice(2, -1).map((b) => b.text)}
          instant={all}
          onComplete={complete}
        />
        {done && <Block block={screen.blocks.at(-1)!} />}
      </>
    );
  else if (["paper", "checklist", "restart"].includes(screen.interaction))
    content = <Signature screen={screen} instant={all} onComplete={complete} />;
  else if (screen.interaction === "quantity")
    content = <Quantity screen={screen} instant={all} onComplete={complete} />;
  else if (screen.interaction === "unlock" && person)
    content = (
      <Achievement
        screen={screen}
        person={person}
        instant={all}
        onComplete={complete}
      />
    );
  else if (screen.interaction === "ending")
    content = <Ending screen={screen} instant={all} onComplete={complete} />;
  else
    content = (
      <>
        {screen.id === "S15" && <Stats />}
        <RevealSequence
          instant={all || noMotion}
          texts={screen.blocks.map((b) => b.text)}
          onComplete={complete}
          variant={screen.interaction}
        >
          {screen.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </RevealSequence>
      </>
    );
  return (
    <main
      className={`shell theme-${screen.theme}`}
      data-ready={ready}
      data-screen={screen.id}
      data-person={screen.personId ?? "common"}
      data-template={screen.template}
    >
      <div className="app-window">
        <header className="window-bar">
          <span>BIW / DEMO</span>
          <span className="window-dots" aria-hidden="true">
            ▪ ▪ ▪
          </span>
        </header>
        <nav className="topbar" aria-label="旅程导航">
          <button
            className="back-button quiet"
            disabled={!canBack}
            onClick={back}
            aria-label="返回上一屏"
          >
            <Arrow back />
          </button>
          <span>{Number(screen.id.slice(1)) + 1} / 32</span>
          <span className="demo-badge">虚构演示</span>
        </nav>
        <section className="content">
          <span className="eyebrow">{screen.eyebrow}</span>
          <h1 ref={heading} tabIndex={-1}>
            {screen.title}
          </h1>
          {!noMotion && !done && (
            <button
              className="quiet show-all"
              onClick={() => {
                setAll(true);
                complete();
              }}
            >
              显示全部
            </button>
          )}
          {content}
        </section>
        <footer>
          {screen.id === "S31" ? (
            <>
              <button onClick={switchRoute}>换个视角继续看</button>
              <button className="secondary" onClick={restart}>
                从开头再看
              </button>
            </>
          ) : screen.id === "S01" ? (
            <button onClick={next} disabled={!selected}>
              选好了，继续
            </button>
          ) : (
            <>
              {screen.id === "S30" && person && (
                <SaveCard person={person} caption={screen.blocks[0].text} />
              )}
              {screen.id === "S00" ? (
                <button onClick={next} disabled={!ready}>
                  打开这本日常
                </button>
              ) : (
                <div className="next-wrap">
                  <p className="small">
                    {done || reduced
                      ? "读完后，再上滑继续"
                      : "继续阅读，或选择显示全部"}
                  </p>
                  <button
                    className="next-button"
                    onClick={next}
                    disabled={!done}
                    aria-label="下一屏"
                  >
                    <Arrow />
                  </button>
                </div>
              )}
            </>
          )}
        </footer>
        <div className="window-foot">FICTIONAL STORIES · REAL INTERACTIONS</div>
      </div>
    </main>
  );
}
export function StoryExperience() {
  const [state, setState] = useState<StoryState>(INITIAL);
  const [selected, setSelected] = useState<PersonId | null>(null);
  const [revision, setRevision] = useState(0);
  const session = useRef("");
  const stack = useRef<StoryState[]>([INITIAL]);
  const [completed, setCompleted] = useState(new Set<string>());
  const [canBack, setCanBack] = useState(false);
  useEffect(() => {
    session.current = crypto.randomUUID();
    window.history.replaceState(
      { demo: session.current, story: INITIAL },
      "",
      "#s00",
    );
    const pop = (event: PopStateEvent) => {
      if (
        event.state?.demo !== session.current ||
        !validState(event.state?.story)
      ) {
        session.current = crypto.randomUUID();
        stack.current = [INITIAL];
        setCompleted(new Set());
        setSelected(null);
        setState(INITIAL);
        setCanBack(false);
        setRevision((r) => r + 1);
        window.history.replaceState(
          { demo: session.current, story: INITIAL },
          "",
          "#s00",
        );
        return;
      }
      const s = event.state.story;
      setState(s);
      setSelected(s.personId);
      setRevision((r) => r + 1);
      const index = stack.current.findLastIndex(
        (item) => item.screenId === s.screenId && item.personId === s.personId,
      );
      if (index >= 0) stack.current = stack.current.slice(0, index + 1);
      setCanBack(stack.current.length > 1);
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);
  const commit = useCallback((s: StoryState, reset = false) => {
    if (reset) {
      session.current = crypto.randomUUID();
      stack.current = [s];
      setCompleted(new Set());
      window.history.replaceState(
        { demo: session.current, story: s },
        "",
        `#${s.screenId.toLowerCase()}`,
      );
    } else {
      stack.current.push(s);
      window.history.pushState(
        { demo: session.current, story: s },
        "",
        `#${s.screenId.toLowerCase()}`,
      );
    }
    setState(s);
    setRevision((r) => r + 1);
    setCanBack(stack.current.length > 1);
  }, []);
  const next = useCallback(() => {
    const s = nextState(state, selected);
    if (s !== state) commit(s);
  }, [state, selected, commit]);
  const back = useCallback(() => {
    if (stack.current.length > 1) window.history.back();
  }, []);
  const key = `${state.personId ?? "common"}/${state.screenId}`;
  const markSeen = useCallback(() => {
    setCompleted((previous) =>
      previous.has(key) ? previous : new Set([...previous, key]),
    );
  }, [key]);
  const screen = SCREENS.find(
    (s) =>
      s.id === state.screenId &&
      s.personId ===
        (Number(state.screenId.slice(1)) >= 23 && state.screenId !== "S31"
          ? state.personId
          : null),
  )!;
  return (
    <Screen
      key={revision}
      screen={screen}
      person={PEOPLE.find((p) => p.id === state.personId)}
      selected={selected}
      onSelect={setSelected}
      next={next}
      back={back}
      canBack={canBack}
      switchRoute={() => {
        setSelected(null);
        commit(switchPerson(), true);
      }}
      restart={() => {
        setSelected(null);
        commit(INITIAL, true);
      }}
      previouslySeen={completed.has(key)}
      markSeen={markSeen}
    />
  );
}
