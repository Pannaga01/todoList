import { useState, useEffect } from 'react'
import { TodoItem } from '../types';

function SearchBar({onSearch, addItem}){

    const [query, setQuery] = useState('');

    const [newItem, setNewItem] = useState('');

    useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300); // delay in ms

    return () => clearTimeout(timeout); // cleanup on next keystroke
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value); // just update state
  };


    const setItem = (e) =>{if (e.key === 'Enter') {
      const newItem: TodoItem = {
      id: crypto.randomUUID(), // or Date.now().toString()
      text: e.target.value,
      createdAt: new Date().toLocaleString(),
      completed: false
    };
      const value = newItem.text.trim();
      if (value !== '') {
        addItem(newItem);
        setNewItem('');
      }
    }}

    return (
        <>
        <input
    className="search-bar"
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      style={{
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box'
      }}
    />
    <input
  className="add-item"
  type="text"
  placeholder="Add Item..."
  value={newItem}
  onChange={(e) => setNewItem(e.target.value)}
  onKeyDown={(e) => {setItem(e)}}
  style={{
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
        marginTop:'5px'
      }}
/>
        </>

  );

}

export default SearchBar;