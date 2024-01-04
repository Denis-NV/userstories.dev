import fs from 'fs'
import { parse, printParseErrorCode } from 'jsonc-parser'
import type { ParseError, ParseOptions } from 'jsonc-parser'

export function parseJson<T extends object = any>(input: string, options?: ParseOptions): T {
  const data = fs.readFileSync(input, 'utf8')

  try {
    return JSON.parse(data)
  } catch (e: any) {
    console.log(`Cannot parse ${input}: ${e.message}`)
  }

  options = { allowTrailingComma: true, ...options }

  const errors: ParseError[] = []
  const result: T = parse(data, errors, options)

  if (errors.length > 0) {
    throw new Error(printParseErrorCode(errors[0].error))
  }

  return result
}

export function readJson<T extends object = any>(path: string, options?: ParseOptions): T {
  try {
    return parseJson(path, options)
  } catch (e: any) {
    throw new Error(`Cannot parse ${path}: ${e.message}`)
  }
}

export function serializeJson<T extends object = object>(input: T): string {
  return JSON.stringify(input, null, 2) + '\n'
}

export function writeJson<T extends object = object>(path: string, value: T): void {
  // tree.write(path, serializeJson(value))

  console.log('updated value:', serializeJson(value))
}

export function updateJson<T extends object = any, U extends object = T>(
  path: string,
  updater: (value: T) => U,
  options?: ParseOptions,
): void {
  const updatedValue = updater(readJson(path, options))

  writeJson(path, updatedValue)
}
