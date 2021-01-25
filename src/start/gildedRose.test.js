const { Shop, Item } = require('./gildedRose')

describe('Gilded Rose', function () {
  // fix this test first
  it.skip('should foo', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe('fixme')
  })
})
