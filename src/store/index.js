import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import categories from './models/categories';
import products from './models/products';
import stories from './models/stories';
import branches from './models/branches';
import news from './models/news';

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [loadingPlugin],
  models: {
    categories,
    products,
    stories,
    branches,
    news,
  },
});

export default store;
