import { useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBot from './chatbot'
import ListItems from './components/ListItems'
import SearchBar from './components/SearchBar'
import { TodoItem } from './types'

function App() {

  const [listItems, setListItems] = useState<TodoItem[]>([]);
  const [displayItems, setDisplayItems] = useState<TodoItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query:string) => {
  setSearchQuery(query); // track the query
  const lowercasedQuery = query.toLowerCase();

  if (query.trim() === '') {
    setDisplayItems(listItems);
  } else {
    const results = listItems.filter(item =>
      item.text.toLowerCase().includes(lowercasedQuery)
    );
    setDisplayItems(results);
  }
};

// // Load from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem('todoItems');
//     if (stored) {
//       setListItems(JSON.parse(stored));
//     }
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem('todoItems', JSON.stringify(listItems));
//   }, [listItems]);

  const fetchItems = async () => {
    const response = await fetch("http://localhost:8080/api/todos");
    const data: TodoItem[] = await response.json();
    setListItems(data);
  };

  useEffect(() => {
    fetchItems(); // runs once when App loads
  }, []);


const toggleComplete = async (id: string) => {
  const response = await fetch(`http://localhost:8080/api/todos/${id}/toggle`, {
    method: "PUT",
  });
  const updatedItem = await response.json();
  setListItems(prev =>
    prev.map(item => item.id === id ? updatedItem : item)
  );
};

const deleteItem = async (id: string) => {
  await fetch(`http://localhost:8080/api/todos/${id}`, {
    method: "DELETE",
  });
  setListItems(prev => prev.filter(item => item.id !== id));
};

const editItem = async (id: string, newText: string) => {
  const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: newText,
  });
  const updatedItem = await response.json();
  setListItems(prev =>
    prev.map(item => item.id === id ? updatedItem : item)
  );
};

const filteredItems = useMemo(() => {
  return listItems.filter(item =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [listItems, searchQuery]);


const addItemToList = async (item: TodoItem) => {
  const response = await fetch("http://localhost:8080/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  const newItem = await response.json();
  setListItems(prev => [...prev, newItem]);
};


  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} addItem={addItemToList} />
      <ListItems
        listItems={filteredItems}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
        editItem={editItem}
        query={searchQuery}
      />
    </div>
  )
}

export default App;
