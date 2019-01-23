# Directus Extension Scripts

## Installation
Node version: >= 8.x.x

`npm install --save-dev directus-ext`

---- 

## Configuration
Library will read some config from **package.json**. Please make sure you already setup those fields.

- #### name

  package.name will be folder name.

- #### outDir

  For example: you're creating custom page, outputDir maybe `public/extensions/custom/pages`

- #### meta

  Library will use `meta` object to generate `meta.json`

---- 
## Usage
#### Global command line

`Watch: directus-ext watch`

`Build production: directus-ext build`

#### Inside Extension

`npm install --save-dev directus-ext`

In `package.json`
```
{
  "scripts: {
    "dev": "directus-ext",
    "build": "directus-ext build"
  }
}
```

## Full Configuration

```
{
  "name": "report-page",
  "version": "1.0.0",
  "description": "",
  "outDir": "PROJECT/public/extensions/custom/pages",
  "meta": {
    "name": "Reporting",
    "version": "0.0.1"
  },
  "scripts": {
    "dev": "directus-ext",
    "build": "directus-ext build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```