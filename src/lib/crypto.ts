import { env } from '@/env.mjs'
import { createHmac } from 'node:crypto'

const SECRET = env.NEXT_PUBLIC_SECRET

export function toHex(arrayBuffer: ArrayBuffer) {
  return Array.prototype.map
    .call(new Uint8Array(arrayBuffer), (n) => n.toString(16).padStart(2, '0'))
    .join('')
}

export const key = crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode(SECRET),
  { name: 'HMAC', hash: { name: 'SHA-256' } },
  false,
  ['sign']
)

export function getToken(id: string): string {
  const hmac = createHmac('sha256', SECRET)
  hmac.update(JSON.stringify({ id: id }))
  const token = hmac.digest('hex')
  return token
}
