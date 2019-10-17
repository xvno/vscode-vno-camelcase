const vscode = require('vscode');
const editor = vscode.window.activeTextEditor;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // CMD: camelCase
    let ccase = vscode.commands.registerCommand('extension.ccase', function() {
        editor.selections.forEach(function(selection, idx) {
            setTimeout(() => {
                camelCaseSelected(selection);
            }, 5 * idx);
        });
    });
    context.subscriptions.push(ccase);

    // CMD: snakeCase
    let scase = vscode.commands.registerCommand('extension.scase', function() {
        editor.selections.forEach(function(selection, idx) {
            setTimeout(() => {
                snakeCaseSelected(selection);
            }, 5 * idx);
        });
    });
    context.subscriptions.push(scase);
}

function deactivate() {}

/**
 *
 * @param {text} text
 * @param {function} cb
 */
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
function snakeCaseText(text) {
    return text.replace(/([A-Z])/g, (all, first) => `_${first.toLowerCase()}`);
}
/*
function camelCaseSelected(selection) {
    let selected = editor.document.getText(selection).trim();

    if (checkText(selected, vscode.window.showInformationMessage)) {
        editor.edit(editBuilder => {
            console.log('editing: ' + selected + ' ' + selection);
            editBuilder.replace(selection, camelCaseText(selected));
        });
    }
}

function snakeCaseSelected(selection) {
    let selected = editor.document.getText(selection).trim();
    function snakeCaseText(text) {
        let ccasedText = camelCaseText(text)
        return ccasedText.replace(/([A-Z])/g, (all, first) =>
            `_${first.toLowerCase()}`
        );
    }
    if (checkText(selected, vscode.window.showInformationMessage)) {
        editor.edit(editBuilder => {
            console.log('editing: ' + selected + ' ' + selection);
            editBuilder.replace(selection, snakeCaseText(selected));
        });
    }
}*/
// {ccase: camelCase, scase: snake_case}

function camelCaseSelected(selection) {
    xCaseSelected(selection);
}
function snakeCaseSelected(selection) {
    xCaseSelected(selection, 'scase');
}

function xCaseSelected(selection, mode = 'ccase') {
    let selected = editor.document.getText(selection).trim();
    let processedText = null;
    if (checkText(selected, vscode.window.showInformationMessage)) {
        editor.edit(editBuilder => {
            processedText = camelCaseText(selected);
            if (mode === 'scase') {
                processedText = snakeCaseText(processedText);
            }
            editBuilder.replace(selection, processedText);
        });
    }
}
module.exports = {
    activate,
    deactivate
};
