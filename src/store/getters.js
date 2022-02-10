// const getProductsInCart: state => state.cart,

// export default {
//     getProductsInCart
// }

export const products = state => {
  return state.products;
};

export const getProductsInCart = state => {
  return state.cart;
};

export const totalSum = state => {
  return state.total;
};

export const quantity = state => {
  return state.qty;
};

export const isAuth = (state)=>{
  return state.isLoggin;
}
