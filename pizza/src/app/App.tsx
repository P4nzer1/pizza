import { Suspense } from "react"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom";

import router from "./router/router";
import store from "./store";
//fallback={<Spinner />}
function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense >
          <RouterProvider router={router} />
        </Suspense>

      </Provider>

    </>
  )
}

export default App
