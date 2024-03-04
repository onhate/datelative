#!/bin/bash

npm run build

## So entire idea of this script is to generate separate package.json for ESM build (under build/esm directory) with the following content:
# { "type": "module" }
# This will tell the consumer build system that the underlying directory has modern EcmaScript modules. Otherwise, it will complain with:
# SyntaxError: Unexpected token 'export'

echo '{ "type": "module" }' > dist/esm/package.json

# remove "type" field from the main package.json so the cjs imports don't break
cat <<< $(jq 'del(.type)' package.json) > package.json