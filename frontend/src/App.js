import axios from 'axios';
import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';


const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (item) =>{
    setCurrentItem(item);
  };
  const handleDelete = async (id) =>{
    try {
      await axios.delete(`http://localhost:8000/api/items/${id}/`);
      setRefresh(!refresh);
    } catch (error){
      console.error('There was an error deleting the item!', error);
    }
  };

  const handleSuccess = () => {
    setCurrentItem(null);
    setRefresh(!refresh);
  };

  return (
    <div className='App'>
      <ItemForm item={currentItem} onSuccess={handleSuccess}/>
      <ItemList key={refresh} onEdit={handleEdit} onDelete={handleDelete} refresh={refresh}/>
    </div>
  );
};



export default App;