import React, { useEffect, useState } from 'react';
import CategoriesPage from '../category/CategoriesPage';
import axios from 'axios';
import Card from '../category/card';

const Recipe = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getLatestItems = async () => {
      try {
        const res = await axios.get("http://localhost:3500/api/all-item");
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getLatestItems();
  }, []);

  return (
    <div>
      <CategoriesPage />
      <div className="flex flex-wrap">
        {items.map(item => (
          <Card className='mx-3' key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
