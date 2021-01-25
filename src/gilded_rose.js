export class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  static MAX_QUALITY = 50

  updateQuality() {
    this.sellIn -= 1
    this.quality += 1

    if (this.sellIn <= -1) {
      this.quality += 1
    }

    this.quality = Math.min(this.quality, AgedBrie.MAX_QUALITY)
  }
}

export class BackstagePasses extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }
}

export class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  updateQuality() {}
}

export class Shop {
  constructor(items = []) {
    this.items = items
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      switch (item.name) {
        case 'Aged Brie':
        case 'Sulfuras, Hand of Ragnaros':
          item.updateQuality()
          break
        default:
          if (
            item.name != 'Aged Brie' &&
            item.name != 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1
              }
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1
              if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 11) {
                  if (item.quality < 50) {
                    item.quality = item.quality + 1
                  }
                }
                if (item.sellIn < 6) {
                  if (item.quality < 50) {
                    item.quality = item.quality + 1
                  }
                }
              }
            }
          }

          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1
          }

          if (item.sellIn < 0) {
            if (item.name != 'Aged Brie') {
              if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality > 0) {
                  if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    item.quality = item.quality - 1
                  }
                }
              } else {
                item.quality = item.quality - item.quality
              }
            } else {
              if (item.quality < 50) {
                item.quality = item.quality + 1
              }
            }
          }
      }
    }

    return this.items
  }
}
