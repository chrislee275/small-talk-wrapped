export type PersonId = "milo" | "nora" | "theo";
export type ScreenId = `S${string}`;
export type BlockKind =
  | "narration"
  | "directQuote"
  | "personAction"
  | "systemEvent"
  | "timestamp"
  | "stat"
  | "punchline";
export type StoryBlock = {
  kind: BlockKind;
  text: string;
  speakerId?: PersonId;
  provenance: "FICTIONAL_DEMO";
};
export type Interaction =
  | "none"
  | "montage"
  | "chat"
  | "timeline"
  | "quantity"
  | "paper"
  | "checklist"
  | "restart"
  | "unlock"
  | "ending";
export type StoryScreen = {
  id: ScreenId;
  personId: PersonId | null;
  revision: "demo-1";
  provenance: "FICTIONAL_DEMO";
  template: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  theme: "archive" | "signal" | "night";
  title: string;
  eyebrow: string;
  interaction: Interaction;
  quantity?: { planned: number; actual: number };
  blocks: StoryBlock[];
};
export type DemoPerson = {
  id: PersonId;
  name: string;
  color: string;
  messages: number;
  activeYear: number;
  rank: number;
  achievement: string;
  role: string;
  signature: "paper" | "checklist" | "restart";
  signatureScreen: ScreenId;
};
