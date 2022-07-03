import { formatCentsToDollars } from '../lib/formatCentsToDollars';

describe('formatCentsToDollars function', () => {
  it('works with fractional dollars', () => {
    expect(formatCentsToDollars(1)).toEqual('$0.01');
    expect(formatCentsToDollars(9)).toEqual('$0.09');
    expect(formatCentsToDollars(40)).toEqual('$0.40');
    expect(formatCentsToDollars(140)).toEqual('$1.40');
  });
  it('leaves off cents when its whole dollars', () => {
    expect(formatCentsToDollars(5000)).toEqual('$50');
    expect(formatCentsToDollars(5000000)).toEqual('$50,000');
  });
  it('works with whole and fractional dollars', () => {
    expect(formatCentsToDollars(140)).toEqual('$1.40');
    expect(formatCentsToDollars(5012)).toEqual('$50.12');
    expect(formatCentsToDollars(110)).toEqual('$1.10');
    expect(formatCentsToDollars(101)).toEqual('$1.01');
    expect(formatCentsToDollars(304309403958)).toEqual('$3,043,094,039.58');
  });
});
