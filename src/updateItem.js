import agedBrieFactory from './agedBrie'
import backstagePassFactory from './backstagePass'
import updateDefaultItem from './defaultItem'
import sulfurasFactory from './sulfuras'

const updateActions = [agedBrieFactory, backstagePassFactory, sulfurasFactory]

export default item => {
  const updateAction = updateActions.find(updateFactory =>
    updateFactory.isCorrectUpdateAction(item)
  )

  if (updateAction) {
    updateAction.update(item)
  } else updateDefaultItem(item)
}
