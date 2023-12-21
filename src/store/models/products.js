import api from '../../services/api/index';

const products = {
  state: {
    data: [],
    bestsellers: [],
    promoProducts: [],
  },
  reducers: {
    setProducts: (state, payload) => ({
      ...state,
      data: payload,
    }),
    setBestsellers: (state, payload) => ({
      ...state,
      bestsellers: payload,
    }),
    setPromoProducts: (state, payload) => ({
      ...state,
      promoProducts: payload,
    }),
  },
  effects: (dispatch) => ({
    async getProducts() {
      const {
        data: { objects },
      } = await api.get(`/api/getProducts?page=1`);

      dispatch.products.setProducts(objects || []);
    },
    async getBestsellers() {
      const {
        data: { objects },
      } = await api.get(`/api/getProducts?bestseller=true&page=1&main=true`);
      dispatch.products.setBestsellers(objects || []);
    },
    async getPromoProducts() {
      const {
        data: { objects },
      } = await api.get(`/api/getProducts?promo=true&page=1&main=true`);
      dispatch.products.setPromoProducts(objects || []);
    },
  }),
};

export default products;
