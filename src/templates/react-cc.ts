export function getReactCCTemplate({
  name,
  includestyle: is,
  style,
  exporttype: et,
  template,
  includetype: it,
}: {
  name: string
  includestyle: boolean
  style: string
  exporttype: string
  template: string
  includetype: boolean
}): string {
  const cType = `<${it ? `${name}Props, ${name}State` : 'any,any'}>`

  const lines: string[] = []

  lines.push("import React from 'react'")
  if (is) lines.push(`import styles from './${name}.module.${style}'`)
  lines.push('')
  if (template === 'tsx' && it) {
    lines.push(`type ${name}Props = {}`)
    lines.push(`type ${name}State = {}`)
  }
  lines.push('')
  lines.push(
    `class ${name} extends React.Component${
      template === 'tsx' ? `${cType}` : ''
    } {`
  )
  lines.push(`\tstate${template === 'tsx' && it ? `: ${name}State` : ''} = {}`)
  lines.push('')
  lines.push('\trender() {')
  lines.push('\t\treturn ( <div></div> )')
  lines.push('\t}')
  lines.push('}')
  lines.push('')
  if (et === 'default') lines.push(`export default ${name}`)
  else if (et === 'named') lines.push(`export { ${name} }`)

  return lines.join('\n')
}
