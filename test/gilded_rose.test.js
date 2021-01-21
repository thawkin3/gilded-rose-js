import { Shop, Item } from '../src/gilded_rose'

describe('Gilded Rose', () => {
  describe('normal item', () => {
    it('decreases the quality by 1 and decreases the sellIn by 1 for each day passed', () => {
      const gildedRose = new Shop([new Item('normal', 2, 4)])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(1)
      expect(item.quality).toBe(3)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(2)
    })

    it('decreases the quality by 2 and decreases the sellIn by 1 for each day that passes beyond the `sellIn` day', () => {
      const gildedRose = new Shop([new Item('normal', 1, 10)])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(9)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(-1)
      expect(item.quality).toBe(7)
    })

    it('does not allow the quality of the item to drop below 0', () => {
      const gildedRose = new Shop([new Item('normal', 5, 2)])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(4)
      expect(item.quality).toBe(1)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(3)
      expect(item.quality).toBe(0)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(2)
      expect(item.quality).toBe(0)
    })
  })

  describe('Aged Brie', () => {
    it('increases the quality by 1 and decreases the sellIn by 1 for each day passed', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 2, 4)])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(1)
      expect(item.quality).toBe(5)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(6)
    })

    it('increases the quality by 2 and decreases the sellIn by 1 for each day that passes beyond the `sellIn` day', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 1, 10)])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(11)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(-1)
      expect(item.quality).toBe(13)
    })

    it('does not allow the quality of the item to exceed 50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 5, 49)])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(4)
      expect(item.quality).toBe(50)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(3)
      expect(item.quality).toBe(50)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('increases the quality by 1 and decreases the sellIn by 1 for each day passed when the sellIn value is greater than 10', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 4),
      ])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(14)
      expect(item.quality).toBe(5)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(13)
      expect(item.quality).toBe(6)
    })

    it('increases the quality by 2 and decreases the sellIn by 1 for each day passed when the sellIn value is between 10 and 6, inclusive', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 4),
      ])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(10)
      expect(item.quality).toBe(5)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(9)
      expect(item.quality).toBe(7)
    })

    it('increases the quality by 3 and decreases the sellIn by 1 for each day passed when the sellIn value is between 5 and 0, inclusive', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 4),
      ])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(5)
      expect(item.quality).toBe(6)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(4)
      expect(item.quality).toBe(9)
    })

    it('drops in quality to 0 when the sellIn value is less than 0', () => {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 1, 4),
      ])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(0)
      expect(item.quality).toBe(7)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(-1)
      expect(item.quality).toBe(0)
    })
  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('never changes in quality or sellIn days', () => {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 2, 4),
      ])
      const item = gildedRose.items[0]

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(2)
      expect(item.quality).toBe(4)

      gildedRose.updateQuality()
      expect(item.sellIn).toBe(2)
      expect(item.quality).toBe(4)
    })
  })
})
