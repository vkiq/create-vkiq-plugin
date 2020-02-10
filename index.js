#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const cac = require('cac')
const envinfo = require('envinfo')
const { version } = require('./package.json')

const generator = path.resolve(__dirname, './')

const cli = cac('create-vkiq-plugin')

const showEnvInfo = async () => {
  console.log(chalk.bold('\nEnvironment Info:'))
  const result = await envinfo
    .run({
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
      npmGlobalPackages: ['nuxt', 'create-vkiq-plugin']
    })
  console.log(result)
  process.exit(1)
}

cli
  .command('[out-dir]', 'Generate in a custom directory or current directory')
  .option('-i, --info', 'Print out debugging information relating to the local environment')
  .option('--answers <json>', 'Skip all the prompts and use the provided answers')
  .option('--verbose', 'Show debug logs')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo()
    }
    console.log()

    const { verbose, answers } = cliOptions
    const logLevel = verbose ? 4 : 2
    // See https://saojs.org/api.html#standalone-cli
    sao({ generator, outDir, logLevel, answers, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.version(version)

cli.parse()
