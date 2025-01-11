import { format } from 'date-fns'

export function getHumanizedDate(publishedOn) {
  return '' // TODO: fix humanized Date
  return format(new Date(publishedOn), 'MMMM do, yyyy')
}
