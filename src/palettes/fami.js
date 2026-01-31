/**
 * Cyberdeck Fami - Famicom/Nintendo Retro Light Theme
 * Warm cream plastic with wine red accents, 80s console nostalgia
 */
module.exports = {
  name: "Cyberdeck Fami",
  type: "light", // vs (light theme!)

  // ==========================================================================
  // BACKGROUND COLORS - Warm cream retro plastic
  // ==========================================================================
  bg: {
    base: "#F8F4EC",        // Warm cream (main editor)
    darker: "#EDE8DC",      // Slightly darker cream (sidebar)
    elevated: "#FFFDF8",    // Bright cream (panels, dropdowns)
    highlight: "#F0E8D8",   // Warm highlight
    selection: "#E8D0D0",   // Soft pink-cream selection
    hover: "#F2EAE0",       // Subtle cream hover
    inactive: "#E8E4DC",    // Muted cream unfocused
    debug: "#F5E8E0",       // Warm cream debug toolbar
  },

  // ==========================================================================
  // FOREGROUND / TEXT COLORS - Dark charcoal on cream
  // ==========================================================================
  fg: {
    base: "#2D2A26",        // Dark charcoal (main text)
    muted: "#5A5248",       // Brown-gray (sidebar text)
    dimmed: "#9A9080",      // Muted tan (line numbers)
    bright: "#1A1816",      // Near black
    soft: "#706860",        // Soft brown for hints
    inactive: "#A8A090",    // Light brown-gray
  },

  // ==========================================================================
  // ACCENT COLORS - Famicom wine red and gold
  // ==========================================================================
  accent: {
    primary: "#A01830",     // Famicom wine red
    secondary: "#C8A030",   // Controller gold
    pink: "#C03050",        // Lighter red
    hotPink: "#A01830",     // Wine red for status
    magenta: "#801028",     // Deep wine
  },

  // ==========================================================================
  // SYNTAX HIGHLIGHTING - Authentic Famicom hardware colors
  // ==========================================================================
  syntax: {
    function: "#B8922E",    // Controller gold (functions are golden!)
    type: "#8B1A2E",        // Deep wine red (types are prominent)
    string: "#B02838",      // Famicom red (strings!)
    builtin: "#6B4820",     // Dark bronze (built-ins)
    keyword: "#A01830",     // Wine red keywords
    storage: "#885820",     // Deep bronze/brown
    namespace: "#704018",   // Dark warm brown
    attribute: "#C8A030",   // Bright controller gold
    comment: "#9A8A78",     // Muted warm tan
    punctuation: "#5A4A38", // Warm charcoal
    property: "#A07828",    // Warm gold-brown
    constant: "#982030",    // Deep Famicom red
    number: "#B87820",      // Amber gold
    escape: "#C8A030",      // Controller gold
    invalid: "#D8D0C8",     // Light muted
    error: "#C02020",       // Red
  },

  // ==========================================================================
  // UI STATE COLORS - Famicom-friendly
  // ==========================================================================
  state: {
    error: "#A01830",       // Wine red
    errorBg: "#F8E0E0",     // Light red background
    warning: "#B87820",     // Amber gold
    info: "#704018",        // Dark brown
    hint: "#A07828",        // Warm gold
    success: "#6B7830",     // Muted olive
    added: "#E8ECD8",       // Light warm green
    deleted: "#F8D8D8",     // Light red
    modified: "#F0E8C8",    // Light gold
  },

  // ==========================================================================
  // TERMINAL ANSI COLORS - Famicom-inspired (warm, limited palette)
  // ==========================================================================
  terminal: {
    black: "#2D2A26",
    red: "#A01830",
    green: "#6B7830",       // Muted olive (Famicom-era green)
    yellow: "#C8A030",      // Controller gold
    blue: "#5A4A38",        // Warm charcoal-brown (no blue on Famicom)
    magenta: "#8B1A2E",     // Deep wine
    cyan: "#A07828",        // Warm gold-tan
    white: "#E8E4DC",
    brightBlack: "#5A5248",
    brightRed: "#C03040",
    brightGreen: "#7B8838",
    brightYellow: "#D4B040",
    brightBlue: "#6B5A48",
    brightMagenta: "#A02838",
    brightCyan: "#B88830",
    brightWhite: "#F8F4EC",
  },

  // ==========================================================================
  // SPECIAL COLORS - Famicom hardware palette
  // ==========================================================================
  special: {
    cursor: "#A01830",      // Wine red cursor
    link: "#8B1A2E",        // Deep wine links
    linkActive: "#C03040",  // Bright red active
    console: "#C8A030",     // Controller gold
    debugToken: "#704018",
    errorToken: "#A01830",
    infoToken: "#6B4820",
    warnToken: "#B87820",
  },
};
