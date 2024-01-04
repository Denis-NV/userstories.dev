import { parseJson } from './json'

export const getScope = (answers: any): string => {
  answers.scope = parseJson('package.json')?.name

  return `Based on the root package.json name, your package scope is : ${answers.scope}`
}
