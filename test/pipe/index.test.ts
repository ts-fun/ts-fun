import { pass, pipe } from '@tsfun/pipe'

describe('without extra arguments', () => {
  const increase = (x: number) => x + 1
  const double = (x: number) => x * 2
  const square = (x: number) => x * x

  it('pass value to a pipeline and get result', () => {
    const result = pass(2)
      .to(increase)
      .to(double)
      .to(square)
      .get()

    expect(result).toBe(square(double(increase(2))))
  })

  it('start a pipeline with a function', () => {
    const sum = (...args: number[]) => args.reduce((a, b) => a + b, 0)

    const pipeline = pipe(sum)
      .to(increase)
      .to(double)
      .to(square)
      .get

    expect(pipeline(3, -2, 1)).toBe(square(double(increase(sum(3, -2, 1)))))
  })
})

describe('with extra arguments', () => {
  const sum = (...args: number[]) => args.reduce((a, b) => a + b)
  const product = (...args: number[]) => args.reduce((a, b) => a * b)

  it('pass value to a pipeline and get result', () => {
    const result = pass(2)
      .to(sum, 3, 5)
      .to(product, 2, 4)
      .get()

    expect(result).toBe(product(sum(2, 3, 5), 2, 4))
  })

  it('start a pipeline with a function', () => {
    const pipeline = pipe(sum).to(product, 2, 4).get
    expect(pipeline(2, 3, 5)).toBe(product(sum(2, 3, 5), 2, 4))
  })
})
