import React from "react";
import "./App.css";
import AddNewItemForm from './AddNewItemForm'

function App() {
  const [items, setItems] = React.useState([
    { label: "Banana", id: 123 },
    { label: "Tea", id: 456 },
  ]);

  function handleAddItem(label) {
    const newItem = {
      // label collected from AddNewItemForm.js
      label,
      id: Math.random(),
    };

    const nextItems = [...items, newItem];

    setItems(nextItems);
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ul className="shopping-list">
          {items.map(({ label, id }) => (
            <li key={id}>{label}</li>
          ))}
        </ul>
      </div>
      <AddNewItemForm
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;
