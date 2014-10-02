
var handler = function (compileStep) {
  var fileContents = compileStep.read().toString('utf8');
  var oldFilename = compileStep.inputPath;


  order = fileContents.match(/!js|!html|!css/g)
  contents = fileContents.split(/!js|!html|!css/g).slice(1)

  if (order.length != contents.length) {
    compileStep.error({
      message: "View compiler error: missing language callouts",
      sourcePath: oldFilename,
    });
  }

  files = {'!js':'', '!html':'', '!css':''}

  for (var i = 0; i < order.length; i++) {
    fileType = order[i]
    fileContent = contents[i]
    files[fileType] += fileContent
  }

  try {

    compileStep.addJavaScript({
      path: oldFilename.replace(/.view$/, ".js"),
      sourcePath: compileStep.inputPath,
      data: files['!js'],
    });

    compileStep.addStylesheet({
      path: oldFilename.replace(/.view$/, ".css"),
      sourcePath: compileStep.inputPath,
      data: files['!css'],
    });

    console.log(Object.keys(compileStep));
    compileStep.addHtml({
      section: 'body',
      path: oldFilename.replace(/.view$/, ".html"),
      sourcePath: compileStep.inputPath,
      data: files['!html'],
    })

  } catch (e) {
    compileStep.error({
      message: "View compiler error: " + e.message,
      sourcePath: oldFilename,
      line: e.line,
      column: e.column
    });
  }
}

Plugin.registerSourceHandler("view", {archMatching: 'web'},handler);
