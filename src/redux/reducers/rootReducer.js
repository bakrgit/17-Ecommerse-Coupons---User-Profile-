import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer'
import productsReducer from './productsReducer'
import authReducer from './authReducer'
import reviewReducer from './reviewReducer'
import addToWishListReducer from './wishListReducer'
import couponReducer from './couponReducer'
import userAddressesReducer from './userAddressesReducer'
export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    subCategory: subcategoryReducer,
    allproducts: productsReducer,
    authReducer: authReducer,
    reviewReducer: reviewReducer,
    addToWishListReducer: addToWishListReducer,
    couponReducer: couponReducer,
    userAddressesReducer: userAddressesReducer

})