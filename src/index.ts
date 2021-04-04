import { tokenizePath } from './pathTokenizer'
import { tokensToParser } from './pathParserRanker'
import type { PathParserOptions } from './pathParserRanker'

export { comparePathParserScore } from './pathParserRanker'

export type { PathParser } from './pathParserRanker'

export { tokenizePath, tokensToParser, PathParserOptions }

export const createParser = (path: string, options?: PathParserOptions) => {
  return tokensToParser(tokenizePath(path), options)
}
