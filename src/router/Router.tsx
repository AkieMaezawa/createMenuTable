import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { MenuTable } from "../components/pages/MenuTable";

import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../templetes/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu_table" element={<Home />}>
          <Route
            index
            element={
              <HeaderLayout>
                <MenuTable />
              </HeaderLayout>
            }
          />
          {HomeRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<HeaderLayout>{route.children}</HeaderLayout>}
            />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
