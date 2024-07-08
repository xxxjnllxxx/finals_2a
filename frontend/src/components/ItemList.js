import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error); //
        }
    };

    return (
      <div>
        <h1>items</h1>
          <ul>
            {items.map(item =>(
              <li key={item.id}>
                  {item.firstName} 
                  : {item.middleName} 
                  : {item.lastName} 
                  : {item.phone} 
                  : {item.email} 
                  : {item.dateOfBirth} 
                  : {item.placeOfBirth} 
                  : {item.sex} 
                  : {item.civilStatus} 
                  : {item.height} 
                  : {item.weight} 
                  : {item.bloodType} 
                  : {item.gsisId} 
                  : {item.pagIbigId} 
                  : {item.philhealtId} 
                  : {item.sssNo} 
                  : {item.tinNo} 
                  : {item.agencyEmployee} 
                  : {item.citizenship} 
                  : {item.residentialAddress} 
                  : {item.zipCode} 
                  : {item.permanentAddress} 
                  : {item.zipCode} 
                      <button onClick={() =>
           onEdit(item)}>Edit</button>  
           <button onClick={() =>
           onDelete(item.id)}>Delete</button>
                  </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;