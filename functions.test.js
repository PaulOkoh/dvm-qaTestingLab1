// let testFunctions = require('./functions')
const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract
} = require('./functions')

  
describe('test  functions', () => {
  test('returnTwo should return 2',() => {
    expect(returnTwo()).toBe(2)
  })
  test('greeting should return Hello plus name', () => {
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
  })

  test('add test', () => {
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
  })
})

describe('math operatiors', () => {

  test('multiply', () => {
    expect(multiply(2,3)).toEqual(6)
  })

  test('divide', () => {
    expect(divide(10,5)).toEqual(2)
  })

  test('subtract', () => {
    expect(subtract(12,3)).toEqual(9)
  })

})




