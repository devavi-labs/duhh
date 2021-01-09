export function getReactFCTemplate({
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
  const cType = `React.FC<${it ? `${name}Props` : 'any'}>`

  const lines: string[] = []

  lines.push("import React from 'react'")
  if (is) lines.push(`import styles from './${name}.module.${style}'`)
  lines.push('')
  if (template === 'tsx' && it) lines.push(`type ${name}Props = {}`)
  lines.push('')
  lines.push(
    `const ${name}${template === 'tsx' ? `: ${cType}` : ''} = (props) => {`
  )
  lines.push('\treturn ( <div></div> )')
  lines.push('}')
  lines.push('')
  if (et === 'default') lines.push(`export default ${name}`)
  else if (et === 'named') lines.push(`export { ${name} }`)

  return lines.join('\n')
}
