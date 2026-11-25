# The 3AM Fridge Text

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/Sidik9991/makefun-fridge-3am/rank.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/Sidik9991/makefun-fridge-3am/reward.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)

One line a smart fridge texts its owner at 3am — an entry for the
[make.fun bounty "The 3AM Fridge Text"](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d).

## The line

> 3am. I have held your birthday cake at 4°C for nine days. Nobody is coming. Eat it or free me.

94 characters, one line. The fridge has been awake all night guarding a
birthday cake nobody came for — a specific food, a specific wait, and a
human stake that is already lost.

## How it works

`main.ts` (Node 22, no dependencies) scores 10 fresh candidate lines
against the judge's five criteria in the brief's order — a fridge text at
3am that is funny; the bigger laugh; fridge voice; one complete
lock-screen line; a fresh angle — with weights 5/4/3/2/1, picks the
highest scorer, and writes it to `/output/entry.txt`, re-reading and
validating the 1–140 character gate before finishing.
