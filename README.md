<div align="center">
  <h1>AutoHotkey v2 MCP Server</h1>
  <p>
    <strong>Model Context Protocol</strong>
  </p>
  <p>
    <a href="#features"><img src="https://img.shields.io/badge/Features-blue?style=for-the-badge" alt="Features"></a>
    <a href="#installation"><img src="https://img.shields.io/badge/Install-green?style=for-the-badge" alt="Installation"></a>
    <a href="#usage"><img src="https://img.shields.io/badge/Usage-purple?style=for-the-badge" alt="Usage"></a>
    <a href="#development"><img src="https://img.shields.io/badge/Develop-orange?style=for-the-badge" alt="Development"></a>
  </p>
</div>

---

## Overview

**AutoHotkey v2 MCP Server** is designed to improve LLMs ability to produce AutoHotkey v2 code. The main features are quality of life features such as prompts to recenter the LLM on AHK v2 coding rules as well as providing meta-prompts that create a strong structure for the LLM to follow. The more advanced features such a context management are experimental and need a lot of work. However, it does currently pass in context for the thinking process based on what the user is asking for. 

## Table of Contents

- [Overview](#overview)
- [Example](#example)
- [Features](#features)
  - [LSP-like Capabilities](#lsp-like-capabilities)
  - [AutoHotkey v2 Specific Features](#autohotkey-v2-specific-features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Claude Desktop Configuration](#claude-desktop-configuration)
- [MCP Tools](#mcp-tools)
  - [Core Analysis Tools](#core-analysis-tools)
- [Built-in AutoHotkey Prompts](#built-in-autohotkey-prompts)
- [Documentation Data](#documentation-data)
- [License](#license)
- [🎯 MCP Resources](#mcp-resources)

## Example

An overly simplistic example: 

1. User asks for a clipboard manager tool:
2. LLM creates a plan which includes steps like this: 

```
The user wants me to create a clipboard manager script in AutoHotkey v2. Let me break down the requirements:
Core Functionality:
Monitor clipboard changes
Display collected entries in a GUI
Toggle collection with F6 hotkey
Save content back to clipboard when closing
```
3. The MCP grabs these words from keywords: Clipboard, GUI, Toggle, and Hotkey
4. The MCP sends back more detailed context. For clipboard this would be something like: 

```
The users clipboard can be accessed by the A_Clipboard built-in variable. If the users request involves determining whether or not a clipboard value has changed, use the OnClipboardChanged function object. Clipboard all is used if the user needs to save the clipboard temporarily. When the operation is completed, the script restores the original clipboard contents. 
```
5. The LLM then returns code with much better accuracy. 


## Features

### LSP-like Capabilities
- **Code Completion**: Intelligent suggestions for functions, variables, classes, methods, and keywords
- **Diagnostics**: Syntax error detection and AutoHotkey v2 coding standards validation
- **Script Analysis**: Comprehensive code analysis with contextual documentation
- **Go-to-Definition**: Navigate to symbol definitions *(planned)*
- **Find References**: Locate symbol usage throughout code *(planned)*

### AutoHotkey v2 Specific Features
- **Built-in Documentation**: Comprehensive AutoHotkey v2 function and class reference
- **Coding Standards**: Enforces Claude-defined AutoHotkey v2 best practices
- **Hotkey Support**: Smart completion for hotkey definitions
- **Class Analysis**: Object-oriented programming support with method and property completion
- **Contextual Help**: Real-time documentation and examples for built-in elements



## Installation

### Prerequisites

Before installing the AutoHotkey v2 MCP Server, ensure you have:

- **Node.js** 18.0.0 or later
- **npm** or **yarn** package manager

### Setup

1. **Clone and install dependencies:**
   ```bash
   git clone https://github.com/TrueCrimeAudit/ahk-mcp.git
   cd ahk-mcp
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

   **For development with auto-reload:**
   ```bash
   npm run dev
   ```

### Claude Desktop Configuration

Add the server to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "ahk-mcp": {
      "command": "node",
      "args": ["path/to/ahk-mcp/dist/index.js"],
      "env": {}
    }
  }
}
```

## MCP Tools

### Core Analysis Tools

#### `ahk_complete`
Provides intelligent code completion suggestions based on code position and context.

```typescript
{
  code: string,           // AutoHotkey v2 code
  position: {             // Code position
    line: number,         // Zero-based line number
    character: number     // Zero-based character position
  },
  context?: string        // Optional: 'function' | 'variable' | 'class' | 'auto'
}
```

#### `ahk_diagnostics`
Validates code syntax and enforces coding standards with detailed error reporting.

```typescript
{
  code: string,                    // AutoHotkey v2 code to analyze
  enableClaudeStandards?: boolean, // Apply coding standards (default: true)
  severity?: string               // Filter: 'error' | 'warning' | 'info' | 'all'
}
```

#### `ahk_analyze`
Comprehensive script analysis with contextual documentation and usage insights.

```typescript
{
  code: string,                      // AutoHotkey v2 code to analyze
  includeDocumentation?: boolean,    // Include documentation for built-in elements (default: true)
  includeUsageExamples?: boolean,    // Include usage examples (default: false)
  analyzeComplexity?: boolean        // Analyze code complexity (default: false)
}
```

## Built-in AutoHotkey Prompts

The server includes 7 ready-to-use AutoHotkey v2 prompts accessible through Claude:

1. **File System Watcher** - Monitor directory changes with callbacks
2. **CPU Usage Monitor** - Display real-time CPU usage in tooltips
3. **Clipboard Editor** - GUI-based clipboard text manipulation
4. **Hotkey Toggle Function** - Dynamic hotkey management with feedback
5. **Link Manager** - URL validation and browser integration
6. **Snippet Manager** - Text snippet storage and insertion system

Access these prompts through Claude's interface by typing `/` and selecting from the available AutoHotkey prompts.

## Documentation Data

The server includes comprehensive AutoHotkey v2 documentation:

- **Functions**: 200+ built-in functions with parameters and examples
- **Classes**: GUI, File, Array, Map, and other core classes
- **Variables**: Built-in variables like A_WorkingDir, A_ScriptName
- **Methods**: Class methods with detailed parameter information
- **Directives**: #Include, #Requires, and other preprocessor directives

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 MCP Resources

The server exposes comprehensive AutoHotkey documentation and templates through MCP Resources:

### **Documentation Resources**
- **`ahk://context/auto`** - Smart contextual AutoHotkey documentation
- **`ahk://docs/functions`** - Complete AutoHotkey v2 functions reference
- **`ahk://docs/variables`** - Complete AutoHotkey v2 variables reference  
- **`ahk://docs/classes`** - Complete AutoHotkey v2 classes reference
- **`ahk://docs/methods`** - Complete AutoHotkey v2 methods reference

### **Script Templates**
Ready-to-use AutoHotkey v2 script templates:
- **`ahk://templates/file-system-watcher`** - Monitor directories for file changes
- **`ahk://templates/clipboard-manager`** - GUI clipboard editor with text transformations
- **`ahk://templates/cpu-monitor`** - System CPU usage monitor with tooltips
- **`ahk://templates/hotkey-toggle`** - Dynamic hotkey management system

### **Live System Data**
- **`ahk://system/clipboard`** - Real-time clipboard information
- **`ahk://system/info`** - System and environment information

*Resources are automatically available in compatible MCP clients like Claude Desktop. Users can select resources to include as context for their AutoHotkey development.*

---

<div align="center">
  <p>
    <strong>Built with ❤️ for the community</strong>
  </p>
  <p>
    <a href="https://www.autohotkey.com/docs/v2/">Official AHK Documents</a>
  </p>
</div> 