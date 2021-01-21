import { decreaseQuality, decreaseSellIn, isExpired } from './itemActions'

export default item => {
  decreaseSellIn(item)
  decreaseQuality(item)
  if (isExpired(item)) {
    decreaseQuality(item)
  }
}
