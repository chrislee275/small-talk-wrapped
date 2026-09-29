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
    "achievement": "Appendix Included",
    "role": "Resident Manual Writer",
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
    "achievement": "Plans Can Change",
    "role": "Plan Revision Officer",
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
    "achievement": "Progress, Restarted",
    "role": "Button Explorer",
    "signature": "restart",
    "signatureScreen": "S26"
  }
];
export const PERIOD = "2031—2033";
export const SCREENS: StoryScreen[] = [
  {
    "id": "S00",
    "title": "Small things. Worth a replay.",
    "eyebrow": "BIW WRAPPED / FICTIONAL DEMO",
    "blocks": [
      {
        "kind": "narration",
        "text": "Three friends. One unfinished guide to everyday life.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "Fictional demo: all characters, dialogue, dates and statistics are invented.",
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
    "title": "Whose side of the story?",
    "eyebrow": "CHOOSE A PERSPECTIVE",
    "blocks": [
      {
        "kind": "narration",
        "text": "One small group chat. Three different perspectives.",
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
    "title": "You're all set.",
    "eyebrow": "READY WHEN YOU ARE",
    "blocks": [
      {
        "kind": "narration",
        "text": "Take your time. These pages won't turn themselves.",
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
    "title": "Let's turn back the calendar.",
    "eyebrow": "2031 / CHAPTER ONE",
    "blocks": [
      {
        "kind": "narration",
        "text": "It started with a group chat that didn't have a name yet.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "One thing in common: everyone thought they were organised.",
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
    "title": "Good intentions.",
    "eyebrow": "2031 / THE FIRST NOTE",
    "blocks": [
      {
        "kind": "systemEvent",
        "text": "“Weekend Fixers” was created.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Let's keep this chat for useful things.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Do memes count as tools?",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "First agenda item: unresolved.",
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
    "title": "A busy naming department.",
    "eyebrow": "2031 / RENAMING DEPARTMENT",
    "interaction": "montage",
    "blocks": [
      {
        "kind": "narration",
        "text": "It was supposed to be a place for small weekend plans. Someone fixed a lamp. Someone researched storage boxes. Someone turned a shopping list into an essay.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "As the plans piled up, the group tried a few new names. Scroll down to see where they landed.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "Weekend Fixers",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "Spare Screw Storage",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "Tidy Up Tomorrow",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Plenty of renaming. Still no tidying.",
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
    "title": "Pinned for later.",
    "eyebrow": "2031 / PINNED",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora pinned the tidying checklist.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Theo carefully bookmarked it.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The bookmarks needed tidying too.",
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
    "title": "A quick question.",
    "eyebrow": "2031 / QUICK QUESTION",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "Where's the tape?",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Milo began explaining the labelling system.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "A short question. An answer with a contents page.",
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
    "title": "Technically tidy.",
    "eyebrow": "2031 / CHAT LOG",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "I've sorted everything.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Milo moved the boxes from the desk to the chair.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "systemEvent",
        "text": "Nora updated the to-do list.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The desk was, technically, clear.",
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
    "title": "The weekend project.",
    "eyebrow": "2032 / A NEW PAGE",
    "blocks": [
      {
        "kind": "narration",
        "text": "They decided to build something together.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Nora planned the steps. Milo wrote instructions. Theo volunteered to test it.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Nothing to test yet. Roles fully assigned.",
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
    "title": "A cleaner desktop.",
    "eyebrow": "2032 / DESIGN REVIEW",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "A bit more empty space would be nice.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Theo closed every window.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The work disappeared too.",
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
    "title": "Before buying anything.",
    "eyebrow": "2032 / RESEARCH",
    "blocks": [
      {
        "kind": "narration",
        "text": "Milo compared a few storage boxes.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "I've made a comparison chart.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "What goes in the box?",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "For now, the chart.",
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
    "title": "Unboxing.",
    "eyebrow": "2032 / UNBOXING",
    "blocks": [
      {
        "kind": "personAction",
        "text": "Theo opened the new label maker.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Let's put its name on it first.",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The label maker became its own first assignment.",
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
    "title": "Are we tidy yet?",
    "eyebrow": "2033 / FOLLOW-UP",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "Almost there.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "The new boxes were neatly lined up.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The old stuff was next to them.",
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
    "title": "A different kind of count.",
    "eyebrow": "GROUP WRAPPED",
    "blocks": [
      {
        "kind": "narration",
        "text": "A lot of little things happened. The numbers coming up are fictional too.",
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
    "title": "Messages sent. Tasks pending.",
    "eyebrow": "FICTIONAL DATA / THREE PEOPLE",
    "blocks": [
      {
        "kind": "narration",
        "text": "In this sample group, who did the most typing?",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The messages were finished. The to-do list wasn't.",
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
    "title": "A small question.",
    "eyebrow": "A SMALL CHAT ABOUT EVERYTHING",
    "interaction": "chat",
    "blocks": [
      {
        "kind": "narration",
        "text": "Every small question finds a way to branch out.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Where should the shelf go?",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Let's check the light first.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "I'll just sit here a minute.",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "That's where the shelf goes.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Measuring equipment: one person.",
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
    "title": "Back and forth.",
    "eyebrow": "LEFT / RIGHT / REPEAT",
    "interaction": "chat",
    "blocks": [
      {
        "kind": "narration",
        "text": "A discussion about the new group icon.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Something simple.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "A square?",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "At least give it a colour.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "That opened a whole new discussion.",
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
    "title": "One sheet of paper.",
    "eyebrow": "TIMELINE / FICTIONAL",
    "interaction": "timeline",
    "blocks": [
      {
        "kind": "narration",
        "text": "From inspiration to filing, all in one afternoon.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "timestamp",
        "text": "14:06 · Sketch an idea.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "timestamp",
        "text": "14:24 · Draw a cleaner version.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "timestamp",
        "text": "14:41 · Lose the first sheet.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Filed under: location unknown.",
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
    "title": "A small mismatch.",
    "eyebrow": "A SMALL MISMATCH",
    "interaction": "quantity",
    "quantity": {
      "planned": 4,
      "actual": 3
    },
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora brought four plant pots. Each needed its own drip tray.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "stat",
        "text": "Inside the package: three trays.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Pot number four moved into the sink.",
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
    "title": "Special thanks.",
    "eyebrow": "SMALL AWARDS",
    "blocks": [
      {
        "kind": "narration",
        "text": "To the one who wrote the instructions.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "To the one who revised the plans.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "To the one who tried things out.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "And to the desk, for staying in one piece.",
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
    "title": "That's the group story.",
    "eyebrow": "A DIFFERENT PERSPECTIVE",
    "blocks": [
      {
        "kind": "narration",
        "text": "Now let's give one person the spotlight.",
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
    "title": "Your page.",
    "eyebrow": "PERSONAL WRAPPED",
    "blocks": [
      {
        "kind": "narration",
        "text": "Not a performance review. Just a few small things worth another look.",
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
    "title": "More small things ahead.",
    "eyebrow": "BIW WRAPPED / END OF DEMO",
    "interaction": "ending",
    "blocks": [
      {
        "kind": "narration",
        "text": "The instructions might never be finished.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "narration",
        "text": "The plans might change direction.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "But we can still write the next page together.",
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
    "title": "Milo, in many words.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Explaining every little thing is a talent.",
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
    "title": "Labels for labels.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Milo labelled every storage box.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "This one holds the spare labels.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The system had started organising itself.",
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
    "title": "A watering guide.",
    "interaction": "paper",
    "blocks": [
      {
        "kind": "narration",
        "text": "Milo wrote a balcony watering guide. It started with how to hold the watering can.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "The paper unrolled. After the instructions came an appendix.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Got it. It's raining, so I'll skip today.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "A complete guide. Not needed today.",
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
    "title": "Quick reply.",
    "blocks": [
      {
        "kind": "narration",
        "text": "To save time, Milo prepared a reusable reply.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "One thing to add. There are two possible cases.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "A shorter opening. Not a shorter message.",
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
    "title": "Updated contents.",
    "blocks": [
      {
        "kind": "narration",
        "text": "The notes grew long enough to need a contents page.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Milo added instructions for using the contents page.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Even the way in came with homework.",
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
    "title": "The shortest reply.",
    "blocks": [
      {
        "kind": "directQuote",
        "text": "Did you turn the light off?",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Yes.",
        "speakerId": "milo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "No attachment this time.",
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
    "title": "For the one who explains.",
    "interaction": "unlock",
    "blocks": [
      {
        "kind": "narration",
        "text": "Everyday life doesn't need a manual. With you, it gets one anyway.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "No word limit. No shortage of patience.",
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
    "title": "Milo's recap card.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Explain the little things. Keep the ending short.",
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
    "title": "Nora, with a plan.",
    "blocks": [
      {
        "kind": "narration",
        "text": "A clear direction. With room for revisions.",
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
    "title": "Free time.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora left a whole afternoon free.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "We can do whatever we like.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Then she listed three options for doing whatever they liked.",
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
    "title": "Today's checklist.",
    "interaction": "checklist",
    "blocks": [
      {
        "kind": "narration",
        "text": "Water the plants. Put the tools on the wall.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Watering: done.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Hanging the tools: next time.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Real progress. Still a bare wall.",
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
    "title": "The backup plan.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora checked the weather before heading out.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "One route for sunshine. Another for rain.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "They spent the afternoon chatting in the doorway.",
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
    "title": "File names.",
    "blocks": [
      {
        "kind": "narration",
        "text": "The first plan was called Final.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "The next one was called New Final.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The folder was called Tentative.",
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
    "title": "All done.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Every item on today's list was finally ticked.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "That's it. The rest can wait until tomorrow.",
        "speakerId": "nora",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Tomorrow's list was already on page two.",
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
    "title": "For the one who adapts.",
    "interaction": "unlock",
    "blocks": [
      {
        "kind": "narration",
        "text": "You don't have to follow every step to keep moving.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Revise the route. Keep the enthusiasm.",
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
    "title": "Nora's recap card.",
    "blocks": [
      {
        "kind": "narration",
        "text": "A little progress is worth keeping.",
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
    "title": "Theo, trying things out.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Want to know what a button does? Ask, then press. Occasionally in reverse.",
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
    "title": "First print.",
    "blocks": [
      {
        "kind": "narration",
        "text": "The printer did nothing. Theo pressed Print a few more times.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Did it get that?",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Once they added paper, it got all five.",
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
    "title": "Save location.",
    "blocks": [
      {
        "kind": "personAction",
        "text": "Theo saved the draft in a new folder.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Let's give it a name I'll remember.",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The folder was called Here.",
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
    "title": "A change of colour.",
    "interaction": "restart",
    "blocks": [
      {
        "kind": "narration",
        "text": "The tea was brewing. A timer tracked how long it had steeped. Theo wanted to change the interface colour.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "personAction",
        "text": "Restart sent the timer back to zero.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "Same colour. How long has the tea been in?",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "The tea kept brewing. The record started over.",
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
    "title": "Test report.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Nora asked whether the new button worked well.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "It goes down.",
        "speakerId": "theo",
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
    "title": "Instructions first.",
    "blocks": [
      {
        "kind": "personAction",
        "text": "Theo opened Milo's guide.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "directQuote",
        "text": "I'll make some tea first.",
        "speakerId": "theo",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Better prepared for the reading than the task.",
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
    "title": "For the one who tries.",
    "interaction": "unlock",
    "blocks": [
      {
        "kind": "narration",
        "text": "Every test brings a new discovery.",
        "provenance": "FICTIONAL_DEMO"
      },
      {
        "kind": "punchline",
        "text": "Sometimes it's which button to press more carefully next time.",
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
    "title": "Theo's recap card.",
    "blocks": [
      {
        "kind": "narration",
        "text": "Starting over is still a way forward.",
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
