import { configureStore } from '@reduxjs/toolkit'
import provinceReducer from './reducers/ProvinceReducer'
export default configureStore({
  reducer: {
    province: provinceReducer
  }
})