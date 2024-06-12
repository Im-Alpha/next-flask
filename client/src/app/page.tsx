"use client";
import Image from "next/image";
import * as React from "react";

export default function Home() {
  const [message, setMessage] = React.useState("Loading...");
  const [author, setAuthor] = React.useState("Loading...");
  const [title, setTitle] = React.useState("Loading...");
  const [content, setContent] = React.useState("Loading...");
  const [date_posted, setDatePosted] = React.useState("Loading...");
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMessage(data.message);
        setPeople(data.people);
        // setAuthor(data.author);
        // setTitle(data.title);
        // setContent(data.content);
        // setDatePosted(data.date_posted);
        // console.log(data.content);
      });
  }, []);

  return (
    <div>
      {/* <div>{author}</div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{date_posted}</div> */}
      <div>{message}</div>
      
{
  people.map((person, index) => (
    <div key={index}>{person}</div>
  ))
}
    
    </div>
  );
}
