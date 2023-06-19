import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Fetched Data</h1>
        <div className="grid grid-cols-1 gap-4">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2 text-blue-900">{item.title}</h2>
              <p className="text-gray-600">Completed: {item.completed ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
