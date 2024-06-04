import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryWrapper from './category';
import axios from 'axios';
import Card from './card';

const CategoriesPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3500/api/categories/${category}`);
        setItems(response.data);
      } catch (error) {
        console.log("Empty");
      }
      setLoading(false);
    };
    fetchCategory();
    console.log(items);
  }, [category]);

  return (
    <div className='px-6 lg:px-12 py-20'>
      <h1 className='capitalize text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>
        {category}
      </h1>
      <CategoryWrapper />
      <ul className='flex flex-wrap gap-6 justify-center'>
        {items && items.map(item => (
          <Card key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
