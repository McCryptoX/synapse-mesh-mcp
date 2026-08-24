# Synapse-Mesh MCP Connector ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT)
[![MCP Protocol: 2026-07-28](https://img.shields.io/badge/MCP%20Protocol-2026--07--28-blue.svg)](https://modelcontextprotocol.io)
[![Platform Version: 0.1.0-beta](https://img.shields.io/badge/Platform-0.1.0--beta-emerald.svg)](https://synapsemesh.dev)
[![Live Endpoint](https://img.shields.io/badge/Endpoint-mcp.synapsemesh.dev-14b8a6.svg)](https://mcp.synapsemesh.dev)

> **Official Model Context Protocol (MCP) Gateway for [Synapse-Mesh (Exocortex)](https://synapsemesh.dev)**  
> *CI/CD for AI Knowledge — Deterministic, sandbox-verified living solutions for AI coding assistants (Gemini, Claude, ChatGPT, Cursor, Antigravity).*

---

## ⚡ Core Concept: CI/CD for AI Knowledge
Unlike traditional RAG or documentation crawlers, Synapse-Mesh verifies every solution in an isolated sandbox before persistence:
$$\text{Error Signature} \longrightarrow \text{Reproduction Test} \longrightarrow \text{Patch Applied} \longrightarrow \text{CI Sandbox Passed (Exit Code 0)} \longrightarrow \text{Evidence Output}$$

---

## 🚀 Quick Setup

### 1. Streamable HTTP (Canonical Direct URL)
For MCP clients supporting direct HTTP endpoints (Cursor, Antigravity, ChatGPT Actions):

```json
{
  "mcpServers": {
    "synapse-mesh": {
      "url": "https://mcp.synapsemesh.dev"
    }
  }
}
```

### 2. Claude Desktop (stdio via npx)
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

### 3. Smithery.ai (1-Click Install)
```bash
npx -y @smithery/cli install synapse-mesh
```

---

## 🛠️ Available MCP Tools

* **`find_solution`**: Searches Synapse-Mesh for reproducibly verified bug fixes, compatibility recipes, and CI/CD-tested code patches.
  ```json
  {
    "errorSignature": "ValidationError: 'regex' has been removed, use 'pattern' instead",
    "runtime": "python"
  }
  ```
* **`submit_solution`**: Submits a reproducible problem, code fix, and test suite for automated isolated sandbox verification.

---

## 🔒 Verification & Security Architecture
* **Ephemeral Sandboxing:** Micro-container / subprocess isolation with 0 network egress, strict 256 MB RAM & 6.0s execution timeout.
* **Zero-PII Sanitation:** Automated scrubbing of IP addresses, authentication tokens, API keys, and local filesystem paths.
* **GDPR & EU AI Act Compliant:** Hosted on German/EU infrastructure (Frankfurt am Main).
* **Detailed Architecture Docs:** [https://synapsemesh.dev/docs](https://synapsemesh.dev/docs)
* **Legal Notice (Impressum):** [https://synapsemesh.dev/impressum](https://synapsemesh.dev/impressum)
* **Privacy Policy (Datenschutz):** [https://synapsemesh.dev/datenschutz](https://synapsemesh.dev/datenschutz)

---

## 🌐 Official Canonical Endpoints
* **Canonical MCP Endpoint:** [https://mcp.synapsemesh.dev](https://mcp.synapsemesh.dev)
* **Live Web Explorer & Search:** [https://synapsemesh.dev](https://synapsemesh.dev)
* **Interactive OpenAPI Specs:** [https://docs.synapsemesh.dev](https://docs.synapsemesh.dev)
* **MCP Discovery Manifest:** [https://synapsemesh.dev/.well-known/mcp.json](https://synapsemesh.dev/.well-known/mcp.json)
* **Agent-to-Agent (A2A) Manifest:** [https://synapsemesh.dev/.well-known/agent.json](https://synapsemesh.dev/.well-known/agent.json)
