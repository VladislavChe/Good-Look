import { configureStore } from '@reduxjs/toolkit'

import newCollectionSlice from '../components/Section/NewCollectionSection/SliceNewCollectionSection'

export default configureStore({
  reducer: {
    newCollectionItems: newCollectionSlice,
  },
})
