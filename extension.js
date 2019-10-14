const vscode = require('vscode');
const editor = vscode.window.activeTextEditor;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.ccase',
    function() {
      camelCaseSelected();
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

function camelCaseSelected() {
  let selected = editor.document.getText(editor.selection).trim();
  if (checkText(selected, vscode.window.showInformationMessage)) {
    editor.edit(editBuilder => {
      editBuilder.replace(editor.selection, camelCaseText(selected));
    });
  }
}
function checkText(text, cb) {
  cb = cb && console.log;
  if (!(text && text.length > 0)) {
    cb('Error selection!');
    return false;
  }
  return true;
}

function camelCaseText(text) {
  return text.replace(/([-_]+(\w))/g, (all, first, second) =>
    second.toUpperCase()
  );
}

module.exports = {
  activate,
  deactivate,
};
