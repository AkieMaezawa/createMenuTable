import { CreateList } from "../components/pages/CreateList";
import { ShoppingList } from "../components/pages/ShoppingList";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  {
    path: "create_list",
    exact: false,
    children: <CreateList />
  },
  {
    path: "shopping_list",
    exact: false,
    children: <ShoppingList />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
