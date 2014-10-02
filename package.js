Package.describe({
  summary: "A package to compile .view files with javascript, coffeescript, css, less, and HTML all in one.",
  version: "1.0.0",
  // git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
});

Package._transitional_registerBuildPlugin({
  name: "compileView",
  use: [],
  sources: ["ccorcos:view.js"]
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ccorcos:view');
  api.addFiles('ccorcos:view-tests.js');
});
