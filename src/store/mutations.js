export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const ADD_PRODUCT = (state, payload) => {
  const productData = payload;
  console.log(productData);
  const productInCartIndex = state.cart.findIndex(
    ci => ci.id === productData.id
  );

  if (productInCartIndex >= 0) {
    state.cart[productInCartIndex].qty++;
  } else {
    const newItem = {
      id: productData.id,
      image: productData.image,
      title: productData.title,
      price: productData.price,
      qty: 1,
    };
    state.cart.push(newItem);
  }
  state.qty++;
  state.total += productData.price;
};

export const removeProductFromCart = (state, payload) => {
  const prodId = payload.productId;
  const productInCartIndex = state.cart.findIndex(
    cartItem => cartItem.productId === prodId
  );
  const prodData = state.cart[productInCartIndex];
  state.cart.splice(productInCartIndex, 1);
  state.qty -= prodData.qty;
  state.total -= prodData.price * prodData.qty;
};

export const SET_USERS=(state,users)=>{
  state.users=users;
}

export const login = (state)=>{
  state.isLoggin = true
}
export const logout = (state)=>{
  state.isLoggin = false
}