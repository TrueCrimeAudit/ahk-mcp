import { z } from 'zod';
import logger from '../logger.js';
export const AhkPromptsArgsSchema = z.object({});
export const ahkPromptsToolDefinition = {
    name: 'ahk_prompts',
    description: 'Returns a set of built-in AHK v2 prompt templates for code generation and learning.',
    inputSchema: AhkPromptsArgsSchema
};
export const PROMPTS = [
    {
        title: "File System Watcher",
        body: "Implement an AutoHotkey v2 class that monitors a directory for file changes and triggers callbacks when files are created, modified, or deleted."
    },
    {
        title: "CPU Usage Monitor",
        body: "Create an AutoHotkey v2 script that displays current CPU usage as a tooltip that updates every second."
    },
    {
        title: "Clipboard Editor",
        body: "Create a clipboard text editor that:\n- Opens the GUI when the script starts\n- Shows the clipboard contents when the GUI opens in an edit box without the text selected\n- Create three buttons to change the case of the text\n- Save the newly edited version to the users clipboard"
    },
    {
        title: "Clipboard Manager",
        body: "Create a clipboard text editor that:\n- Opens the GUI when the script starts\n- Shows the clipboard contents when the GUI opens in an edit box without the text selected\n- Create three buttons to change the case of the text \n- Save the newly edited version to the users clipboard"
    },
    {
        title: "Hotkey Toggle Function",
        body: "Write a function in AutoHotkey v2 that can toggle any hotkey on and off and display a brief tooltip when the state changes."
    },
    {
        title: "Link Manager",
        body: "Create an AutoHotkey v2 script called **Link Manager** that:\n- Stores a multiline string `g_Links` containing several URLs\n- Parses that string on startup into an array with fields `url`, `valid`, and `displayName`\n- Builds a GUI with a  ListView (or ListBox) showing each link and a status bar for details\n- Opens the selected link in Microsoft Edge on double-click or Enter, adding https:// if missing (fallback to default browser if Edge fails)\n- Validates URLs with the regex `i)^(https?:\\/\\/)?([\\w.-]+)\\.([a-z.]{2,6})(\\/[\\w.-]*)*\\/?$`\n- Handles errors such as empty list or invalid URL and shows tooltips or status messages\n- Uses clean AHK v2 syntax, modular functions, and proper event binding"
    },
    {
        title: "Snippet Manager",
        body: "Create an AutoHotkey v2 script for a Snippet Manager tool with the following features:\n- Store a collection of predefined text snippets (like greetings, closings, reminders)\n- Display them in a listbox GUI\n- Allow copying the selected snippet to clipboard\n- Option to send the snippet directly to the previous active window\n- Show temporary tooltips for user feedback\n\nAdditional Requirements:\n- Store snippets in a static Map\n- Track the previously active window\n- Have a clean, resizable GUI\n- Display tooltips that automatically disappear\n\nInclude these specific snippets: \"Greeting\", \"Closing\", \"Reminder\", and \"Follow-up\" with appropriate text content for each.\nMake sure to follow AutoHotkey v2 best practices with proper event binding, control management, and variable scoping."
    }
];
export class AhkPromptsTool {
    async execute() {
        logger.info('Returning built-in AHK v2 prompt templates');
        return {
            content: [
                {
                    type: 'text',
                    text: '## Built-in AHK v2 Prompts\n' +
                        PROMPTS.map((p, i) => `### ${i + 1}. ${p.title || 'Prompt'}\n${p.body}\n`).join('\n')
                },
                {
                    type: 'json',
                    data: PROMPTS
                }
            ]
        };
    }
}
