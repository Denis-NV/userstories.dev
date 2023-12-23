import { parse, printParseErrorCode } from 'jsonc-parser'
import type { ParseError, ParseOptions } from 'jsonc-parser'
import fs from 'fs'

export function parseJson<T extends object = any>(
  input: string,
  options?: ParseOptions,
): T | undefined {
  try {
    const data = fs.readFileSync(input, 'utf8')

    try {
      return JSON.parse(data)
    } catch {
      console.log('Error parsing JSON')
    }

    const errors: ParseError[] = []

    const result: T = parse(data, errors, options)

    if (errors.length > 0) {
      throw new Error(printParseErrorCode(errors[0].error))
    }

    return result
  } catch (err) {
    console.error(err)
  }
}

export const getScope = (answers: any): string => {
  answers.scope = parseJson('package.json')?.name

  return `Based on the root package.json name, your package scope is : ${answers.scope}`
}
