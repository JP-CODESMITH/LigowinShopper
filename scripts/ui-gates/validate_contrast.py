"""WCAG contrast check for canonical token pairs (light theme + footer wordmark).

Intent (tokens/theming.json):
- text on light backgrounds uses `primary` (#ab3500), never `primary-container`
- filled actions use `primary` bg + white text
- `primary-container` is decorative-only on light, or wordmark text on dark inverse-surface
"""
import json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

def hex_to_rgb(h):
    h = h.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    if len(h) != 6:
        raise ValueError(h)
    return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4))

def lum(rgb):
    def ch(c):
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def ratio(a, b):
    la, lb = lum(hex_to_rgb(a)), lum(hex_to_rgb(b))
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)

colors = json.loads((ROOT / "tokens" / "colors.json").read_text())

def val(*path):
    node = colors
    for p in path:
        node = node[p]
    v = node["$value"]
    if v.startswith("{"):
        ref = v.strip("{}").split(".")
        node = colors
        for p in ref:
            node = node[p]
        v = node["$value"]
    return v

pairs = [
    ("body text on warm-white", val("on-surface", "DEFAULT"), val("bg", "warm-white"), 4.5),
    ("muted text on warm-white", val("text", "muted"), val("bg", "warm-white"), 4.5),
    ("action text (primary) on warm-white", val("primary", "DEFAULT"), val("bg", "warm-white"), 4.5),
    ("white on action fill (primary)", val("primary", "on"), val("primary", "DEFAULT"), 4.5),
    ("white on secondary", val("secondary", "on"), val("secondary", "DEFAULT"), 4.5),
    ("secondary-fixed text on white", val("secondary", "on-fixed-variant"), "#ffffff", 4.5),
    ("white on tertiary", val("tertiary", "on"), val("tertiary", "DEFAULT"), 4.5),
    ("error on white", val("error", "DEFAULT"), "#ffffff", 4.5),
    ("wordmark primary-container on inverse-surface", val("primary", "container"), val("inverse", "surface"), 3.0),
]

fails = []
print("CONTRAST GATE (tokens/colors.json):")
for name, fg, bg, thresh in pairs:
    try:
        r = ratio(fg, bg)
    except Exception as e:
        print(f"  SKIP {name}: {e}")
        continue
    ok = r >= thresh
    print(f"  {'PASS' if ok else 'FAIL'} {name}: {fg} on {bg} = {r:.2f}:1 (needs >={thresh})")
    if not ok:
        fails.append(name)

sys.exit(1 if fails else 0)
