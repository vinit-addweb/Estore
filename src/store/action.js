import axios from "axios";

export const getProducts = ({ commit }) => {
  axios
    .get("https://bb60e7d4-34be-42ed-857a-8a58c96a3868.mock.pstmn.io/categories")
    .then(response => {
      commit("SET_PRODUCTS", response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const addProduct = (context, payload) => {
  const prodId = payload.id;
  console.log(prodId);
  const productsData = context.getters.products;
  console.log(productsData);
  const product = productsData.find(prod => {
    return prod.id == prodId;
  });
  console.log(product);
  context.commit("ADD_PRODUCT", product);
};

export const removeFromCart = (context, payload) => {
  context.commit("removeProductFromCart", payload);
};

export const getuser=({commit})=>{
  axios.get("https://afac9c0b-7fa3-40d8-9ccd-50e74f9e56e4.mock.pstmn.io")
  .then(response=>{
      commit('SET_USERS',response.data)
  }).catch(error => {
      console.log(error);
  });
}
export const login = (context)=>{
  context.commit('login');
}
export const logout = (context)=>{
  context.commit('logout')
}