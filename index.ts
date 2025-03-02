import { foo } from './lib/library.ts'

export function hello () {
  console.log(foo)
  return 'world'
}
