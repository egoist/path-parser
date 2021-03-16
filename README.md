# @egoist/path-parser

This module is entirely extracted from [vue-router](https://github.com/vuejs/vue-router-next), it's basically a light-weight version of [path-to-regexp](https://github.com/pillarjs/path-to-regexp) with path ranking support.

## Install

```bash
npm i @egoist/path-parser
```

## Usage

Create a path parser:

```ts
import {createParser} from '@egoist/path-parser'

const parser = createParser('/user/:user')

parser.parse('/user/egoist')
//=> { user: 'egoist' }
// `null` if not matched
```

Sort paths by ranking:

```ts
import { comparePathParserScore, createParser } from '@egoist/path-parser'

const paths = ['/:user', '/about'],

path.sort((a, b) => {
    return comparePathParserScore(createParser(a), createParser(b))
})
//=> [ '/about', '/:user' ]
```

## Credits

The code is extracted from [vue-router](https://github.com/vuejs/vue-router-next), all credits to its author [@posva](https://github.com/posva). The code might differ from the upstream in the future.

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)