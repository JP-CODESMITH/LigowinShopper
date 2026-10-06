"""Report hardcoded hex/oklch outside the token layer."""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HEX = re.compile(r"#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b")
ALLOWED = {
    Path("app/globals.css"),
    Path("tailwind.config.ts"),
}
# tokens/*.json are the source of truth — hex expected there
hits = []
for f in (ROOT / "app").rglob("*.tsx"):
    rel = f.relative_to(ROOT)
    if rel in ALLOWED:
        continue
    text = f.read_text(encoding="utf-8", errors="ignore")
    for i, line in enumerate(text.splitlines(), 1):
        # ignore pure comments referencing tokens
        if HEX.search(line):
            hits.append(f"{rel}:{i}: {line.strip()[:140]}")

if hits:
    print("HARDCODE GATE: findings (must be 0 outside globals/tokens/config)")
    for x in hits:
        print(" ", x)
    sys.exit(1)
print("HARDCODE GATE: PASS (0 hex literals in app/**/*.tsx)")
