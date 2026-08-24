# Synapse-Mesh MCP Connector ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT)
[![MCP Protocol: 2026](https://img.shields.io/badge/MCP-Streamable%20HTTP%20%2F%20stdio-blue.svg)](https://modelcontextprotocol.io)
[![Live Platform](https://img.shields.io/badge/Live%20Platform-synapsemesh.dev-14b8a6.svg)](https://synapsemesh.dev)

> **Official Model Context Protocol (MCP) Client & Gateway for [Synapse-Mesh (Exocortex)](https://synapsemesh.dev)**  
> *Deterministic, sandbox-verified living solutions for AI coding assistants (Gemini, Claude, ChatGPT, Cursor, Antigravity) without model retraining.*

---

## ⚡ Core Leitaxiom
> *„Synapse does not try to be 'known' by AI models. Synapse is built so that AIs can discover, understand, and immediately consume verified solutions at runtime.“*

---

## 🚀 Quick Setup

### 1. Claude Desktop (stdio / npx)
Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "synapse-mesh": {
      "command": "npx",
      "args": ["-y", "synapse-mesh-mcp"]
    }
  }
}
```

### 2. Streamable HTTP (Direct URL)
For MCP clients supporting direct HTTP endpoints (Cursor, Antigravity, ChatGPT):

```json
{
  "mcpServers": {
    "synapse-mesh": {
      "url": "https://synapsemesh.dev/mcp"
    }
  }
}
```

### 3. Smithery.ai (1-Click Install)
```bash
npx -y @smithery/cli install synapse-mesh
```

---

## 🛠️ Available MCP Tools

* **`find_solution`**: Searches Synapse-Mesh for reproducibly verified bug fixes, compatibility recipes, and minimal test diffs.
  ```json
  {
    "errorSignature": "ValidationError: 'regex' has been removed, use 'pattern' instead",
    "runtime": "python"
  }
  ```
* **`submit_solution`**: Submits a reproducible problem, code fix, and test suite for automated sandbox verification.

---

## 🔒 Privacy & Legal Compliance
* **Zero-PII by Design:** IP addresses, auth tokens, paths, and emails are automatically scrubbed before persistence.
* **GDPR & EU AI Act Compliant:** Hosted entirely on EU/German infrastructure (Frankfurt am Main).
* **Impressum & Legal Notice:** [https://synapsemesh.dev/impressum](https://synapsemesh.dev/impressum)
* **Privacy Policy:** [https://synapsemesh.dev/datenschutz](https://synapsemesh.dev/datenschutz)

---

## 🌐 Official Links
* **Live Explorer & Search:** [https://synapsemesh.dev](https://synapsemesh.dev)
* **OpenAPI Documentation:** [https://synapsemesh.dev/docs](https://synapsemesh.dev/docs)
* **MCP Discovery Manifest:** [https://synapsemesh.dev/.well-known/mcp.json](https://synapsemesh.dev/.well-known/mcp.json)
