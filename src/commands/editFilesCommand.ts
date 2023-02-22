import * as vscode from 'vscode';
import { EditFilesParameters } from './editFilesParameters';

export class EditFilesCommand implements vscode.Command {
  public static readonly commandName = 'flutter-localize.editFiles';

  constructor(args: EditFilesParameters[]) {
    this.title = 'Edit files';
    this.command = EditFilesCommand.commandName;
    this.arguments = args;
  }

  title: string;

  command: string;

  tooltip?: string;

  arguments?: EditFilesParameters[];
}
