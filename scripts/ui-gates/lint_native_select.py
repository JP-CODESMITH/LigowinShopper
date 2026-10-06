"""Fail if native <select> remains in app UI (Listbox required)."""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
pat = re.compile(r"<select[\s>]")
fails = []
for f in (ROOT / "app").rglob("*.tsx"):
    text = f.read_text(encoding="utf-8", errors="ignore")
    for i, line in enumerate(text.splitlines(), 1):
        if pat.search(line):
            fails.append(f"{f.relative_to(ROOT)}:{i}: {line.strip()[:140]}")

if fails:
    print("NATIVE SELECT GATE: FAIL")
    for x in fails:
        print(" ", x)
    sys.exit(1)
print("NATIVE SELECT GATE: PASS (0 <select> in app)")
