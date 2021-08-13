import React from "react";
import ReactDom from "react-dom";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

//array books containing the various objects to be used for the book component
const books = [
  {
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "By Héctor García",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "Word Power Made Easy",
    author: "Norman Lewis",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg",
  },
];

//root component that is to be passed to the ReactDom.render() command.
function BookList() {
  return (
    <div className="booklist">
      {books.map((book) => {
        return <Book attr_name={book}></Book>;
      })}
    </div>
  );
}

function Book(props) {
  console.log(props);
  const { image, title, author } = props.attr_name;
  return (
    <section className="book">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <h6>{author}</h6>
    </section>
  );
}

// Very important command to render the code to the output html file index.html
ReactDom.render(<BookList />, document.getElementById("root"));
