import { Command, flags } from '@oclif/command'

export default class ReactComponent extends Command {
  static description = 'Creates a component in /src/components/'

  static flags = {
    functional: flags.boolean({
      char: 'f',
      description: 'creates a React functional component',
    }),
    class: flags.boolean({
      char: 'f',
      description: 'creates a React class component',
    }),
    style: flags.enum({
      options: ['css', 'scss', 'sass'],
      char: 's',
      description: 'creates and links a style file',
    }),
    export: flags.enum({
      options: ['default', 'named'],
      char: 'e',
      description: 'exports the component as a default or named export',
    }),
  }

  static args = [{ name: 'name' }]

  async run() {
    const {
      args: { name },
      flags: { functional, class: classFlag, style, export: exportFlag },
    } = this.parse(ReactComponent)

    this.log('name: ', name)
    this.log('function: ', functional)
    this.log('class: ', classFlag)
    this.log('style: ', style)
    this.log('export: ', exportFlag)
  }
}
