import { memo, VFC } from "react";
import {
  Box,
  Button,
  Container,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text
} from "@chakra-ui/react";

import { Item } from "../../types/Item";
import { EmailIcon } from "@chakra-ui/icons";

const items: Item[] = [
  {
    id: 2,
    title: "じゃがいも",
    done: false
  },
  {
    id: 1,
    title: "にんじん",
    done: true
  }
];

const CircleIcon = (props: any) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export const ShoppingList: VFC = memo(() => {
  return (
    <Container>
      <Box p={4}>
        <Text fontSize="lg" color="red.400" fontWeight="bold">
          買い物リスト
        </Text>
        <br />
        <Box
          p={4}
          border="1px"
          borderColor="#d7d2cd"
          borderRadius="10px"
          bg="white"
          shadow="md"
          bgColor="yellow.100"
        >
          {items.length <= 0 ? (
            "登録されたリストはありません。"
          ) : (
            <List spacing={3}>
              {items.map((item) => (
                <ListItem key={item.id}>
                  <ListIcon as={CircleIcon} boxSize={4} color="green.500" />
                  {item.title}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Stack direction={["column", "row"]} spacing={4} p={4}>
          <Button colorScheme="green" boxShadow="lg">
            LINEで送る
          </Button>
          <Button leftIcon={<EmailIcon />} colorScheme="blue" boxShadow="lg">
            メールで送る
          </Button>
        </Stack>
      </Box>
    </Container>
  );
});
