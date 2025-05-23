// messageTypes.ts

export type Message =
  | { type: "user"; text: string }
  | { type: "response"; data: any[] };
