import { tokenizePath } from './pathTokenizer'
import { tokensToParser, PathParserOptions } from './pathParserRanker'

export { comparePathParserScore, PathParser } from './pathParserRanker'

export { tokenizePath }

export const createParser = (path: string, options?: PathParserOptions) => {
  return tokensToParser(tokenizePath(path), options)
}
