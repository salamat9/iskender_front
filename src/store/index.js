import { init } from "@rematch/core"
import createLoadingPlugin from '@rematch/loading'
import categories from "./models/categories"
import products from "./models/products"

const loadingPlugin = createLoadingPlugin()

const store = init({
  plugins: [loadingPlugin],
  models: {
    categories,
    products,
  },
})

export default store
