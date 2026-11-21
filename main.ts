// Entry for make.fun's news-image-20261120 bounty (Node 22, standard library only).
// The entry image is the entry.png beside this file: a 1024x1024 front page summing up
// Friday 20 November 2026 (missiles over Poland, the AI stock sell-off, Kyiv bridges
// struck, tankers ablaze in Hormuz, the US-China military-AI accord). The program
// copies it to /output/entry.png; the gate takes a whole PNG or JPEG of at most
// 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Deterministic by construction: the same committed bytes are copied on every run,
// so two runs write identical output, as the bounty requires.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
