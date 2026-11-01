import assert from 'node:assert/strict'
import test from 'node:test'
import { shareOrCopy } from '../src/lib/copy-to-clipboard.ts'

const data = {
  title: 'Điều 6',
  url: 'https://gtdb.app/vbpl/nghi-dinh-168-2024/6',
}
function navigatorFor(t, value) {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'navigator')
  Object.defineProperty(globalThis, 'navigator', { value, configurable: true })
  t.after(() => {
    if (original) Object.defineProperty(globalThis, 'navigator', original)
    else delete globalThis.navigator
  })
}

test('Web Share works even when canShare is absent', async (t) => {
  let shared
  navigatorFor(t, {
    share: async (value) => {
      shared = value
    },
  })
  assert.equal(await shareOrCopy(data), 'shared')
  assert.equal(shared, data)
})

test('cancelling the native share dialog does not copy anything', async (t) => {
  navigatorFor(t, {
    share: async () => {
      throw new DOMException('Cancelled', 'AbortError')
    },
    clipboard: {
      writeText: async () => assert.fail('clipboard changed on cancellation'),
    },
  })
  assert.equal(await shareOrCopy(data), 'cancelled')
})

test('failed or unsupported Web Share falls back to the clipboard', async (t) => {
  let copied
  navigatorFor(t, {
    share: async () => {
      throw new Error('Share unavailable')
    },
    clipboard: {
      writeText: async (value) => {
        copied = value
      },
    },
  })
  assert.equal(await shareOrCopy(data), 'copied')
  assert.equal(copied, data.url)
  navigator.canShare = () => false
  navigator.share = async () => assert.fail('unsupported native share')
  assert.equal(await shareOrCopy(data), 'copied')
})

test('clipboard permission failures propagate instead of reporting success', async (t) => {
  navigatorFor(t, {
    clipboard: {
      writeText: async () => {
        throw new Error('Permission denied')
      },
    },
  })
  await assert.rejects(shareOrCopy(data), /Permission denied/)
  delete navigator.clipboard
  await assert.rejects(shareOrCopy(data), /Clipboard is unavailable/)
})
