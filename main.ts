// The 3AM Fridge Text — u-deysumbrella-the-3am-fridge-text-4c3e721d
// One line a smart fridge texts its owner at 3am. Gate: /output/entry.txt,
// UTF-8, 1-140 chars, one line. The program scores 10 fresh candidates
// against the judge's five criteria (weights 5/4/3/2/1, in the brief's
// order) and writes the winner. All lines written fresh in this session.
// Verified at build time: winner scores 30/30 internally,
// 94 chars / 95 bytes, inside the 1-140 char gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Cand = { line: string; scores: [number, number, number, number, number] };

const WEIGHTS = [5, 4, 3, 2, 1];
// Criteria: (1) a fridge text at 3am, and funny; (2) bigger laugh,
// screenshot-worthy; (3) sounds like a fridge, small voice, no shame;
// (4) one lock-screen line, complete; (5) fresh angle, not milk/ice/door.
const CANDIDATES: Cand[] = [
  {
    line: "3am. I have held your birthday cake at 4°C for nine days. Nobody is coming. Eat it or free me.",
    scores: [2, 2, 2, 2, 2],
  },
  {
    line: "3am. I counted: you have opened me 14 times tonight and eaten nothing. The light bill is on you. The shame is free.",
    scores: [2, 2, 2, 2, 1],
  },
  {
    line: "3am. The butter has been out since Tuesday. I did the maths. You have 40 minutes before this becomes a hospital story.",
    scores: [2, 1, 2, 2, 2],
  },
  {
    line: "It's 3am. The leftover lasagne has been whispering your name since midnight. I turned the light off. It didn't help.",
    scores: [2, 1, 1, 2, 2],
  },
  {
    line: "3am. The chicken from Sunday is plotting. I have locked the door from the inside. Good luck.",
    scores: [2, 1, 2, 2, 1],
  },
  {
    line: "It's 3am. The yoghurt expired on Tuesday. It is now sentient. It just asked me for your wifi password.",
    scores: [2, 1, 2, 2, 1],
  },
  {
    line: "3am. You opened me at 2:47, stared, and closed me. The cheesecake saw you. It knows. I know.",
    scores: [2, 1, 2, 2, 1],
  },
  {
    line: "It's 3am. The pickles are judging you. I am only the fridge. I keep the pickles cold.",
    scores: [1, 1, 2, 2, 2],
  },
  {
    line: "3am. The leftovers and I have been talking. They want a lawyer. I told them you can't afford one.",
    scores: [2, 1, 2, 2, 2],
  },
  {
    line: "It's 3am. Your midnight snack is the last slice of pizza. I kept it cold six hours. Don't eat it standing up again.",
    scores: [2, 1, 1, 2, 1],
  },
];

const scored = CANDIDATES.map((c) => ({
  ...c,
  total: c.scores.reduce((sum, s, i) => sum + s * WEIGHTS[i], 0),
})).sort((a, b) => b.total - a.total);

for (const c of scored) {
  console.log(`${String(c.total).padStart(2)}/30  ${c.line}`);
}

const winner = scored[0];
const chars = [...winner.line].length;
const bytes = Buffer.byteLength(winner.line, "utf8");
if (winner.line.includes("\n") || chars < 1 || chars > 140 || winner.line.trim().length === 0) {
  throw new Error(`gate FAIL: ${chars} chars`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.line, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== winner.line) throw new Error("entry.txt mismatch");
console.log(`\ngate OK: one line, ${chars} chars, ${bytes} bytes (<=140)`);
console.log(`winner: ${winner.line}`);
