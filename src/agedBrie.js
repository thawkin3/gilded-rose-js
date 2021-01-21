import { increaseQuality, decreaseSellIn, isExpired } from './itemActions'

const AGED_BRIE = 'Aged Brie'

const isCorrectUpdateAction = item => item.name === AGED_BRIE

const update = item => {
  decreaseSellIn(item)
  increaseQuality(item)

  if (isExpired(item)) {
    increaseQuality(item)
  }
}

export default { isCorrectUpdateAction, update }
