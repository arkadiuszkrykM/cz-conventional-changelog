"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');

module.exports = engine({
  types: {
      "feature": {
          "description": "A new feature",
          "title": "Features"
      },
      "fix": {
          "description": "A bug fix",
          "title": "Bug Fixes"
      },
      "style": {
          "description": "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
          "title": "Styles"
      },
      "refactor": {
          "description": "A code change that neither fixes a bug nor adds a feature",
          "title": "Code Refactoring"
      },
      "perf": {
          "description": "A code change that improves performance",
          "title": "Performance Improvements"
      },
      "test": {
          "description": "Adding missing tests or correcting existing tests",
          "title": "Tests"
      },
      "build": {
          "description": "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
          "title": "Builds"
      }
  }
});
