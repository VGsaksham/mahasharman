# Auto-Update Scripts for Mahasharman Repository

This guide explains how to use the auto-update scripts to automatically sync your local changes with the GitHub repository at `https://github.com/VGsaksham/mahasharman.git`.

## Available Scripts

### 1. `auto-update.bat` (Windows Batch File)
- **Usage**: Double-click the file or run from command prompt
- **Best for**: Windows users who prefer batch files
- **Features**: Colored output, comprehensive error handling

### 2. `auto-update.ps1` (PowerShell Script)
- **Usage**: Right-click → "Run with PowerShell" or run from PowerShell terminal
- **Best for**: Windows users who prefer PowerShell
- **Features**: Better error handling, more modern syntax

## What the Scripts Do

The auto-update scripts perform the following operations automatically:

1. **Check Git Installation**: Verifies Git is installed and accessible
2. **Verify Repository**: Ensures you're in a Git repository
3. **Branch Management**: Switches to the `main` branch if needed
4. **Remote Configuration**: Adds the GitHub remote if not already configured
5. **Fetch Updates**: Downloads latest changes from remote repository
6. **Pull Changes**: Merges remote changes with local repository
7. **Check for Changes**: Identifies any local modifications
8. **Stage Changes**: Adds all modified files to staging area
9. **Commit Changes**: Creates a commit with timestamp
10. **Push Changes**: Uploads local changes to GitHub
11. **Status Report**: Shows final repository status and recent commits

## Prerequisites

Before using the scripts, ensure you have:

1. **Git Installed**: Download from [git-scm.com](https://git-scm.com/)
2. **GitHub Access**: Either:
   - SSH key configured, or
   - Personal Access Token for HTTPS authentication
3. **Repository Cloned**: The mahasharman repository should be cloned locally

## How to Use

### Method 1: Double-Click (Easiest)
1. Navigate to your project folder
2. Double-click `auto-update.bat` or `auto-update.ps1`
3. Follow the prompts if any errors occur

### Method 2: Command Line
```bash
# For batch file
auto-update.bat

# For PowerShell script
powershell -ExecutionPolicy Bypass -File auto-update.ps1
```

### Method 3: PowerShell Terminal
```powershell
# Navigate to project directory
cd "C:\Users\hp\OneDrive\Desktop\sites\base\mahasharman"

# Run the script
.\auto-update.ps1
```

## Authentication Setup

### Option 1: Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. When prompted, use the token as your password

### Option 2: SSH Key
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add public key to GitHub account
3. Use SSH URL: `git@github.com:VGsaksham/mahasharman.git`

## Troubleshooting

### Common Issues

1. **"Git not found"**
   - Install Git from [git-scm.com](https://git-scm.com/)
   - Ensure Git is added to PATH

2. **"Not in a Git repository"**
   - Run `git init` to initialize repository
   - Or clone the repository: `git clone https://github.com/VGsaksham/mahasharman.git`

3. **"Authentication failed"**
   - Set up Personal Access Token or SSH key
   - Configure Git credentials: `git config --global user.name "Your Name"`

4. **"Merge conflicts"**
   - The script will pause and show conflicts
   - Resolve conflicts manually, then continue

5. **"Permission denied"**
   - Run PowerShell as Administrator
   - Or change execution policy: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Manual Steps if Script Fails

If the script fails, you can perform the steps manually:

```bash
# 1. Check status
git status

# 2. Switch to main branch
git checkout main

# 3. Add remote (if needed)
git remote add origin https://github.com/VGsaksham/mahasharman.git

# 4. Fetch and pull
git fetch origin
git pull origin main

# 5. Add and commit changes
git add .
git commit -m "Auto-update: $(date)"

# 6. Push changes
git push origin main
```

## Customization

### Modify Commit Message
Edit the script to change the commit message format:
- **Batch file**: Line with `set "COMMIT_MESSAGE=..."`
- **PowerShell**: Line with `$commitMessage = ...`

### Add Custom Steps
You can add additional steps like:
- Running tests before commit
- Building the project
- Sending notifications

## Security Notes

- The scripts use HTTPS by default (more secure than SSH for most users)
- Personal Access Tokens should have minimal required permissions
- Never commit sensitive information like API keys or passwords
- Consider using `.gitignore` to exclude sensitive files

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the error messages in the script output
3. Ensure all prerequisites are met
4. Try running Git commands manually to isolate the issue

## Repository Information

- **GitHub URL**: https://github.com/VGsaksham/mahasharman.git
- **Default Branch**: `main`
- **Project Type**: React.js website for Mahasharman Ayurvedic products 