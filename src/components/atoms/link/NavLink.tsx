import { memo, ReactNode, VFC } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};
export const NavLink: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("red.200", "gray.700")
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
});
