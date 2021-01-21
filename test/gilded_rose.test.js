import { Shop, Item } from '../src/gilded_rose'

describe('Gilded Rose ', function () {
  describe('decrease sellIn', function () {
    it('decrease sellIn by 1', function () {
      const gildedRose = new Shop([new Item('default', 5, 10)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(4)
    })
  })

  describe('default item', function () {
    it('decrease quality for default by 1', function () {
      const gildedRose = new Shop([new Item('default', 5, 10)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(9)
    })

    it('decrease quality for default name by 2 when sellIn <= 0', function () {
      const gildedRose = new Shop([new Item('default', 0, 10)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(8)
    })

    it('do not decrease quality for default name when sellIn = 0 quality = 0', function () {
      const gildedRose = new Shop([new Item('default', 0, 0)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(0)
    })
  })

  describe('Aged Brie item', function () {
    it('increase quality for Aged Brie by 1', function () {
      const gildedRose = new Shop([new Item('Aged Brie', 5, 10)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(11)
    })

    it('never increase quality for Aged Brie over 50', function () {
      const gildedRose = new Shop([new Item('Aged Brie', 5, 50)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(50)
    })

    it('increase quality for Aged Brie when it expires by 2', function () {
      const gildedRose = new Shop([new Item('Aged Brie', -1, 45)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(47)
    })

    it('never increase quality for Aged Brie over 50 and sellIn < 0', function () {
      const gildedRose = new Shop([new Item('Aged Brie', -1, 50)])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(50)
    })
  })

  describe('Sulfuras item', function () {
    it('quality and sellIn does not change', function () {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 5, 50),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(50)
      expect(items[0].sellIn).toBe(5)
    })

    it('quality doesn not change when sellIn < 0', function () {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', -1, 40),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(40)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert item', function () {
    it('increase quality by 2 when 6 =< sellIn < 11', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 40),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(42)
    })

    it('increase quality by 3 when sellIn < 6 ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 40),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(43)
    })

    it('drop quality to 0 when sellIn = 0 ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(0)
    })

    it('should not increase quality by 3 when sellIn < 6 and quality = 48 ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 48),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(50)
    })

    it('should not increase quality by 2 when sellIn < 6 and quality = 49 ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 49),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(50)
    })

    it('should increase quality by 1 when sellIn > 11 ', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 12, 49),
      ])
      const items = gildedRose.updateQuality()

      expect(items[0].quality).toBe(50)
    })
  })
})
