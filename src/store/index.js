import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import categories from './models/categories';
import products from './models/products';
import stories from './models/stories';
import branches from './models/branches';

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [loadingPlugin],
  models: {
    categories,
    products,
    stories,
    branches,
  },
});

export default store;
