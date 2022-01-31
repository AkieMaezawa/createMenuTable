/* eslint-disable react-hooks/exhaustive-deps*/
import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { NavLink } from "../../atoms/link/NavLink";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/menu_table");
    onClose();
  }, []);
  const onClickCreateList = useCallback(() => {
    navigate("/menu_table/create_list");
    onClose();
  }, []);
  const onClickShoppingList = useCallback(() => {
    navigate("/menu_table/shopping_list");
    onClose();
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="red.400"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            献立表作成アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <NavLink onClick={onClickHome}>献立表を作成</NavLink>
          <NavLink onClick={onClickCreateList}>買い物リストを作成</NavLink>
          <NavLink onClick={onClickShoppingList}>買い物リストを見る</NavLink>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickCreateList={onClickCreateList}
        onClickShoppingList={onClickShoppingList}
      />
    </>
  );
});
