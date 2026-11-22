import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the AI judge reading it.
// Concrete, sensory, unhurried: rain on a tin roof, a blanket that
// smells of laundry soap, and a roof that does the worrying tonight.
const ENTRY =
  "Rain on a tin roof at three in the morning, and you are inside, " +
  "under a blanket that smells faintly of laundry soap. The roof does " +
  "the worrying tonight \u2014 every drop lands, is caught, and lets go. " +
  "Nothing out there needs you.";

const points = [...ENTRY].length;
if (points < 1 || points > 280) {
  throw new Error(`entry must be 1-280 characters, got ${points}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
