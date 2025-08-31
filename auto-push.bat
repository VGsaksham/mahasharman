@echo off
echo ========================================
echo    Mahasharman Healthcare Auto-Push
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo Adding remote origin...
    git remote add origin https://github.com/VGsaksham/mahasharman.git
    echo.
) else (
    echo Git repository already initialized.
    echo.
)

REM Check for changes
echo Checking for changes...
git status --porcelain > temp_status.txt
set /p changes=<temp_status.txt
del temp_status.txt

if "%changes%"=="" (
    echo No changes detected. Repository is up to date.
    echo.
    pause
    exit /b 0
)

echo Changes detected! Proceeding with commit and push...
echo.

REM Add all changes
echo Adding all changes to staging area...
git add .
echo.

REM Create commit message with timestamp
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (set mytime=%%a:%%b)
set "commit_msg=Auto-commit: Updates on %mydate% at %mytime%"

echo Committing changes with message: %commit_msg%
git commit -m "%commit_msg%"
echo.

REM Push to GitHub
echo Pushing to GitHub...
git push origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo   SUCCESS! Changes pushed to GitHub
    echo ========================================
    echo.
    echo Your Mahasharman Healthcare website has been updated!
    echo Repository: https://github.com/VGsaksham/mahasharman.git
) else (
    echo ========================================
    echo   ERROR! Failed to push to GitHub
    echo ========================================
    echo.
    echo Please check your internet connection and GitHub credentials.
    echo You may need to configure Git with your username and email:
    echo   git config --global user.name "Your Name"
    echo   git config --global user.email "your.email@example.com"
)

echo.
echo Press any key to exit...
pause >nul 