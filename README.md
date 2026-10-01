# linux-zed-ts-debug
How to debug typescript with zed editor

1. Download DAP (Debug Adapter Protocol) and save it in `zed` directory

```bash
mkdir -p ~/.local/share/zed/debug_adapters/JavaScript/
cd ~/.local/share/zed/debug_adapters/JavaScript/

# Download DAP for github https://github.com/microsoft/vscode-js-debug/releases
curl -OL https://github.com/microsoft/vscode-js-debug/releases/download/v1.140.0/js-debug-dap-v1.140.0.tar.gz
tar -xvzf ./js-debug-dap-v1.140.0.tar.gz
mkdir -p JavaScript_v1.140.0
mv js-debug ./JavaScript_v1.140.0

# validate that file exist
ls ~/.local/share/zed/debug_adapters/JavaScript/JavaScript_v1.140.0/js-debug/src/dapDebugServer.js
```

2. Create zed debug configuration inside your project

```bash
cd ~/projects/my-app # go to your app
mkdir -p .zed
touch .zed/debug.json
```

3. Copy debug configuration to `.zed/debug.json`

```json
[
    {
        "label": "Debug current file",
        "adapter": "JavaScript",
        "type": "pwa-node",
        "request": "launch",
        "program": "$ZED_FILE",
        "runtimeExecutable": "npx",
        "runtimeArgs": ["tsx"],
        "cwd": "$ZED_WORKTREE_ROOT"
      }
]
```

4. Open some TS file, press F4 and select this debug configuration

![Select Debug Configuration](screenshots/select_debug_option.png?raw=true "Select Debug Configuration")

5. Inspect your local breakpoint

![Breakpoint example](screenshots/breakpoint_example.png?raw=true "Breakpoint example")
