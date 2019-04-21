/* global PYODIDE_VERSION */

// This defines the "built-in" language definitions

export const jsLanguageDefinition = {
  pluginType: "language",
  languageId: "js",
  displayName: "Javascript",
  module: "window",
  evaluator: "eval",
  url: ""
};

const pyLanguageDefinition = {
  languageId: "py",
  displayName: "Python",
  url: `/pyodide-${PYODIDE_VERSION}/pyodide.js`,
  module: "pyodide",
  evaluator: "runPython",
  asyncEvaluator: "runPythonAsync",
  pluginType: "language"
};

export const languageDefinitions = {
  py: pyLanguageDefinition,
  js: jsLanguageDefinition
};
