// Generated from content/demo.json. Fictional demo only.
import type { StoryScreen, DemoPerson } from "./content-types";
export const PEOPLE: DemoPerson[] = [
  {
    "id": "milo",
    "name": "Milo",
    "color": "#ab4b4e",
    "messages": 864,
    "activeYear": 2032,
    "rank": 1,
    "achievement": "长话短收",
    "role": "说明书编写员",
    "signature": "paper",
    "signatureScreen": "S25"
  },
  {
    "id": "nora",
    "name": "Nora",
    "color": "#477063",
    "messages": 702,
    "activeYear": 2033,
    "rank": 2,
    "achievement": "计划保持弹性",
    "role": "行程修改员",
    "signature": "checklist",
    "signatureScreen": "S25"
  },
  {
    "id": "theo",
    "name": "Theo",
    "color": "#536fa0",
    "messages": 519,
    "activeYear": 2031,
    "rank": 3,
    "achievement": "重新开始也算进度",
    "role": "按钮探索员",
    "signature": "restart",
    "signatureScreen": "S26"
  }
];
export const PERIOD = "2031—2033";
export const SCREENS: StoryScreen[] = [
  {
    "id": "S00",
    "title": "小事，也值得回放。",
    "eyebrow": "BIW WRAPPED / FICTIONAL DEMO",
    "blocks": [
      {
        "kind": "narration",
        "text": "三个人，一本从没写完的日常说明书。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "虚构演示：人物、对白、年份与统计均为创作，不代表真实记录。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S01",
    "title": "今天从谁开始？",
    "eyebrow": "CHOOSE A PERSPECTIVE",
    "blocks": [
      {
        "kind": "narration",
        "text": "同一个小群，三个不同视角。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S02",
    "title": "视角已就位。",
    "eyebrow": "READY WHEN YOU ARE",
    "blocks": [
      {
        "kind": "narration",
        "text": "不用赶。回忆不会自己翻页。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S03",
    "title": "先把日历翻回去。",
    "eyebrow": "2031 / CHAPTER ONE",
    "blocks": [
      {
        "kind": "narration",
        "text": "故事从一个还没有名字的小群开始。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "唯一共同点：大家都觉得自己很有条理。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S04",
    "title": "成立时的愿望。",
    "eyebrow": "2031 / THE FIRST NOTE",
    "blocks": [
      {
        "kind": "systemEvent",
        "text": "「周末修补社」已建立。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "这里专门讨论有用的事。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "那表情包算工具吗？",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "第一项议题，暂未通过。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S05",
    "title": "名字先变得忙碌。",
    "eyebrow": "2031 / RENAMING DEPARTMENT",
    "interaction": "montage",
    "blocks": [
      {
        "kind": "narration",
        "text": "最初只是想找个地方记下周末的小计划。后来有人修了台灯，有人研究收纳，还有人把购物清单写成了一篇文章。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "事情越记越多，群名也跟着换了几轮。往下看看，它最终变成了什么。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "周末修补社",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "螺丝暂存处",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "明天再整理",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "改名很勤快，整理还没开始。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive"
  },
  {
    "id": "S06",
    "title": "置顶消息。",
    "eyebrow": "2031 / PINNED",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora 把整理守则放到了最上面。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Theo 认真收藏。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "收藏夹也需要整理。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S07",
    "title": "一个很短的问题。",
    "eyebrow": "2031 / QUICK QUESTION",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "胶带放在哪里？",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Milo 开始介绍标签系统。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "问题很短，答案有目录。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S08",
    "title": "语气与动作。",
    "eyebrow": "2031 / CHAT LOG",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "我已经整理好了。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Milo 把桌上的盒子移到椅子上。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "Nora 更新了待办事项。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "桌面确实干净了。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S09",
    "title": "周末计划。",
    "eyebrow": "2032 / A NEW PAGE",
    "blocks": [
      {
        "kind": "narration",
        "text": "三个人决定一起做点小东西。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Nora 画流程。Milo 写说明。Theo 负责试用。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "试用品还没有，分工已经完成。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S10",
    "title": "桌面布局。",
    "eyebrow": "2032 / DESIGN REVIEW",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "空一点，看起来舒服。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Theo 关掉了所有窗口。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "工作也一起看不见了。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S11",
    "title": "买之前。",
    "eyebrow": "2032 / RESEARCH",
    "blocks": [
      {
        "kind": "narration",
        "text": "Milo 比较了几种收纳盒。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "我做了一个表。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "盒子要放什么？",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "先放这个表。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S12",
    "title": "到货之后。",
    "eyebrow": "2032 / UNBOXING",
    "blocks": [
      {
        "kind": "personAction",
        "text": "Theo 打开了新的标签机。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "先给它贴个名字。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "标签机，成了第一个被管理的对象。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S13",
    "title": "整理完了吗？",
    "eyebrow": "2033 / FOLLOW-UP",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "已经很接近了。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "新的盒子排得很整齐。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "旧东西在盒子旁边。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "B",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S14",
    "title": "换个角度看看。",
    "eyebrow": "GROUP WRAPPED",
    "blocks": [
      {
        "kind": "narration",
        "text": "小事没少发生。下面这些数字，也是为了这个演示编写的。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S15",
    "title": "消息量，不等于工作量。",
    "eyebrow": "FICTIONAL DATA / THREE PEOPLE",
    "blocks": [
      {
        "kind": "narration",
        "text": "这份样例统计里，谁最爱打字？",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "打字最多的人，并没有多领一把椅子。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal",
    "interaction": "none"
  },
  {
    "id": "S16",
    "title": "讨论的范围。",
    "eyebrow": "A SMALL CHAT ABOUT EVERYTHING",
    "interaction": "chat",
    "blocks": [
      {
        "kind": "narration",
        "text": "一个小问题，总能长出几个分支。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "架子放哪边？",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "先看光线。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "我先坐一下。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "你坐的是架子的位置。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "测量工具：一个人。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal"
  },
  {
    "id": "S17",
    "title": "消息来回。",
    "eyebrow": "LEFT / RIGHT / REPEAT",
    "interaction": "chat",
    "blocks": [
      {
        "kind": "narration",
        "text": "关于新群图标的一次讨论。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "做个简洁的。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "一个方块？",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "至少有个颜色吧。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "于是多开了一轮颜色讨论。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal"
  },
  {
    "id": "S18",
    "title": "一张纸的行程。",
    "eyebrow": "TIMELINE / FICTIONAL",
    "interaction": "timeline",
    "blocks": [
      {
        "kind": "narration",
        "text": "从灵感到归档，只用了一个下午。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "timestamp",
        "text": "14:06 · 写下草图。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "timestamp",
        "text": "14:24 · 重新描线。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "timestamp",
        "text": "14:41 · 找不到第一张纸。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "归档地点：待查。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal"
  },
  {
    "id": "S19",
    "title": "数量很重要。",
    "eyebrow": "A SMALL MISMATCH",
    "interaction": "quantity",
    "quantity": {
      "planned": 4,
      "actual": 3
    },
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora 带来四只空花盆，准备给阳台添点绿色。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "stat",
        "text": "拆开种子袋：三份。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "最后一只花盆，先负责收纳袋子。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal"
  },
  {
    "id": "S20",
    "title": "本期特别感谢。",
    "eyebrow": "SMALL AWARDS",
    "blocks": [
      {
        "kind": "narration",
        "text": "感谢写说明的人。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "感谢改计划的人。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "感谢勇于尝试的人。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "以及还没有散架的桌子。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal",
    "interaction": "none"
  },
  {
    "id": "S21",
    "title": "群聊到这里。",
    "eyebrow": "A DIFFERENT PERSPECTIVE",
    "blocks": [
      {
        "kind": "narration",
        "text": "接下来，把镜头留给一个人。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S22",
    "title": "你的那一页。",
    "eyebrow": "PERSONAL WRAPPED",
    "blocks": [
      {
        "kind": "narration",
        "text": "不是评语。只是几件值得再看一次的小事。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "A",
    "theme": "archive",
    "interaction": "none"
  },
  {
    "id": "S31",
    "title": "小事还会继续。",
    "eyebrow": "BIW WRAPPED / END OF DEMO",
    "interaction": "ending",
    "blocks": [
      {
        "kind": "narration",
        "text": "说明书可能写不完。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "计划也可能改方向。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "但下一页，还可以一起写。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": null,
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "G",
    "theme": "night"
  },
  {
    "id": "S23",
    "title": "Milo 的文字库存。",
    "blocks": [
      {
        "kind": "narration",
        "text": "把每件小事解释清楚，是一种天赋。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal",
    "eyebrow": "MILO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S24",
    "title": "标签的标签。",
    "blocks": [
      {
        "kind": "narration",
        "text": "Milo 给盒子贴上分类标签。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "这一盒放备用标签。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "分类系统开始照顾自己。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "MILO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S25",
    "title": "一份浇水说明。",
    "interaction": "paper",
    "blocks": [
      {
        "kind": "narration",
        "text": "Milo 写了一份阳台浇水指南，连天气变化都有补充说明。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "纸卷展开，正文之后还有附录。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "收到，今天下雨。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "说明很完整。今天用不上。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "MILO / FICTIONAL DEMO"
  },
  {
    "id": "S26",
    "title": "快捷回复。",
    "blocks": [
      {
        "kind": "narration",
        "text": "为了节省时间，Milo 准备了一段常用回复。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "我补充一下。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "省下的是开头，没省下正文。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "MILO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S27",
    "title": "目录更新。",
    "blocks": [
      {
        "kind": "narration",
        "text": "笔记越写越厚，需要一份目录。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Milo 在目录后加了使用说明。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "入口也有阅读门槛。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "MILO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S28",
    "title": "最短的一次。",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "灯关了吗？",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "关了。",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "这一次，没有附件。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "MILO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S29",
    "title": "留给认真解释的人。",
    "interaction": "unlock",
    "blocks": [
      {
        "kind": "narration",
        "text": "日常不一定需要说明书，但有你就一定有。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "篇幅不设上限，耐心也是。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "E",
    "theme": "night",
    "eyebrow": "MILO / FICTIONAL DEMO"
  },
  {
    "id": "S30",
    "title": "Milo 的回顾卡。",
    "blocks": [
      {
        "kind": "narration",
        "text": "把小事写清楚，把结尾留短一点。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "milo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "F",
    "theme": "archive",
    "eyebrow": "MILO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S23",
    "title": "Nora 的计划空间。",
    "blocks": [
      {
        "kind": "narration",
        "text": "计划有方向，也留着修改的余地。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal",
    "eyebrow": "NORA / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S24",
    "title": "日程里的空白。",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora 留了一整段自由时间。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "这段可以随意安排。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "然后给自由时间排了三个选项。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "NORA / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S25",
    "title": "完成了一部分。",
    "interaction": "checklist",
    "blocks": [
      {
        "kind": "narration",
        "text": "计划先给盆栽浇水，再把工具挂上墙。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "浇水：完成。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "挂工具：改到下次。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "进度是真的，墙还是空的。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "NORA / FICTIONAL DEMO"
  },
  {
    "id": "S26",
    "title": "备用方案。",
    "blocks": [
      {
        "kind": "narration",
        "text": "出门前，Nora 查了天气。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "晴天路线、雨天路线都准备好了。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "大家最后在门口聊了一个下午。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "NORA / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S27",
    "title": "命名习惯。",
    "blocks": [
      {
        "kind": "narration",
        "text": "第一份计划叫最终版。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "第二份叫新的最终版。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "最后，文件夹叫暂定。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "NORA / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S28",
    "title": "真正完成。",
    "blocks": [
      {
        "kind": "narration",
        "text": "清单终于只剩最后一项。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "给今天的清单画个句号。",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "这次真的画了。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "NORA / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S29",
    "title": "留给会改计划的人。",
    "interaction": "unlock",
    "blocks": [
      {
        "kind": "narration",
        "text": "不是每一步都照着走，依然可以往前。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "路线可修改，热情不用。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "E",
    "theme": "night",
    "eyebrow": "NORA / FICTIONAL DEMO"
  },
  {
    "id": "S30",
    "title": "Nora 的回顾卡。",
    "blocks": [
      {
        "kind": "narration",
        "text": "完成一点，也值得留下一张。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "nora",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "F",
    "theme": "archive",
    "eyebrow": "NORA / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S23",
    "title": "Theo 的试用记录。",
    "blocks": [
      {
        "kind": "narration",
        "text": "想知道按钮做什么，先问，再按。偶尔顺序相反。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "C",
    "theme": "signal",
    "eyebrow": "THEO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S24",
    "title": "新的快捷键。",
    "blocks": [
      {
        "kind": "narration",
        "text": "Theo 学会了隐藏窗口。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "桌面一下就干净了。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "接下来的课程：找回来。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "THEO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S25",
    "title": "保存位置。",
    "blocks": [
      {
        "kind": "personAction",
        "text": "Theo 把草稿存到了一个新文件夹。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "取个好记的名字。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "文件夹名字叫：这里。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "THEO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S26",
    "title": "倒计时重新开始。",
    "interaction": "restart",
    "blocks": [
      {
        "kind": "narration",
        "text": "Theo 给泡茶计时器换了颜色。杯子已经摆好，计时还在继续。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "按下 Restart，计时器回到了起点。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "颜色没变，等茶的时间变长了。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "测试成功，喝茶延后。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "THEO / FICTIONAL DEMO"
  },
  {
    "id": "S27",
    "title": "试用报告。",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora 问新按钮好不好用。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "按得下去。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "报告简洁，但还需要第二轮测试。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "THEO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S28",
    "title": "这次先看说明。",
    "blocks": [
      {
        "kind": "personAction",
        "text": "Theo 打开 Milo 的指南。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "我先泡杯茶。",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "阅读准备，比操作充分。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "D",
    "theme": "archive",
    "eyebrow": "THEO / FICTIONAL DEMO",
    "interaction": "none"
  },
  {
    "id": "S29",
    "title": "留给愿意尝试的人。",
    "interaction": "unlock",
    "blocks": [
      {
        "kind": "narration",
        "text": "一次试用，会带来一个新发现。",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "包括：这个按钮，下次慢一点。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "E",
    "theme": "night",
    "eyebrow": "THEO / FICTIONAL DEMO"
  },
  {
    "id": "S30",
    "title": "Theo 的回顾卡。",
    "blocks": [
      {
        "kind": "narration",
        "text": "重新开始，也是一种继续。",
        "provenance": "FICTIONAL_DEMO"
      }
    ],
    "personId": "theo",
    "revision": "demo-1",
    "provenance": "FICTIONAL_DEMO",
    "template": "F",
    "theme": "archive",
    "eyebrow": "THEO / FICTIONAL DEMO",
    "interaction": "none"
  }
];
