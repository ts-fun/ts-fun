import { AddProperty } from './utils/types'
export { AddProperty }

/**
 * Create an object with `proto` as prototype
 * and `[key]: value` as the only own properties
 * @param proto Prototype to extends upon
 * @param key Property key
 * @param value Property value
 */
export function addProperty<
  Proto extends object | null,
  Key extends string | number | symbol,
  Value
> (
  proto: Proto,
  key: Key,
  value: Value
): AddProperty<Proto, Key, Value> {
  const object = Object.create(proto)
  object[key] = value
  return object
}

export default addProperty
