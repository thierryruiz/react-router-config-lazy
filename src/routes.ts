import { lazy } from "react";

const routes = [
  {
    path: "/page1",
    component: lazy(() => import("./LazyPage1")),
    linkLabel: "Page1"
  },
  {
    path: "/page2",
    component: lazy(() => import("./LazyPage2")),
    linkLabel: "Page2"
  }
];

export default routes;
