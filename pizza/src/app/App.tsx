import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./store/store";
import router from "./router/Router";
import Spinner from "@/shared/ui/Spinner/Spinner";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App
