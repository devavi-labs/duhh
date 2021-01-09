# @devavi-labs/duhh

A personal CLI tool.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@devavi-labs/duhh.svg)](https://npmjs.org/package/@devavi-labs/duhh)
[![CircleCI](https://circleci.com/gh/devavi-labs/duhh/tree/master.svg?style=shield)](https://circleci.com/gh/devavi-labs/duhh/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@devavi-labs/duhh.svg)](https://npmjs.org/package/@devavi-labs/duhh)
[![License](https://img.shields.io/npm/l/@devavi-labs/duhh.svg)](https://github.com/devavi-labs/duhh/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
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

- [`duhh react-component [NAME]`](#duhh-react-component-name)
- [`duhh help [COMMAND]`](#duhh-help-command)

## `duhh react-component [FILE]`

Creates a component in /src/components/

```
USAGE
  $ duhh react-component [NAME]

OPTIONS
  -e, --export=(default|named)  exports the component as a default or named export
  -f, --class                   creates a React class component
  -f, --functional              creates a React functional component
  -s, --style=(css|scss|sass)   creates and links a style file
```

_See code: [src/commands/create-component.ts](https://github.com/devavi-labs/duhh/blob/v0.0.1/src/commands/create-component.ts)_

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

<!-- commandsstop -->
