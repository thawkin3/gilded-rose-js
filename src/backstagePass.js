import {
  increaseQuality,
  decreaseSellIn,
  setQualityToMin,
  isExpired,
} from './itemActions'

const BACKSTAGE_SELL_IN_FIRST_BOUNDARY = 10
const BACKSTAGE_SELL_IN_SECOND_BOUNDARY = 5
const BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert'

const isCorrectUpdateAction = item => item.name === BACKSTAGE_PASS

const update = item => {
  decreaseSellIn(item)

  if (isExpired(item)) {
    setQualityToMin(item)
    return
  }

  increaseQuality(item)

  if (item.sellIn < BACKSTAGE_SELL_IN_FIRST_BOUNDARY) {
    increaseQuality(item)
  }
  if (item.sellIn < BACKSTAGE_SELL_IN_SECOND_BOUNDARY) {
    increaseQuality(item)
  }
}

export default { isCorrectUpdateAction, update }
