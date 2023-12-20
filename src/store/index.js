import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import categories from './models/categories';
import stories from './models/stories';

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [loadingPlugin],
  models: {
    categories,
    stories,
  },
});

export default store;
