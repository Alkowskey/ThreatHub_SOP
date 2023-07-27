# Installation

Install the required dependencies by running the following command:

    npm install

# Input Data

Run the project with default input files:

    npm run start-default

This script will process the asset-vulnerability pairs using the default input files (input_vulnerabilities.json, input_assets.json, and input_platforms.json) located in the input_files folder.

# Custom json files

    npm run start <path-to-vulnerabilities-file> <path-to-assets-file> <path-to-platforms-file>

# Tests

To run tests, execute the following command:

    npm test

# Linting and Formatting

To lint and format the TypeScript code, use the following commands:

    npm run lint
    npm run format:all
