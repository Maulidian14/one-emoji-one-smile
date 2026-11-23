// SPDX-License-Identifier: MIT
// One Emoji, One Smile — writes exactly one emoji to /output/entry.txt.
// The emoji: a hugging face. Open arms are the warmest gesture a stranger
// can send with no words at all: kind, friendly, and instantly readable
// in any language, with no irony, no in-joke, and nothing intimate.
// It is a deliberate pick, not the first smiley that comes to mind.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const emoji = "\u{1F917}";

const here = dirname(fileURLToPath(import.meta.url));
const candidates = ["/output/entry.txt", join(here, "entry.txt")];

for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, emoji, "utf8");
  } catch {
    // Fall through to the next candidate path.
  }
}
