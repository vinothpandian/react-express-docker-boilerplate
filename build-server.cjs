const esbuild = require('esbuild')
const options = {
  entryPoints: ['src/server/app.jsx'],
  outfile: 'dist/server/app.cjs',
  bundle: true,
  platform: 'node',
  target: 'node22',
  packages: 'external'
}
async function main () {
  if (process.argv.includes('--watch')) {
    const context = await esbuild.context(options)
    await context.watch()
  } else {
    await esbuild.build(options)
  }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
