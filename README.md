# @devavi-labs/duhh

A personal CLI tool.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@devavi-labs/duhh.svg)](https://npmjs.org/package/@devavi-labs/duhh)
[![CircleCI](https://circleci.com/gh/devavi-labs/duhh/tree/master.svg?style=shield)](https://circleci.com/gh/devavi-labs/duhh/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@devavi-labs/duhh.svg)](https://npmjs.org/package/@devavi-labs/duhh)
[![License](https://img.shields.io/npm/l/@devavi-labs/duhh.svg)](https://github.com/devavi-labs/duhh/blob/master/package.json)

<!-- toc -->
* [@devavi-labs/duhh](#devavi-labsduhh)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @devavi-labs/duhh
$ duhh COMMAND
running command...
$ duhh (-v|--version|version)
@devavi-labs/duhh/0.0.1 linux-x64 node-v14.15.1
$ duhh --help [COMMAND]
USAGE
  $ duhh COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`duhh help [COMMAND]`](#duhh-help-command)
* [`duhh react-component [NAME]`](#duhh-react-component-name)

## `duhh help [COMMAND]`

display help for duhh

```
USAGE
  $ duhh help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `duhh react-component [NAME]`

Creates a component in /src/components/

```
USAGE
  $ duhh react-component [NAME]

OPTIONS
  -S, --style=(css|scss|sass)         [default: css] creates a css, scss or sass file and links it
  -T, --template=(jsx|tsx)            [default: tsx] creates a .jsx or .tsx file
  -c, --component=(functional|class)  [default: functional] creates a React functional or class component
  -e, --export=(default|named)        [default: named] exports the component as a default or named export
  -s, --includestyle                  whether to include a style file or not
  -t, --includetype                   whether to include a type or not
```

_See code: [src/commands/react-component.ts](https://github.com/devavi-labs/duhh/blob/v0.0.1/src/commands/react-component.ts)_
<!-- commandsstop -->
