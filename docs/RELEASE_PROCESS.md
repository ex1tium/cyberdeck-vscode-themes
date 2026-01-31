# Release Process Documentation

This document outlines the release process for the Cyberdeck VS Code theme extension.

## Quick Release

Use the automated release script:

```bash
# Make the script executable (first time only)
chmod +x scripts/release.sh

# Release a patch version (1.0.0 → 1.0.1)
./scripts/release.sh patch

# Release a minor version (1.0.0 → 1.1.0)
./scripts/release.sh minor

# Release a major version (1.0.0 → 2.0.0)
./scripts/release.sh major

# Release a specific version
./scripts/release.sh 1.5.0
```

## Manual Release Process

### Step 1: Build Themes

```bash
npm run build
```

This generates theme JSON files from the palettes.

### Step 2: Prepare the Release

1. **Update Version in package.json**
   ```bash
   npm version patch  # or minor/major
   ```

2. **Update CHANGELOG.md**
   - Add a new section for the version
   - Document all changes, fixes, and new features

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "chore: bump version to X.Y.Z"
   git push origin main
   ```

### Step 3: Create and Push Tag

```bash
# Create tag (use the same version as in package.json)
git tag 1.0.1

# Push the tag to trigger the release workflow
git push origin 1.0.1
```

### Step 4: Monitor the Release

1. Go to [GitHub Actions](https://github.com/ex1tium/cyberdeck-vscode-themes/actions)
2. Watch the "Release" workflow run
3. Verify the release at [Releases](https://github.com/ex1tium/cyberdeck-vscode-themes/releases)

## GitHub Actions Workflow

The automated workflow (`.github/workflows/release.yml`) performs:

1. **Triggers** on tags matching `v*.*.*` or `*.*.*` patterns
2. **Builds** theme files from palettes
3. **Validates** package.json version matches the git tag
4. **Packages** the extension into a `.vsix` file
5. **Creates** a GitHub release with the `.vsix` as an asset

## What Gets Packaged

**Included in `.vsix`:**
- `package.json` - Extension metadata
- `themes/` - Generated theme files
- `README.md` - Documentation
- `CHANGELOG.md` - Version history
- `LICENSE` - License file
- `icon.png` - Extension icon
- `screenshots/` - Theme preview images

**Excluded (via `.vscodeignore`):**
- `node_modules/`
- `src/` - Source palettes and build scripts
- `.github/` - GitHub Actions workflows
- `scripts/` - Release scripts
- `language_demos/` - Demo files

## Publishing to Marketplace

After the GitHub release:

```bash
# Install vsce if needed
npm install -g @vscode/vsce

# Publish to marketplace (requires PAT)
vsce publish
```

Or publish the `.vsix` file manually through the [VS Code Marketplace Publisher](https://marketplace.visualstudio.com/manage).

## Adding New Variants

When adding a new theme variant:

1. Create palette in `src/palettes/`
2. Add to `src/build.js`
3. Register in `package.json` under `contributes.themes`
4. Add screenshot to `screenshots/`
5. Update README.md with variant info
6. Run `npm run build` to test
7. Release as a minor version bump

## Troubleshooting

**Build fails:**
- Check palette file exports a valid object
- Verify `src/base-theme.js` references exist

**Tag version doesn't match package.json:**
- Update `package.json` before creating the tag
- Use `npm version` to update both simultaneously

**VSIX creation fails:**
- Check for syntax errors in `package.json`
- Run `vsce package` locally to debug

## Links

- [VS Code Extension Publishing](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [GitHub Repository](https://github.com/ex1tium/cyberdeck-vscode-themes)
- [Semantic Versioning](https://semver.org/)
