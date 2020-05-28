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
$ npm install -g covid19cli
$ ncov19 COMMAND
running command...
$ ncov19 (-v|--version|version)
covid19cli/0.1.0 darwin-x64 node-v12.16.3
$ ncov19 --help [COMMAND]
USAGE
  $ ncov19 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ncov19 hello [FILE]`](#ncov19-hello-file)
* [`ncov19 help [COMMAND]`](#ncov19-help-command)
* [`ncov19 summery [FILE]`](#ncov19-summery-file)

## `ncov19 hello [FILE]`

describe the command here

```
USAGE
  $ ncov19 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ncov19 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/aurghya-0/covid19cli/blob/v0.1.0/src/commands/hello.ts)_

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

## `ncov19 summery [FILE]`

describe the command here

```
USAGE
  $ ncov19 summery [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/summery.ts](https://github.com/aurghya-0/covid19cli/blob/v0.1.0/src/commands/summery.ts)_
<!-- commandsstop -->
