import { QUALITY_MAX, QUALITY_MIN, SELL_IN_MIN } from './gilded_rose'

export const decreaseSellIn = item => (item.sellIn -= 1)

export const isExpired = item => item.sellIn < SELL_IN_MIN

export const setQualityToMin = item => (item.quality = QUALITY_MIN)

export const decreaseQuality = item => {
  if (item.quality > QUALITY_MIN) {
    item.quality = item.quality - 1
  }
}

export const increaseQuality = item => {
  if (item.quality < QUALITY_MAX) {
    item.quality = item.quality + 1
  }
}
