import { CACHE_REVALIDATION_DEFAULT } from './cache'
import { LAWS } from './laws'

export const constants = {
  cache: {
    CACHE_REVALIDATION_DEFAULT,
  },
  laws: LAWS,
} as const
