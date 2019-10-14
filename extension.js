// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const editor = vscode.window.activeTextEditor;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "camelcaseVNO" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.ccase', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		const text = editor.document.getText(editor.selection);
		// editor.replace(editor.selection, camelCase(text));
		if(!(text && text.length > 0)) {
			vscode.window.showInformationMessage('Error selection!');
		}
		editor.edit(editBuilder => {
			editBuilder.replace(editor.selection, camelCase(text));
		})

	});

	context.subscriptions.push(disposable);
}
function camelCase (sel) {
	return sel.replace(/([-_](\w))/g, (all, first, second) => {
		return second.toUpperCase();
	})
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
