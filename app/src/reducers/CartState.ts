export interface Item {
  id: number;
  item: string;
}
export interface cartState {
  Cart: Item[];
}
export type CartActions =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: number };
