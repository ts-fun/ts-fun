export interface Box<Value> {
  readonly tag: true
  readonly value: Value
}

export interface NonNox {
  readonly tag: false
}

/**
 * Option type
 */
export type Option<Value> = Some<Value> | None

/**
 * Type of options that contain value
 */
export interface Some<Value> extends Box<Value> {}

/**
 * Type of options that do not contain value
 */
export interface None extends NonNox {}

/**
 * Result type
 */
export type Result<Payload, Error> = Ok<Payload> | Err<Error>

/**
 * Type of results that carry payload
 */
export interface Ok<Payload> extends Box<Payload> {}

/**
 * Type of result that carry error
 */
export interface Err<Error> extends NonNox {
  readonly error: Error
}