import type { UnpluginFactory, UnpluginInstance } from 'unplugin'
import type { Options } from './types'
import { createUnplugin } from 'unplugin'

export const unpluginFactory: UnpluginFactory<Options | undefined> = options => ({
  name: 'unplugin-starter',
  transformInclude(id) {
    return id.endsWith('main.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`)
  },
})

export const unplugin: UnpluginInstance<Options | undefined> = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
