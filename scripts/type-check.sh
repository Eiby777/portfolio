#!/bin/bash

# TypeScript Type Check Wrapper Script
# This script provides a proper way to check TypeScript types with project configuration
# instead of running `tsc --noEmit` directly on individual files

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_error() {
    echo -e "${RED}Error: $1${NC}" >&2
}

print_success() {
    echo -e "${GREEN}$1${NC}"
}

print_info() {
    echo -e "${YELLOW}$1${NC}"
}

# Check if tsconfig.app.json exists
if [ ! -f "tsconfig.app.json" ]; then
    print_error "tsconfig.app.json not found in current directory."
    exit 1
fi

# If a file is provided, check if it exists
if [ $# -gt 0 ]; then
    if [ ! -f "$1" ]; then
        print_error "File '$1' not found."
        exit 1
    fi
    print_info "Running TypeScript type check on '$1' with project configuration..."
    
    # Run TypeScript compiler with the project config but filter output for the specific file
    print_info "Checking types for '$1' (may show errors from related files as well)..."
    
    # Run TypeScript with project config and filter the output
    if npx tsc --project tsconfig.app.json --noEmit 2>&1 | grep -E "($1|error TS)" || [ ${PIPESTATUS[0]} -eq 0 ]; then
        # Check if tsc exited successfully
        if [ ${PIPESTATUS[0]} -eq 0 ]; then
            print_success "TypeScript type check on '$1' passed successfully!"
            exit 0
        else
            print_error "TypeScript type check on '$1' failed. Please fix the errors above."
            exit 1
        fi
    else
        print_success "TypeScript type check on '$1' passed successfully!"
        exit 0
    fi
else
    print_info "Running TypeScript type check with project configuration..."
    
    # Run TypeScript compiler with project configuration
    if npx tsc --project tsconfig.app.json --noEmit; then
        print_success "TypeScript type check passed successfully!"
        exit 0
    else
        print_error "TypeScript type check failed. Please fix the errors above."
        exit 1
    fi
fi