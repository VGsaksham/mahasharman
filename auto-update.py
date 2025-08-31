#!/usr/bin/env python3
"""
Mahasharman Auto-Update Script
Simple Python script to automatically update the repository
"""

import os
import subprocess
import sys
from datetime import datetime

def run_command(command, description):
    """Run a git command and handle errors"""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=True)
        print(f"✅ {description} completed")
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"❌ Error in {description}: {e.stderr}")
        return None

def main():
    print("=" * 50)
    print("    MAHASHARMAN AUTO-UPDATE SCRIPT")
    print("=" * 50)
    print()

    # Check if Git is installed
    print("🔍 Checking Git installation...")
    if run_command("git --version", "Git check") is None:
        print("❌ Git is not installed or not in PATH")
        input("Press Enter to exit...")
        sys.exit(1)

    # Check if we're in a Git repository
    if not os.path.exists(".git"):
        print("❌ Not in a Git repository")
        print("Please run this script from the project directory")
        input("Press Enter to exit...")
        sys.exit(1)

    print("✅ Git repository found")
    print()

    # Check current branch
    current_branch = run_command("git branch --show-current", "Getting current branch")
    if current_branch is None:
        input("Press Enter to exit...")
        sys.exit(1)

    print(f"📍 Current branch: {current_branch}")

    # Switch to main branch if needed
    if current_branch != "main":
        print("🔄 Switching to main branch...")
        if run_command("git checkout main", "Switch to main") is None:
            input("Press Enter to exit...")
            sys.exit(1)

    # Check remote repository
    print("🔍 Checking remote repository...")
    remotes = run_command("git remote -v", "Get remotes")
    if remotes and "VGsaksham/mahasharman.git" not in remotes:
        print("🔄 Adding remote repository...")
        if run_command("git remote add origin https://github.com/VGsaksham/mahasharman.git", "Add remote") is None:
            input("Press Enter to exit...")
            sys.exit(1)

    # Fetch latest changes
    if run_command("git fetch origin", "Fetch changes") is None:
        input("Press Enter to exit...")
        sys.exit(1)

    # Pull changes
    if run_command("git pull origin main", "Pull changes") is None:
        print("⚠️  Pull failed - there might be conflicts")
        print("Please resolve conflicts manually and run the script again")
        input("Press Enter to exit...")
        sys.exit(1)

    # Check for changes
    print("🔍 Checking for local changes...")
    status = run_command("git status --porcelain", "Check status")
    
    if not status:
        print("✅ No changes to commit")
    else:
        print("📝 Found changes to commit:")
        print(status)
        
        # Add all changes
        if run_command("git add .", "Add changes") is None:
            input("Press Enter to exit...")
            sys.exit(1)

        # Commit changes
        commit_message = f"Auto-update: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        if run_command(f'git commit -m "{commit_message}"', "Commit changes") is None:
            input("Press Enter to exit...")
            sys.exit(1)

    # Push changes
    print("🚀 Pushing changes to remote...")
    if run_command("git push origin main", "Push changes") is None:
        print("⚠️  Push failed, trying force push...")
        if run_command("git push origin main --force", "Force push") is None:
            print("❌ Force push also failed")
            print("Please check your internet connection and try again")
            input("Press Enter to exit...")
            sys.exit(1)

    # Show final status
    print()
    print("=" * 50)
    print("    FINAL STATUS")
    print("=" * 50)
    
    final_status = run_command("git status", "Get final status")
    if final_status:
        print(final_status)

    print()
    print("📋 Recent commits:")
    recent_commits = run_command("git log --oneline -5", "Get recent commits")
    if recent_commits:
        print(recent_commits)

    print()
    print("=" * 50)
    print("    AUTO-UPDATE COMPLETED SUCCESSFULLY!")
    print("=" * 50)
    print()
    print("Repository updated and pushed to:")
    print("https://github.com/VGsaksham/mahasharman.git")
    print()
    input("Press Enter to exit...")

if __name__ == "__main__":
    main() 