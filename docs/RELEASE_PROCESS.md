# Release Process Documentation

This document outlines the automated release process for the Cyberdeck 2025 VS Code theme extension.

## 🚀 Quick Release

Use the automated release script:

```bash
# Make the script executable (first time only)
chmod +x scripts/release.sh

# Release a patch version (1.1.2 → 1.1.3)
./scripts/release.sh patch

# Release a minor version (1.1.2 → 1.2.0)
./scripts/release.sh minor

# Release a major version (1.1.2 → 2.0.0)
./scripts/release.sh major

# Release a specific version
./scripts/release.sh 1.5.0
```

## 📋 Manual Release Process

### Step 1: Prepare the Release

1. **Update Version in package.json**
   ```bash
   npm version patch  # or minor/major
   ```

2. **Update CHANGELOG.md**
   - Add a new section for the version
   - Document all changes, fixes, and new features
   - Include the release date

3. **Commit Changes**
   ```bash
   git add package.json CHANGELOG.md
   git commit -m "chore: bump version to X.Y.Z"
   git push origin main
   ```

### Step 2: Create and Push Tag

```bash
# Create tag (use the same version as in package.json)
git tag 1.1.3

# Push the tag to trigger the release workflow
git push origin 1.1.3
```

### Step 3: Monitor the Release

1. Go to [GitHub Actions](https://github.com/ex1tium/cyberdeck-2025_vscode_theme/actions)
2. Watch the "Release" workflow run
3. Verify the release is created at [Releases](https://github.com/ex1tium/cyberdeck-2025_vscode_theme/releases)

## 🔧 GitHub Actions Workflow

The automated workflow (`.github/workflows/release.yml`) performs these steps:

1. **Triggers** on tags matching `v*.*.*` or `*.*.*` patterns
2. **Sets up** Node.js 22 LTS environment
3. **Installs** dependencies and VS Code Extension CLI (`vsce`)
4. **Validates** that package.json version matches the git tag
5. **Packages** the extension into a `.vsix` file
6. **Creates** a GitHub release with:
   - Automatic release notes
   - Installation instructions
   - The `.vsix` file as a downloadable asset

## 📦 What Gets Packaged

The `.vsix` file includes:
- `package.json` - Extension metadata
- `themes/` - Theme definition files
- `README.md` - Documentation
- `CHANGELOG.md` - Version history
- `LICENSE` - License file
- `icon.png` - Extension icon
- `docs/` - Additional documentation
- `screenshots/` - Theme preview images

**Excluded from package** (via `.vscodeignore`):
- `node_modules/`
- `.github/` - GitHub Actions workflows
- `scripts/` - Build and development scripts
- `language_demos/` - Demo files for testing
- Development and build files

## 🏷️ Tag Format Support

Both tag formats are supported:
- **With `v` prefix**: `v1.1.3`, `v2.0.0`
- **Without `v` prefix**: `1.1.3`, `2.0.0`

## ✅ Version Validation

The workflow automatically validates that:
- The git tag version matches the `package.json` version
- The `.vsix` file is successfully created
- All required files are included in the package

## 🔍 Troubleshooting

### Common Issues

**Tag version doesn't match package.json:**
- Ensure you updated `package.json` before creating the tag
- Use `npm version` command to update both simultaneously

**Workflow doesn't trigger:**
- Verify the tag follows the correct pattern (`*.*.*` or `v*.*.*`)
- Check that the tag was pushed to the remote repository

**VSIX creation fails:**
- Check for syntax errors in `package.json`
- Verify all required files exist
- Review the `.vscodeignore` file for excluded files

### Debugging

1. **Check workflow logs** in GitHub Actions
2. **Test locally** with `vsce package`
3. **Validate package.json** with `npm run lint` (if available)

## 🔗 Related Links

- [VS Code Extension Publishing](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
