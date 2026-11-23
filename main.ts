// One Sentence, One Journey — make.fun bounty entry
// SPDX-License-Identifier: MIT
//
// Writes a complete story about a journey, told in exactly one sentence,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22, stdlib only, no network, fully deterministic: the same entry
// is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "She boarded the night train in Kraków with a suitcase of letters she meant to burn, but by Vienna she had read every one aloud to a sleeping stranger, and she stepped onto the platform carrying nothing but coal smoke and a name she had finally forgiven.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
