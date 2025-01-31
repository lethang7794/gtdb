import { CACHE_REVALIDATION_DEFAULT } from './cache'
import { LAWS } from './laws'
import { PATHS } from './path'
import { VBPL_SECTION_ZERO } from './vbpl'

export const constants = {
  cache: {
    CACHE_REVALIDATION_DEFAULT,
  },
  laws: {
    ...LAWS,
    VBPL_SECTION_ZERO
  },
  paths: PATHS,
} as const
