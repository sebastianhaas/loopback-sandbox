# loopback-sandbox for https://github.com/strongloop/loopback-component-explorer/issues/165

Changes in this branch:

1. clone
2. npm install
3. Add configuration to `server/component-config.json`:
```json
{
  "loopback-component-explorer": {
    "mountPath": "/explorer",
    "host": "localhost:3000",
    "protocol": ["http", "https"]
  }
}
```
4. start server with `node .`
5. navigate to `http://localhost:3000/explorer/swagger.json`
6. see invalid swagger.json as described in https://github.com/strongloop/loopback-component-explorer/issues/165
7. Optional: Validate scheme at http://bigstickcarpet.com/swagger-parser/www/index.html -> error where string is expected but array found
