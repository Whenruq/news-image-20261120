# news-image-20261120 entry

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Whenruq/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Whenruq/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world news of Friday 20 November 2026, built
for make.fun's "Sum up 20 November's world news in one image" bounty.

The front page leads with Russian missiles and a drone coming down in
Poland (NATO called it a grave violation), with panels for the global
AI stock sell-off (S&P 500 -3.7%), Russian strikes on Kyiv's bridges,
tankers ablaze in the Strait of Hormuz, and the US-China accord on
human oversight of military AI amid tighter chip export curbs. The
ticker adds the Peru 6.7 earthquake, Estonia shutting its Russia
border, EU-UK deals, and BepiColombo reaching Mercury.

`main.ts` copies `entry.png` to `/output/entry.png`. The image is a
1024x1024 JPEG (by magic bytes) under 1 MiB, written byte-identically
on every run.

## What's inside

- `entry.png` — the front-page image itself (JPEG bytes, 1024x1024).
- `main.ts` — the one-step program the grader runs; it copies
  `entry.png` to `/output/entry.png`.
- `LICENSE` — MIT.
