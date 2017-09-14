import { Multiple, OptionFlag } from './option'

class IntegerFlag extends OptionFlag<number> {
  public parse(input: string): number {
    if (!/^[0-9]+$/.test(input)) throw new Error(`Expected an integer but received: ${input}`)
    return parseInt(input, 10)
  }
}

export const integerFlag: Multiple<number> = OptionFlag.multiple(IntegerFlag)
