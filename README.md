covid19cli
==========

Get information about Covid-19 without leaving your terminal.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/covid19cli.svg)](https://npmjs.org/package/covid19cli)
[![Downloads/week](https://img.shields.io/npm/dw/covid19cli.svg)](https://npmjs.org/package/covid19cli)
[![License](https://img.shields.io/npm/l/covid19cli.svg)](https://github.com/aurghya-0/covid19cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @aurghyadip/covid19cli
$ ncov19 COMMAND
running command...
$ ncov19 (-v|--version|version)
@aurghyadip/covid19cli/0.1.0 darwin-x64 node-v12.16.3
$ ncov19 --help [COMMAND]
USAGE
  $ ncov19 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ncov19 help [COMMAND]`](#ncov19-help-command)
* [`ncov19 summary`](#ncov19-summary)

## `ncov19 help [COMMAND]`

display help for ncov19

```
USAGE
  $ ncov19 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `ncov19 summary`

Get the global summery of COVID-19

```
USAGE
  $ ncov19 summary

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/summary.ts](https://github.com/aurghya-0/covid19cli/blob/v0.1.0/src/commands/summary.ts)_
<!-- commandsstop -->
