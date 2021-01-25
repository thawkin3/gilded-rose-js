export class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  static MIN_QUALITY = 0

  updateQuality() {
    this.quality -= 1

    if (this.sellIn <= 0) {
      this.quality -= 1
    }

    this.quality = Math.max(this.quality, Item.MIN_QUALITY)
    this.sellIn -= 1
  }
}

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  static MAX_QUALITY = 50

  updateQuality() {
    this.quality += 1

    if (this.sellIn <= 0) {
      this.quality += 1
    }

    this.quality = Math.min(this.quality, AgedBrie.MAX_QUALITY)
    this.sellIn -= 1
  }
}

export class BackstagePasses extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

  updateQuality() {
    if (this.sellIn > 10) {
      this.quality += 1
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3
    } else {
      this.quality = 0
    }

    this.sellIn -= 1
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
      item.updateQuality()
    }

    return this.items
  }
}
