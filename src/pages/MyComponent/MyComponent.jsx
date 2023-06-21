import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Helmet } from "react-helmet";

const MyComponent = () => {
  const [data, setData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Helmet>
    <title>Todos | Creative Business</title>
    </Helmet>
      <Navbar></Navbar>
      <div className="bg-black-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-black">
            Fetched Data
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  item.completed ? "bg-green-700" : "bg-red-700"
                }`}
              >
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {item.title}
                </h2>
                <p className="text-black">
                  Completed: {item.completed ? "Yes" : "No"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default MyComponent;
