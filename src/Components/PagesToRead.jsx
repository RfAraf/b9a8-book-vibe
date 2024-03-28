import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const PagesToRead = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    axios.get("Books.json").then((data) => console.log(data.data));
  }, []);

  // useEffect(() => {
  //   console.log(books);
  //   const storedBooksIds = getStoredBooks();
  //   if (books.length > 0) {
  //     const readBooks = books.filter((book) =>
  //       storedBooksIds.includes(book.bookId)
  //     );
  //     setReadBookList(readBooks);
  //   }
  // }, []);

  return (
    <div>
      <h1>pages to read: {books.length}</h1>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
