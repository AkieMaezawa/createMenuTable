import { Item } from "../types/Item";

export const useSendText = (items: Item[]) => {
  let sendText: string = "";
  if (items.length > 0) {
    items.map((item) => {
      sendText = sendText + item.title + "\n";
      return sendText;
    });
  }
  return sendText;
};
