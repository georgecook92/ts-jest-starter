import { add, subtract } from '../src'

describe('Add', () => {
  it('should work', () => {
    const answer: number = add(1, 2)
    expect(answer).toEqual(3)
  })
})

describe('Subtract', () => {
  it('should work', () => {
    const answer: number = subtract(1, 2)
    expect(answer).toEqual(-1)
  })
})