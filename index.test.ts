import test from 'node:test'
import assert from 'node:assert'
import { hello } from './index.ts'

test('index export', async (_t) => {
  assert.strictEqual(hello(), 'world', 'A message')
})
