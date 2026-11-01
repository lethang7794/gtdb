import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  isChuong,
  isMuc,
  isDieu,
  isKhoan,
  isDiem,
  isKhoanFirst,
  isDiemFirst,
  hasDieu,
  vbplSectionExplain,
} from '../src/lib/vbpl-explain-section.ts'
import { extractSectionIds } from '../src/lib/extract-section-ids.ts'
import { getShareLinkFromId } from '../src/lib/get-share-link-from-id.ts'
import { withLegacyLawSections } from '../src/lib/legacy-law-sections.ts'

test('chapters after IV and their sections are navigable', () => {
  for (const chapter of [
    'I',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XIV',
  ]) {
    assert.ok(isChuong(chapter), chapter)
    assert.ok(isMuc(`${chapter}.2`))
    assert.equal(vbplSectionExplain(chapter).type, 'chuong')
  }
  for (const invalid of ['', 'IIII', 'VX', 'A', 'I.1', 'ix'])
    assert.ok(!isChuong(invalid), invalid)
  for (const invalid of ['I.', '.1', 'II.1.extra', 'VX.2'])
    assert.ok(!isMuc(invalid), invalid)
  assert.deepEqual(extractSectionIds('IX.2'), {
    firstId: 'IX',
    secondId: 'IX.2',
    thirdId: '',
  })
})

test('article matching never confuses article 6 with 60 or 61', () => {
  for (const id of ['6', '6.1', '6.1.đ']) assert.ok(hasDieu(id, 6))
  for (const id of ['60', '61.1.a', '16', '6junk', '6/1'])
    assert.ok(!hasDieu(id, 6), id)
  assert.ok(isKhoanFirst('6.1.a'))
  assert.ok(!isKhoanFirst('6.10'))
  assert.ok(!isKhoanFirst('6.11.a'))
})

test('legal ID separators are literal dots and points are letters', () => {
  assert.ok(isKhoan('6.10'))
  assert.ok(isDiem('6.10.đ'))
  assert.ok(isDiemFirst('6.10.a'))
  for (const id of ['6x10', '6/10', '6.10.a']) assert.ok(!isKhoan(id), id)
  for (const id of ['6x10xa', '6.10.1', '6.10._', '6.10.aa'])
    assert.ok(!isDiem(id), id)
})

test('every checked-in legal document ID has a recognized type', () => {
  for (const filename of ['luat-TTATGTDT-2024.yaml', 'nghi-dinh-168.yaml']) {
    const yaml = readFileSync(
      new URL(`../data/${filename}`, import.meta.url),
      'utf8'
    )
    const ids = [...yaml.matchAll(/^  id:\s+(.+)$/gm)].map((m) =>
      m[1].trim().replace(/^['"]|['"]$/g, '')
    )
    assert.ok(ids.length > 100)
    for (const id of ids)
      assert.ok(
        isChuong(id) || isMuc(id) || isDieu(id) || isKhoan(id) || isDiem(id),
        `${filename}: ${id}`
      )
  }
})

test('share links are safe during server rendering and encode point IDs', (t) => {
  assert.equal(getShareLinkFromId('6.1.a'), '')
  t.after(() => {
    delete globalThis.window
  })
  globalThis.window = {
    location: {
      origin: 'https://gtdb.app',
      pathname: '/vbpl/nghi-dinh-168-2024/6',
    },
  }
  assert.equal(
    getShareLinkFromId('6.1.đ'),
    'https://gtdb.app/vbpl/nghi-dinh-168-2024/6.1.%C4%91#6.1.%C4%91'
  )
})

test('legal anchors are unique and point to matching data identifiers', () => {
  for (const [data, document] of [
    ['luat-TTATGTDT-2024.yaml', 'luat-TTATGTDB-2024.mdx'],
    ['nghi-dinh-168.yaml', 'nghi-dinh-168.mdx'],
  ]) {
    const yaml = readFileSync(
      new URL(`../data/${data}`, import.meta.url),
      'utf8'
    )
    const scalar = (value) => value.replace(/^(['"])(.*)\1$/, '$2')
    const entries = [...yaml.matchAll(/^(\S+):\n  id: (.+)$/gm)].map(
      (match) => [scalar(match[1]), scalar(match[2])]
    )
    const keys = new Set(entries.map(([key]) => key))
    assert.equal(keys.size, entries.length, `${data}: duplicate YAML keys`)
    for (const [key, id] of entries) assert.equal(id, key, `${data}: ${key}`)
    const mdx = readFileSync(
      new URL(`../src/content/${document}`, import.meta.url),
      'utf8'
    )
    const anchors = [...mdx.matchAll(/<AA? id="([^"]+)"/g)].map(
      (match) => match[1]
    )
    assert.equal(
      new Set(anchors).size,
      anchors.length,
      `${document}: duplicate anchors`
    )
    for (const id of anchors)
      assert.ok(keys.has(id), `${document}: missing ${id}`)
  }
})

test('legacy law URLs resolve without replacing genuine Article 58 provisions', () => {
  const items = Object.fromEntries(
    ['57.1', '57.1.a', '58.1', '71.1.a', '71.1.b', '71.1.c'].map((id) => [
      id,
      { id },
    ])
  )
  const result = withLegacyLawSections(items)
  assert.deepEqual(result['58.1'], items['58.1'])
  assert.deepEqual(result['58.1.a'], items['57.1.a'])
  assert.deepEqual(result.a, items['71.1.a'])
  assert.deepEqual(result.b, items['71.1.b'])
  assert.deepEqual(result.c, items['71.1.c'])
  assert.equal(items['58.1.a'], undefined, 'source data must not be mutated')
})

test('numeric YAML scalars cannot shorten clause IDs or crash section rendering', () => {
  const result = withLegacyLawSections({
    2: { id: 2 },
    2.1: { id: 2.1 },
    '2.10': { id: 2.1 },
  })
  assert.equal(result['2'].id, '2')
  assert.equal(result['2.10'].id, '2.10')
  assert.equal(vbplSectionExplain(result['2.10'].id).path, 'Khoản 10 Điều 2')
})
