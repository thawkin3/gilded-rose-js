import updateItem from './updateItem'

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export const QUALITY_MAX = 50
export const QUALITY_MIN = 0
export const SELL_IN_MIN = 0

export class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    this.items.forEach(updateItem)
    return this.items
  }
}
