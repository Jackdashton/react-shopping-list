import React from 'react';

function AddNewItemForm({ handleAddItem }) {
  const [label, setLabel] = React.useState('');

  return (
    <div className='new-list-item-form'>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleAddItem(label);

          setLabel('');
        }}
      >
        <label htmlFor='new-list-form-input'>
          New Item:
        </label>
          <input
            id='new-list-form-input'
            type='text'
            value={label}
            onChange={(event => {
              setLabel(event.target.value)
            })}
          />
          <button>Add</button>
      </form>
    </div>
  )
}

export default AddNewItemForm;
