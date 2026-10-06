"""Fail if emoji/pictographs appear in product UI source."""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TARGETS = [ROOT / "app", ROOT / "tokens"]

EMOJI_RE = re.compile(
    "["
    "\U0001F300-\U0001FAFF"
    "\u2600-\u27BF"
    "\u2B00-\u2BFF"
    "\uFE0F"
    "]"
)

# Allowlist: none in UI. Arrow glyphs handled as SVG; keep list empty.
ALLOW_FILES = set()

fails = []
for base in TARGETS:
    for f in base.rglob("*.tsx"):
        if f.name in ALLOW_FILES:
            continue
        text = f.read_text(encoding="utf-8", errors="ignore")
        for i, line in enumerate(text.splitlines(), 1):
            if EMOJI_RE.search(line):
                fails.append(f"{f.relative_to(ROOT)}:{i}: {line.strip()[:120]}")

if fails:
    print("EMOJI GATE: FAIL")
    for x in fails:
        print(" ", x)
    sys.exit(1)
print("EMOJI GATE: PASS (0 emoji in app/**/*.tsx)")
