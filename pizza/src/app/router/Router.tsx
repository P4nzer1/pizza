import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/LayoutPage/LayoutPage";
import HomePageLazy from "@/pages/HomePage/HomePage.lazy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePageLazy />,
      },
     
    ],
  }
]);

export default router;