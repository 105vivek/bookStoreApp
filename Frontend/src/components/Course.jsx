import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Card from "./Card";

// console.log("ji");
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28  text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500 ">Here ! :)</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab soluta
            molestias, accusantium alias dolorum adipisci at, deserunt expedita
            magni harum veritatis quae illum beatae accusamus. Enim porro
            deleniti tempore nostrum placeat id ipsa officia excepturi cumque?
            Obcaecati natus ipsum sunt necessitatibus dolorum laboriosam, ea
            repellat ad illum aliquam pariatur amet.
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 ">
            Back
          </button>
        </div>
        <div className="mt-12 gap-20 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
Course;
