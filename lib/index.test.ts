import { hexWithOptionalOpacity } from '.'
import Ajv from 'ajv'

test('Hex color', () => {
  const ajv = new Ajv()
  expect(ajv.validate(hexWithOptionalOpacity, '#ffffff')).toBe(true)
})

test('Hex color with opacity', () => {
  const ajv = new Ajv()
  expect(ajv.validate(hexWithOptionalOpacity, '#ffffffff')).toBe(true)
})

test('Fails on bad format', () => {
  const ajv = new Ajv()
  expect(ajv.validate(hexWithOptionalOpacity, '#gggggg')).toBe(false)
})
