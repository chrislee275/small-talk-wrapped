/** Reused neutral gesture policy: the gesture arriving at the bottom never turns a page. */
export class ScrollGate {
  lastWheel = -Infinity;
  distance = 0;
  pulses = 0;
  intentStarted = -Infinity;
  eligible = false;
  consumed = false;
  cooldownUntil = 0;
  wheel({
    time,
    delta,
    atBottom,
    allowed,
  }: {
    time: number;
    delta: number;
    atBottom: boolean;
    allowed: boolean;
  }) {
    if (time - this.lastWheel > 900) {
      this.distance = 0;
      this.consumed = false;
      this.eligible = atBottom && allowed && time >= this.cooldownUntil;
    }
    this.lastWheel = time;
    if (delta <= 0 || !allowed || !atBottom) {
      this.eligible = false;
      return false;
    }
    if (
      !this.eligible ||
      this.consumed ||
      time < this.cooldownUntil ||
      delta < 8
    )
      return false;
    if (time - this.intentStarted > 350) {
      this.intentStarted = time;
      this.pulses = 0;
      this.distance = 0;
    }
    this.pulses += 1;
    this.distance += Math.min(delta, 60);
    if (this.pulses < 3 || this.distance < 180) return false;
    this.consume(time);
    return true;
  }
  touch({
    time,
    startAtBottom,
    endAtBottom,
    dx,
    dy,
    duration,
    allowed,
  }: {
    time: number;
    startAtBottom: boolean;
    endAtBottom: boolean;
    dx: number;
    dy: number;
    duration: number;
    allowed: boolean;
  }) {
    if (
      !allowed ||
      !startAtBottom ||
      !endAtBottom ||
      time < this.cooldownUntil ||
      duration > 1000 ||
      dy < 72 ||
      dy < Math.abs(dx) * 1.8
    )
      return false;
    this.consume(time);
    return true;
  }
  consume(time: number) {
    this.consumed = true;
    this.cooldownUntil = time + 1100;
  }
}
