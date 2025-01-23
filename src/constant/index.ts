import { CACHE_REVALIDATION_DEFAULT } from './cache'
import { LAWS } from './laws'
import { PATHS } from './path'

export const constants = {
  cache: {
    CACHE_REVALIDATION_DEFAULT,
  },
  laws: LAWS,
  paths: PATHS,
} as const
