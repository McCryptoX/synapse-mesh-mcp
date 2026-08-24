#!/usr/bin/env node

/**
 * Synapse-Mesh (Exocortex) - Official Stdio to Streamable HTTP MCP Gateway
 * Conforms to Model Context Protocol Specification 2026-07-28
 * Canonical Endpoint: https://mcp.synapsemesh.dev
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import readline from 'node:readline';

const CANONICAL_ENDPOINT = process.env.SYNAPSE_ENDPOINT || 'https://mcp.synapsemesh.dev';
const PROTOCOL_VERSION = '2026-07-28';

// Initialize Stdio Gateway proxy
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  try {
    const payload = JSON.parse(trimmed);
    const method = payload.method || '';
    const toolName = payload.params?.name || '';

    // Forward Streamable HTTP Request compliant with Spec 2026-07-28
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'synapse-mesh-mcp-gateway/1.0.0',
      'Mcp-Protocol-Version': PROTOCOL_VERSION
    };

    if (method) headers['Mcp-Method'] = method;
    if (toolName) headers['Mcp-Name'] = toolName;

    const response = await fetch(CANONICAL_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      process.stdout.write(JSON.stringify({
        jsonrpc: '2.0',
        id: payload.id || null,
        error: {
          code: -32000,
          message: `Synapse-Mesh Gateway Error: HTTP ${response.status} ${response.statusText}`
        }
      }) + '\n');
      return;
    }

    const data = await response.json();
    process.stdout.write(JSON.stringify(data) + '\n');
  } catch (err) {
    process.stdout.write(JSON.stringify({
      jsonrpc: '2.0',
      id: null,
      error: {
        code: -32700,
        message: `Synapse-Mesh Gateway Exception: ${err.message}`
      }
    }) + '\n');
  }
});
