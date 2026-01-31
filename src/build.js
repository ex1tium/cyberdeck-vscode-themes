#!/usr/bin/env node
/**
 * Cyberdeck 2025 Theme Build Script
 * Generates VS Code theme files from palettes
 */

const fs = require("fs");
const path = require("path");

const buildTheme = require("./base-theme");

// Theme configurations - add new variants here
const themes = [
  {
    palette: require("./palettes/cyberdeck"),
    filename: "Cyberdeck-color-theme.json",
  },
  {
    palette: require("./palettes/midnight"),
    filename: "Cyberdeck-Midnight-color-theme.json",
  },
  {
    palette: require("./palettes/sunset"),
    filename: "Cyberdeck-Sunset-color-theme.json",
  },
  {
    palette: require("./palettes/trix"),
    filename: "Cyberdeck-Trix-color-theme.json",
  },
  {
    palette: require("./palettes/vapor"),
    filename: "Cyberdeck-Vapor-color-theme.json",
  },
  {
    palette: require("./palettes/chrome"),
    filename: "Cyberdeck-Chrome-color-theme.json",
  },
  {
    palette: require("./palettes/sakura"),
    filename: "Cyberdeck-Sakura-color-theme.json",
  },
  {
    palette: require("./palettes/dynasty"),
    filename: "Cyberdeck-Dynasty-color-theme.json",
  },
  {
    palette: require("./palettes/arcade"),
    filename: "Cyberdeck-Arcade-color-theme.json",
  },
  {
    palette: require("./palettes/fami"),
    filename: "Cyberdeck-Fami-color-theme.json",
  },
  {
    palette: require("./palettes/amber"),
    filename: "Cyberdeck-Monochrome-Amber-color-theme.json",
  },
  {
    palette: require("./palettes/green"),
    filename: "Cyberdeck-Monochrome-Green-color-theme.json",
  },
  {
    palette: require("./palettes/white"),
    filename: "Cyberdeck-Monochrome-White-color-theme.json",
  },
  {
    palette: require("./palettes/p7"),
    filename: "Cyberdeck-Monochrome-P7-color-theme.json",
  },
  {
    palette: require("./palettes/2077"),
    filename: "Cyberdeck-2077-color-theme.json",
  },
  {
    palette: require("./palettes/salvage"),
    filename: "Cyberdeck-Salvage-color-theme.json",
  },
  {
    palette: require("./palettes/eva01"),
    filename: "Cyberdeck-EVA-01-color-theme.json",
  },
  {
    palette: require("./palettes/deusex"),
    filename: "Cyberdeck-Deus-Ex-color-theme.json",
  },
  {
    palette: require("./palettes/akira"),
    filename: "Cyberdeck-Akira-color-theme.json",
  },
  // Add more variants by creating a new palette file and adding it here
];

// Output directory
const themesDir = path.join(__dirname, "..", "themes");

// Ensure themes directory exists
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

// Build each theme
console.log("Building Cyberdeck themes...\n");

themes.forEach(({ palette, filename }) => {
  const theme = buildTheme(palette);
  const outputPath = path.join(themesDir, filename);

  // Convert to JSON with comments stripped (VS Code doesn't support JSON comments in themes)
  const json = JSON.stringify(theme, null, 2);

  fs.writeFileSync(outputPath, json);
  console.log(`  ✓ Built: ${filename} (${palette.name})`);
});

console.log("\nDone! Theme files generated in /themes directory.");
