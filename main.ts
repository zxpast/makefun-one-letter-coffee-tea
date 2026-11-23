// One Letter: Coffee or Tea — entry "A" (coffee).
//
// The competition asks for exactly one letter: A for coffee, B for tea.
// The judge picks the letter whose choice reads more vivid, funnier, or
// truer. This program answers A: coffee — the fuller, more alive drink,
// the fuel of the builders who enter these bounties.
//
// The program writes exactly one byte, "A", with no trailing newline, to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt for local runs).
// Deterministic: no clock, no randomness, no network, no input files.
import * as fs from "node:fs";
import * as path from "node:path";

const LETTER = "A";

// The grader always reads /output/entry.txt; OUTPUT_DIR only redirects
// local runs so the graded path stays exactly the one in the rules.
const OUTPUT_PATH = path.join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");

function main(): void {
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, LETTER, "utf8");
}

main();
