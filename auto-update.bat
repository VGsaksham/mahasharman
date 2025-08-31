@echo off
title Mahasharman Auto-Update Script

echo ========================================
echo    MAHASHARMAN AUTO-UPDATE SCRIPT
echo ========================================
echo.

python auto-update.py

if errorlevel 1 (
    echo.
    echo Script failed. Press any key to exit.
    pause >nul
) else (
    echo.
    echo Script completed successfully!
    pause
) 