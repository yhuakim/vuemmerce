import { createStore } from 'vuex'

function updateLocalStorage(cartItems) {
  let cart = JSON.stringify(cartItems)
  localStorage.setItem('cartItems', cart)
}

export default createStore({
  state: {
    products: [],
    // clothes: [],
    // jewelries: [],
    // electronics: [],
    cartItems: [],
  },
  getters: {
    clothesCategories(state) {
      return state.products.filter(item => item.category === "men's clothing" || item.category === "women's clothing").slice(1, 9)
    },

    jewelriesCategories(state) {
      return state.products.filter(item => item.category === "jewelery")
    },

    electronicsCategories(state) {
      return state.products.filter(item => item.category === "electronics")
    },

    cartQuantity(state) {
      let quantities = state.cartItems.map(p => p.quantity)
      return quantities.reduce((a, b) => (a + b), 0)
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    addToCartItems(state, product) {
      let item = state.cartItems.find(p => p.id === product.id)
      if (item) {
        alert("Product already exists inside the cart")
      } else {
        state.cartItems.push({ ...product, quantity: 1 })
        alert('Product added to cart')
      }
      updateLocalStorage(state.cartItems)
      console.log(state.cartItems);
    },

    increaseProductQuantity(state, product) {
      let item = state.cartItems.find(p => p.id === product.id)
      if (item) {
        item.quantity++
      }
      updateLocalStorage(state.cartItems)
    },

    decreaseProductQuantity(state, product) {
      let item = state.cartItems.find(p => p.id === product.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cartItems = state.cartItems.filter(p => p.id !== product.id)
        }
      }
      updateLocalStorage(state.cartItems)
    },

    populateCartItems(state) {
      const cartItems = localStorage.getItem('cartItems')
      if (cartItems) {
        state.cartItems = JSON.parse(cartItems)
      }
    }
  },
  actions: {
    async getProducts({ commit }) {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      commit("setProducts", products);
    },
  },
  modules: {
  }
})
