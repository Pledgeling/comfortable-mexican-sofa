const { context, build } = require('esbuild')

const config = {
  entryPoints: [ 'app/assets/javascripts/comfy/admin/cms/application.js' ],
  bundle: true,
  sourcemap: true,
  outdir: 'app/assets/builds/comfy/admin/cms/',
  logLevel: 'info',
  // Doesn't necessarily reflect the browser versions we actively support
  // Transpile to an older syntax to avoid excess error reports in HB
  target: [ 'safari13' ],
  nodePaths: [ 'app/assets/javascripts/' ],
}

if (process.argv.includes('--watch'))
  context(config).then(ctx => ctx.watch())
else
  build({ ...config, minify: true })
