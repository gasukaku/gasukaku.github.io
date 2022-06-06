const { build } = require("esbuild")
const sveltePlugin = require("esbuild-svelte")

build({
    entryPoints: [ "src/main.js" ],
    outdir: "public/dist",
    bundle: true,
    minify: true,
    target: "es2016",
    platform: "browser",
    mainFields: [ "svelte", "browser", "module", "main" ],
    plugins: [ sveltePlugin() ],
    logLevel: "info",
    watch: true
})