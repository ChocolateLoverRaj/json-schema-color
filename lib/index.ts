import { JSONSchema7 } from 'json-schema'

export const hexWithOptionalOpacity: JSONSchema7 = {
  type: 'string',
  pattern: '^#([\\da-f]{2}){3,4}$'
}
