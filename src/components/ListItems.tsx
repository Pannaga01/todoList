import { useEffect, useState } from "react";
import './ListItem.css';
import { ListItemsProps, TodoItem } from "../types";

function ListItems({ listItems, toggleComplete, deleteItem, editItem, query }: ListItemsProps) {
//({listItems}) //({children} : ) if passed as children

    const [editingId, setEditingId] = useState<string>();
    const [editText, setEditText] = useState<string>();


    const [activeStates, setActiveStates] = useState(Array(listItems?.length).fill(false)) //props.listItems

    useEffect(() => {
    setActiveStates(Array(listItems.length).fill(false));
    }, [listItems]);

  function highlightMatch(text:string) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1 || query.trim() === '') return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="highlight-search-text">
        {text.slice(index, index + query.length)}
      </span>
      {text.slice(index + query.length)}
    </>
  );
}

const handleEdit = (id:string, text:string) => {
    setEditingId(id);
    setEditText(text ?? '');

  };

  const saveEdit = (id:string) => {
    if (!editingId || editText === undefined || editText.trim() === '') return;
    editItem(id, editText.trim());
    setEditingId(null);
  };

    return(
      <>
      <h1>To-Do List</h1>
      <ul className="list">
        {listItems.length === 0 ? 'No items to display' : listItems.map(item => (
          <li key={item.id} className={`list-item ${item.completed ? 'completed' : ''}`}>
            {editingId === item.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => saveEdit(item.id)}
                onKeyDown={(e) => e.key === 'Enter' && saveEdit(item.id)}
                autoFocus
              />
            ) : (
              <>
                <span onClick={() => toggleComplete(item.id)}>
                  {highlightMatch(item.text)}
                </span>
                <div className="actions">
                  <span className="timestamp">{item.createdAt}</span>
                  <button onClick={() => handleEdit(item.id, item.text)}>✏️</button>
                  <button onClick={() => deleteItem(item.id)}>🗑️</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>

    )
}

export default ListItems