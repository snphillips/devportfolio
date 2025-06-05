// ────────────────────────────────────────────────────────────────────────────
// File: stylelint.config.js
// ────────────────────────────────────────────────────────────────────────────

module.exports = {
  // Just extend the official “standard” preset. In v16, that preset
  // no longer includes any of the removed “stylistic” rules.
  extends: [
    'stylelint-config-standard',
  ],

  rules: {
    /**
     * Add any non‐stylistic (semantic/validity) rules you care about.
     * For example:
     */

    // Disallow empty blocks:
    'block-no-empty': true,

    // Disallow invalid hex colors (e.g. “#GGGGGG”):
    'color-no-invalid-hex': true,

    // Limit nesting depth (for SCSS or nested rules):
    'max-nesting-depth': [3, { ignore: ['pseudo-classes'] }],

    // Disallow duplicate properties in the same declaration block:
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
    }],

    // If your CSS uses custom properties inside @media, turn off the “invalid” check:
    'media-query-no-invalid': null,

    // If you want to allow shorthand to override previous declarations:
    'declaration-block-no-shorthand-property-overrides': null,

    // …any other semantic rules you need…
  },
};
