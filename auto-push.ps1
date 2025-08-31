# Mahasharman Healthcare Auto-Push Script
# PowerShell version with enhanced features

param(
    [string]$CommitMessage = ""
)

# Colors for output
$SuccessColor = "Green"
$ErrorColor = "Red"
$InfoColor = "Cyan"
$WarningColor = "Yellow"

function Write-ColoredText {
    param([string]$Text, [string]$Color = "White")
    Write-Host $Text -ForegroundColor $Color
}

function Write-Header {
    Write-Host "========================================" -ForegroundColor $InfoColor
    Write-Host "    Mahasharman Healthcare Auto-Push" -ForegroundColor $InfoColor
    Write-Host "========================================" -ForegroundColor $InfoColor
    Write-Host ""
}

function Initialize-GitRepo {
    if (-not (Test-Path ".git")) {
        Write-ColoredText "Initializing Git repository..." $InfoColor
        git init
        
        Write-ColoredText "Adding remote origin..." $InfoColor
        git remote add origin https://github.com/VGsaksham/mahasharman.git
        Write-Host ""
    } else {
        Write-ColoredText "Git repository already initialized." $SuccessColor
        Write-Host ""
    }
}

function Check-GitStatus {
    $status = git status --porcelain
    return $status.Length -gt 0
}

function Get-CommitMessage {
    param([string]$CustomMessage)
    
    if ($CustomMessage -ne "") {
        return $CustomMessage
    }
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    return "Auto-commit: Updates on $timestamp"
}

function Push-Changes {
    param([string]$CommitMsg)
    
    try {
        Write-ColoredText "Adding all changes to staging area..." $InfoColor
        git add .
        
        Write-ColoredText "Committing changes with message: $CommitMsg" $InfoColor
        git commit -m $CommitMsg
        
        Write-ColoredText "Pushing to GitHub..." $InfoColor
        git push origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "========================================" -ForegroundColor $SuccessColor
            Write-Host "   SUCCESS! Changes pushed to GitHub" -ForegroundColor $SuccessColor
            Write-Host "========================================" -ForegroundColor $SuccessColor
            Write-Host ""
            Write-ColoredText "Your Mahasharman Healthcare website has been updated!" $SuccessColor
            Write-ColoredText "Repository: https://github.com/VGsaksham/mahasharman.git" $InfoColor
            return $true
        } else {
            throw "Git push failed with exit code $LASTEXITCODE"
        }
    }
    catch {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor $ErrorColor
        Write-Host "   ERROR! Failed to push to GitHub" -ForegroundColor $ErrorColor
        Write-Host "========================================" -ForegroundColor $ErrorColor
        Write-Host ""
        Write-ColoredText "Error details: $($_.Exception.Message)" $ErrorColor
        Write-Host ""
        Write-ColoredText "Troubleshooting tips:" $WarningColor
        Write-ColoredText "1. Check your internet connection" $WarningColor
        Write-ColoredText "2. Verify GitHub credentials are configured:" $WarningColor
        Write-ColoredText "   git config --global user.name `"Your Name`"" $WarningColor
        Write-ColoredText "   git config --global user.email `"your.email@example.com`"" $WarningColor
        Write-ColoredText "3. Make sure you have push access to the repository" $WarningColor
        return $false
    }
}

# Main execution
Clear-Host
Write-Header

# Initialize git repository if needed
Initialize-GitRepo

# Check for changes
Write-ColoredText "Checking for changes..." $InfoColor
if (-not (Check-GitStatus)) {
    Write-ColoredText "No changes detected. Repository is up to date." $SuccessColor
    Write-Host ""
    Write-ColoredText "Press any key to exit..." $InfoColor
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 0
}

Write-ColoredText "Changes detected! Proceeding with commit and push..." $WarningColor
Write-Host ""

# Get commit message
$commitMessage = Get-CommitMessage -CustomMessage $CommitMessage

# Push changes
$success = Push-Changes -CommitMsg $commitMessage

Write-Host ""
if ($success) {
    Write-ColoredText "✓ All done! Your changes are now live on GitHub." $SuccessColor
} else {
    Write-ColoredText "✗ Push failed. Please check the errors above." $ErrorColor
}

Write-Host ""
Write-ColoredText "Press any key to exit..." $InfoColor
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 