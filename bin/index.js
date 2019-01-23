#!/usr/bin/env node
process.env['NODE_ENV'] =
  process.argv[2] === 'build' ? 'production' : 'development';
const Bundler = require('parcel-bundler');
const util = require('util');
const path = require('path');
const fs = require('fs');

const writeFileAsync = util.promisify(fs.writeFile);
const projectDir = process.cwd();
const pkg = require(path.resolve(projectDir, 'package.json'));
const packageName = pkg.name;
const entryFiles = path.join(process.cwd(), '**/*.vue');
const outDir = path.resolve(pkg.outDir, packageName);
const isProd = process.env['NODE_ENV'] === 'production';
const metaPath = path.resolve(outDir, 'meta.json');

const options = {
  outDir: outDir,
  watch: !isProd,
  minify: isProd,
  global: '__DirectusExtension__',
  logLevel: 3,
  sourceMaps: false,
  cache: false
};

(async function() {
  try {
    const bundler = new Bundler(entryFiles, options);
    bundler.on('bundled', function() {
      writeMeta();
    });

    bundler.bundle();
  } catch (ex) {
    throw ex;
  }
})();

function writeMeta() {
  return writeFileAsync(
    metaPath,
    JSON.stringify(pkg.meta, null, isProd ? null : 2),
    {
      encoding: 'utf-8'
    }
  );
}
