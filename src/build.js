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
