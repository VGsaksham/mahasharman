# MAHASHARMAN AUTO-UPDATE SCRIPT (PowerShell Version)
# This script automatically handles Git operations for the mahasharman repository

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    MAHASHARMAN AUTO-UPDATE SCRIPT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Function to write colored output
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-ColorOutput "Git found: $gitVersion" "Green"
} catch {
    Write-ColorOutput "ERROR: Git is not installed or not in PATH" "Red"
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if we're in a Git repository
if (-not (Test-Path ".git")) {
    Write-ColorOutput "ERROR: Not in a Git repository" "Red"
    Read-Host "Press Enter to exit"
    exit 1
}

Write-ColorOutput "Starting auto-update process..." "Blue"
Write-Host ""

# Step 1: Check current branch
Write-ColorOutput "Step 1: Checking current branch..." "Yellow"
$currentBranch = git branch --show-current
Write-ColorOutput "Current branch: $currentBranch" "Green"

# Step 2: Switch to main branch if not already on it
if ($currentBranch -ne "main") {
    Write-ColorOutput "Step 2: Switching to main branch..." "Yellow"
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "ERROR: Failed to switch to main branch" "Red"
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-ColorOutput "Already on main branch" "Green"
}

# Step 3: Check and configure remote repository
Write-ColorOutput "Step 3: Checking remote repository..." "Yellow"
$remotes = git remote -v
if ($remotes -notmatch "VGsaksham/mahasharman\.git") {
    Write-ColorOutput "Adding remote repository..." "Yellow"
    git remote add origin https://github.com/VGsaksham/mahasharman.git
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "ERROR: Failed to add remote repository" "Red"
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-ColorOutput "Remote repository already configured" "Green"
}

# Step 4: Fetch latest changes from remote
Write-ColorOutput "Step 4: Fetching latest changes from remote..." "Yellow"
git fetch origin
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "ERROR: Failed to fetch from remote" "Red"
    Read-Host "Press Enter to exit"
    exit 1
}

# Step 5: Pull latest changes
Write-ColorOutput "Step 5: Pulling latest changes..." "Yellow"
git pull origin main
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "WARNING: Pull failed - there might be conflicts" "Red"
    Write-ColorOutput "Attempting to resolve conflicts..." "Yellow"
    git status
    Read-Host "Press Enter to continue"
}

# Step 6: Check for changes to commit
Write-ColorOutput "Step 6: Checking for local changes..." "Yellow"
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-ColorOutput "No changes to commit" "Green"
} else {
    Write-ColorOutput "Found changes to commit:" "Yellow"
    Write-Host $status
    
    # Step 7: Add all changes
    Write-ColorOutput "Step 7: Adding all changes..." "Yellow"
    git add .
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "ERROR: Failed to add changes" "Red"
        Read-Host "Press Enter to exit"
        exit 1
    }
    
    # Step 8: Commit changes
    Write-ColorOutput "Step 8: Committing changes..." "Yellow"
    $commitMessage = "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMessage
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "ERROR: Failed to commit changes" "Red"
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# Step 9: Push changes to remote
Write-ColorOutput "Step 9: Pushing changes to remote..." "Yellow"
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "ERROR: Failed to push changes" "Red"
    Write-ColorOutput "Attempting to force push (use with caution)..." "Yellow"
    git push origin main --force
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "ERROR: Force push also failed" "Red"
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# Step 10: Final status check
Write-ColorOutput "Step 10: Final status check..." "Yellow"
git status

# Success message
Write-Host ""
Write-ColorOutput "========================================" "Green"
Write-ColorOutput "    AUTO-UPDATE COMPLETED SUCCESSFULLY" "Green"
Write-ColorOutput "========================================" "Green"
Write-Host ""
Write-ColorOutput "Repository updated and pushed to:" "Green"
Write-ColorOutput "https://github.com/VGsaksham/mahasharman.git" "Blue"
Write-Host ""

# Show recent commits
Write-ColorOutput "Recent commits:" "Yellow"
git log --oneline -5

Write-Host ""
Read-Host "Press Enter to exit" 