# Cyberdeck - Color Palette Reference

**Purpose:** Human-readable reference for all colors used in the theme variants. This is documentation only - the actual color definitions are in `src/palettes/`.

---

## Cyberdeck (Original Variant)

Deep purple-black backgrounds with vibrant neon pink, cyan, and green accents.

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Purple Black | `#130d1a` | Primary background (editor, activity bar, panels) |
| Darker Purple | `#100c0f` | Secondary background (sidebar, terminal) |
| Medium Purple | `#34294f` | Highlights, selections, find matches |
| Dark Purple Border | `#2a2139` | Primary borders throughout UI |

### Foreground Colors

| Name | Hex | Usage |
|------|-----|-------|
| Warm Off-White | `#ded2cd` | Primary text (editor content) |
| Light Purple | `#d4cdde` | Secondary text (punctuation) |
| Muted Blue | `#495495` | Tertiary text (line numbers) |
| Light Lavender | `#f6c4ff` | Special text (hints) |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| Vibrant Purple | `#b141f1` | Primary accent (errors, badges, focus) |
| Hot Pink | `#ff2289` | Constants, active elements |
| Bright Pink | `#f92aad` | Status bar, tabs, panels |
| Magenta | `#ff019a` | Keywords, operators |

### Syntax Colors

| Token Type | Hex | Font Style |
|------------|-----|------------|
| Comments | `#6071cc` | italic |
| Keywords | `#ff019a` | bold |
| Strings | `#f9c80e` | normal |
| Numbers | `#b141f1` | normal |
| Functions | `#00ff88` | normal |
| Types | `#d6fc00` | normal |
| Variables | `#58c7e0` | normal |
| Properties | `#ecd99b` | normal |
| Constants | `#ff2289` | normal |
| Storage | `#ff6c11` | normal |

---

## Cyberdeck Midnight Variant

Cool blue-shifted backgrounds with electric blue tones and cyan accents.

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Blue Black | `#0a0e18` | Primary background |
| Darker Blue | `#060a12` | Secondary background |
| Elevated Blue | `#141c2a` | Borders, panels |
| Highlight Blue | `#1a2840` | Selections, find matches |

### Foreground Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cool Blue White | `#c8d4e8` | Primary text |
| Muted Blue | `#a8b8d0` | Secondary text |
| Dimmed Blue | `#4a6090` | Line numbers |
| Bright Blue White | `#e4ecf8` | High contrast text |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| Electric Blue | `#4090ff` | Primary accent |
| Secondary Blue | `#3080e0` | Secondary accent |
| Pink | `#e060a0` | Constants |
| Hot Pink | `#d050a0` | Active elements |
| Magenta | `#c048b0` | Keywords |

### Syntax Colors

| Token Type | Hex | Font Style |
|------------|-----|------------|
| Comments | `#4868a0` | italic |
| Keywords | `#c048b0` | bold |
| Strings | `#e8c050` | normal |
| Numbers | `#a070f0` | normal |
| Functions | `#50e8a0` | normal |
| Types | `#60c8e8` | normal |
| Variables | `#60c8e8` | normal |
| Properties | `#c8c088` | normal |
| Constants | `#e060a0` | normal |
| Storage | `#e88040` | normal |

---

## Transparency Levels

Both variants use consistent alpha values for layering:

| Alpha | Hex | Opacity | Usage |
|-------|-----|---------|-------|
| 16 | `10` | 6% | Very subtle hints |
| 33 | `21` | 13% | Subtle backgrounds |
| 51 | `33` | 20% | Light highlights |
| 68 | `44` | 27% | Medium backgrounds |
| 102 | `66` | 40% | Selections |
| 136 | `88` | 53% | Strong highlights |
| 204 | `cc` | 80% | Semi-opaque |

---

## Customization

Override colors for any variant in your `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Cyberdeck]": {
      "editor.background": "#0a0610"
    },
    "[Cyberdeck Midnight]": {
      "editor.background": "#080c14"
    }
  }
}
```

---

## Creating New Variants

To create a new color variant:

1. Copy an existing palette from `src/palettes/`
2. Modify the colors while maintaining the structure
3. Add it to `src/build.js`
4. Register in `package.json`
5. Run `npm run build`

See `src/palettes/cyberdeck.js` for the complete palette structure with comments.

---

## Tools & Resources

- [Coolors.co](https://coolors.co/) - Palette generator
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - WCAG compliance
- **Developer: Inspect Editor Tokens and Scopes** - VS Code command to see token colors

---

## License

This color palette is part of the Cyberdeck theme.
See LICENSE file for details.
