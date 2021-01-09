import { Command, flags } from '@oclif/command'
import { outputFile } from 'fs-extra'
import { join } from 'path'
import { getReactCCTemplate } from '../templates/react-cc'
import { getReactFCTemplate } from '../templates/react-fc'

export default class ReactComponent extends Command {
  static description = 'Creates a component in /src/components/'

  static flags = {
    component: flags.enum({
      options: ['functional', 'class'],
      default: 'functional',
      char: 'c',
      description: 'creates a React functional or class component',
    }),
    includestyle: flags.boolean({
      default: false,
      char: 's',
      description: 'whether to include a style file or not',
    }),
    style: flags.enum({
      options: ['css', 'scss', 'sass'],
      default: 'css',
      char: 'S',
      description: 'creates a css, scss or sass file and links it',
    }),
    export: flags.enum({
      options: ['default', 'named'],
      default: 'named',
      char: 'e',
      description: 'exports the component as a default or named export',
    }),
    template: flags.enum({
      options: ['jsx', 'tsx'],
      default: 'tsx',
      char: 'T',
      description: 'creates a .jsx or .tsx file',
    }),
    includetype: flags.boolean({
      default: true,
      char: 't',
      description: 'whether to include a type or not',
    }),
  }

  static args = [{ name: 'name' }]

  async run() {
    const {
      args: { name },
      flags: {
        component,
        style,
        includestyle,
        export: exportFlag,
        template,
        includetype,
      },
    } = this.parse(ReactComponent)

    let temp = ''

    if (component === 'class') {
      temp = getReactCCTemplate({
        name,
        includestyle,
        style,
        exporttype: exportFlag,
        template,
        includetype,
      })
    } else if (component === 'functional') {
      temp = getReactFCTemplate({
        name,
        includestyle,
        style,
        exporttype: exportFlag,
        template,
        includetype,
      })
    } else {
      this.log('Invalid component type provided')
    }

    if (typeof name === 'string') {
      const path = join(...['./src/components/', name, `/index.${template}`])

      const stylePath = join(
        ...['./src/components/', name, `/${name}.module.${style}`]
      )

      if (temp.length > 0) {
        outputFile(path, temp)
          .then(() => {
            this.log(
              `A ${component} component created in /src/components/${name}/`
            )
            if (includestyle) {
              outputFile(stylePath, '')
                .then(() => {
                  this.log(
                    `A ${style} file created in /src/components/${name}/`
                  )
                })
                .catch((err: any) => {
                  this.log(
                    `The style file couldn\t be generated because of: ${err.message}`
                  )
                })
            }
          })
          .catch((err: any) => {
            this.log(
              `The component file couldn\t be generated because of: ${err.message}`
            )
          })
      } else {
        this.log(
          "Couldn't generate a component template, did you provide correct flags?"
        )
      }
    } else {
      this.log('No or invalid component name provided')
    }
  }
}
