import * as vscode from 'vscode';
import { CommandParameters } from '../commands/commandParameters';
import { EditFilesCommand } from '../commands/editFilesCommand';
import { EditFilesParameters } from '../commands/editFilesParameters';
import { InputBoxCommand } from '../commands/inputBoxCommand';
import { LocalizationActionProvider } from '../codeActions/localizationActionProvider';
import { applySaveAndRunFlutterPubGet } from './applySaveAndRunFlutterPubGet';
import { setEditFilesParameters } from './setEditFilesParameters';
import { sortAndSave } from './sortAndSave';
import { appLocalizationsVariableSection, parentSection } from '../shared/constants';
import { getConfiguration } from './getConfiguration';
import { showInputBox } from '../inputBox/showInputBox';
export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      'dart',
      new LocalizationActionProvider(),
      {
        providedCodeActionKinds:
          LocalizationActionProvider.providedCodeActionKinds
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      InputBoxCommand.commandName,
      async (...args: CommandParameters[]): Promise<void> => {
        const editFilesParameters = await setEditFilesParameters(args[0]);
        await vscode.commands.executeCommand(
          EditFilesCommand.commandName,
          editFilesParameters
        );
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      EditFilesCommand.commandName,
      async (...args: EditFilesParameters[]): Promise<void> =>
        applySaveAndRunFlutterPubGet(args[0])
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'flutter-localize.sortArbFiles',
      async (): Promise<void> => sortAndSave()
    ),
    vscode.commands.registerCommand(
      'flutter-localize.configureAppLocalizationVariable',
      async (): Promise<void> => {
        await showInputBox('enter the default variable name', '').then(async (val) => {
          await getConfiguration(parentSection).update(appLocalizationsVariableSection, val, true);
        });
      }
    ),
  );
}

export function deactivate(): void {
  // Do nothing.
}
