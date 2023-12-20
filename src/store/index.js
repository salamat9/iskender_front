import { init } from "@rematch/core";
import createLoadingPlugin from '@rematch/loading';
import categories from "./models/categories";

const loadingPlugin = createLoadingPlugin();

const store = init({
  plugins: [loadingPlugin],
  models: {
    categories,
  },
});

export default store;
