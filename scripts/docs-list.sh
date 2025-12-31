#!/usr/bin/env bash
set -euo pipefail

if [[ ! -d "docs" ]]; then
  echo "docs/ directory not found" >&2
  exit 1
fi

ls -1 docs
