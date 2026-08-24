#!/usr/bin/env node

/**
 * Synapse-Mesh (Exocortex) - Official Stdio to Streamable HTTP MCP Gateway
 * Bridges local Model Context Protocol stdio streams to https://synapsemesh.dev/mcp
 */

import readline from 'node:readline';

const SYNAPSE_ENDPOINT = process.env.SYNAPSE_ENDPOINT || 'https://synapsemesh.dev/mcp';

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

    const response = await fetch(SYNAPSE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'synapse-mesh-mcp-client/1.0.0'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      process.stdout.write(JSON.stringify({
        jsonrpc: '2.0',
        id: payload.id || null,
        error: {
          code: -32000,
          message: `Synapse-Mesh HTTP error: ${response.status} ${response.statusText}`
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
        message: `Failed to communicate with Synapse-Mesh: ${err.message}`
      }
    }) + '\n');
  }
});
