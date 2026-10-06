#!/bin/sh
# Compiles the JSX in poster.jsx into plain JavaScript (poster.js), which index.html loads.
# Run this after every change to poster.jsx, then commit both files. Needs Node.js (npx).
set -e
cd "$(dirname "$0")"
npx --yes esbuild@0.24.2 poster.jsx --jsx=transform --target=es2017 --format=iife --minify --outfile=poster.js
