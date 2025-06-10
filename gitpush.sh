#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print with color
print_color() {
    printf "${1}%s${NC}\n" "${2}"
}

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    print_color "$RED" "No changes to commit!"
    exit 1
fi

# Show current git status
print_color "$YELLOW" "\nCurrent git status:"
git status

# Show changes
print_color "$YELLOW" "\nChanges to be committed:"
git diff --cached

# Prompt for commit message
print_color "$GREEN" "\nEnter commit message:"
read -r commit_message

if [ -z "$commit_message" ]; then
    print_color "$RED" "Commit message cannot be empty!"
    exit 1
fi

# Add all changes
print_color "$GREEN" "\nAdding all changes..."
git add .

# Commit changes
print_color "$GREEN" "\nCommitting changes..."
git commit -m "$commit_message"

# Push to remote
print_color "$YELLOW" "\nPushing to remote..."
git push

# Check if push was successful
if [ $? -eq 0 ]; then
    print_color "$GREEN" "\nSuccessfully pushed to remote!"
else
    print_color "$RED" "\nFailed to push to remote!"
    exit 1
fi
