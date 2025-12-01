export interface TodoItem {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
}

export interface ListItemsProps {
  listItems: TodoItem[];
  toggleComplete: (id: string) => void;
  deleteItem: (id: string) => void;
  editItem: (id: string, newText: string) => void;
  query: string;
}
