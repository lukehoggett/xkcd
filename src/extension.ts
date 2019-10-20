import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("xkcd.start", () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        "xkcd",
        "XKCD",
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>XKCD</title>
		<style>
			iframe {
				width: 100%;
				height: 400px;

			}
		</style>
</head>
<body>
	<iframe src="https://xkcd.com" />
</body>
</html>`;
}
