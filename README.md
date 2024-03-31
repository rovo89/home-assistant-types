The `frontend` subfolder was created from the Home Assistant
[frontend](https://github.com/home-assistant/frontend) repository with the following configuration:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "incremental": false,
    "noEmit": false,
    "strict": false,
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationDir": "./types"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```
