# Quick Start Guide - Auto Update Scripts

## 🚀 How to Use

### Option 1: Double-Click (Easiest)
1. Navigate to your project folder: `C:\Users\hp\OneDrive\Desktop\sites\base\mahasharman`
2. Double-click `auto-update.bat`
3. Follow any prompts if errors occur

### Option 2: PowerShell
```powershell
# Navigate to project
cd "C:\Users\hp\OneDrive\Desktop\sites\base\mahasharman"

# Run PowerShell script
.\auto-update.ps1
```

## 📋 What It Does

The script automatically:
- ✅ Switches to main branch
- ✅ Fetches latest changes from GitHub
- ✅ Adds all your local changes
- ✅ Commits with timestamp
- ✅ Pushes to: https://github.com/VGsaksham/mahasharman.git

## 🔧 Prerequisites

- Git installed (download from git-scm.com)
- GitHub access (Personal Access Token recommended)
- Repository cloned locally

## 🆘 If Something Goes Wrong

1. **Authentication Error**: Set up Personal Access Token in GitHub
2. **Merge Conflicts**: Script will pause - resolve manually then continue
3. **Permission Denied**: Run PowerShell as Administrator

## 📁 Files Created

- `auto-update.bat` - Windows batch file
- `auto-update.ps1` - PowerShell script  
- `AUTO-UPDATE-GUIDE.md` - Detailed documentation
- `QUICK-START.md` - This file

## 🎯 Success Indicators

When successful, you'll see:
```
========================================
    AUTO-UPDATE COMPLETED SUCCESSFULLY
========================================
Repository updated and pushed to:
https://github.com/VGsaksham/mahasharman.git
```

## 📞 Support

For detailed help, see `AUTO-UPDATE-GUIDE.md` 