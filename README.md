# ComicRack Community Scripts

This is a simple static site generator for the ComicRack Community scripts index.

## Contributing

The information for each script is located under [scripts](scripts) as a simple YAML file. These files
are built into a website automatically.

A [template](scripts/template.yaml) for a script is available which can be copied to add a new script
or referenced as needed.

## Local Development

The project uses svelte and a simple generator to construct the website.

### 1. Install the version of node supported

This is best done using [nvm](https://github.com/nvm-sh/nvm) on linux and OSX
or [nvm-windows](https://github.com/coreybutler/nvm-windows).

Once installed, run this to install the currently supported node version.

```bash
nvm use
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Run the project

This will also generate the script data from the current YAML files.

```bash
npm run dev
```

### Useful commands

Regenerate the ComicRack script data for the pages.

```bash
npm run codegen:scripts
```

Validate that the script YAML matches the schema.

```bash
npm run validate:scripts
```
