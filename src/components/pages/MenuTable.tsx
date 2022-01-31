import { memo, VFC } from "react";
import { Outlet } from "react-router-dom";

export const MenuTable: VFC = memo(() => {
  return (
    <>
      <p>１週間の献立表ページです</p>
      <Outlet />
    </>
  );
});
