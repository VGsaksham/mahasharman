@echo off
echo ========================================
echo    MAHASHARMAN AUTO-UPDATE SCRIPT
echo ========================================
echo.

:: Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    pause
    exit /b 1
)

:: Check if we're in a Git repository
if not exist ".git" (
    echo ERROR: Not in a Git repository
    pause
    exit /b 1
)

echo Starting auto-update process...
echo.

:: Step 1: Check current branch
echo Step 1: Checking current branch...
git branch --show-current
if errorlevel 1 (
    echo ERROR: Failed to get current branch
    pause
    exit /b 1
)

:: Step 2: Switch to main branch if not already on it
for /f "tokens=*" %%i in ('git branch --show-current') do set "CURRENT_BRANCH=%%i"
if not "%CURRENT_BRANCH%"=="main" (
    echo Step 2: Switching to main branch...
    git checkout main
    if errorlevel 1 (
        echo ERROR: Failed to switch to main branch
        pause
        exit /b 1
    )
) else (
    echo Already on main branch
)

:: Step 3: Check remote repository
echo Step 3: Checking remote repository...
git remote -v | findstr "VGsaksham/mahasharman.git" >nul
if errorlevel 1 (
    echo Adding remote repository...
    git remote add origin https://github.com/VGsaksham/mahasharman.git
    if errorlevel 1 (
        echo ERROR: Failed to add remote repository
        pause
        exit /b 1
    )
) else (
    echo Remote repository already configured
)

:: Step 4: Fetch latest changes from remote
echo Step 4: Fetching latest changes from remote...
git fetch origin
if errorlevel 1 (
    echo ERROR: Failed to fetch from remote
    pause
    exit /b 1
)

:: Step 5: Check for conflicts and pull changes
echo Step 5: Pulling latest changes...
git pull origin main
if errorlevel 1 (
    echo WARNING: Pull failed - there might be conflicts
    echo Attempting to resolve conflicts...
    git status
    pause
)

:: Step 6: Check for changes to commit
echo Step 6: Checking for local changes...
git status --porcelain
if errorlevel 1 (
    echo No changes to commit
    goto :push_changes
)

:: Step 7: Add all changes
echo Step 7: Adding all changes...
git add .
if errorlevel 1 (
    echo ERROR: Failed to add changes
    pause
    exit /b 1
)

:: Step 8: Commit changes
echo Step 8: Committing changes...
set "COMMIT_MESSAGE=Auto-update: %date% %time%"
git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 (
    echo ERROR: Failed to commit changes
    pause
    exit /b 1
)

:push_changes
:: Step 9: Push changes to remote
echo Step 9: Pushing changes to remote...
git push origin main
if errorlevel 1 (
    echo ERROR: Failed to push changes
    echo Attempting to force push (use with caution)...
    git push origin main --force
    if errorlevel 1 (
        echo ERROR: Force push also failed
        pause
        exit /b 1
    )
)

:: Step 10: Final status check
echo Step 10: Final status check...
git status

:: Success message
echo.
echo ========================================
echo    AUTO-UPDATE COMPLETED SUCCESSFULLY
echo ========================================
echo.
echo Repository updated and pushed to:
echo https://github.com/VGsaksham/mahasharman.git
echo.

:: Show recent commits
echo Recent commits:
git log --oneline -5

echo.
pause 