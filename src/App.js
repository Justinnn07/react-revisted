import React, { useState } from "react";
import Home from "./Home";
import Data from "./Data";
import axios from "axios";

function App() {
  // const [counter, setCounter] = useState(0);
  // function GlobalFunction(a) {
  //   if (a === "-") {
  //     setCounter(counter - 1);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // }

  // const [todo, setTodo] = useState({});
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => setTodo(data.data));
  };

  const filteredArray = todo.filter((res) => res.title.includes(filter));

  return (
    <div>
      {/* {Data.map((name, index) => {
        return <Home name={name.name} key={index} />;
      })} */}
      {/* <div style={{ display: "flex" }} className="app__a">
        <h1 style={{ cursor: "pointer" }} onClick={() => GlobalFunction("-")}>
          -
        </h1>
        <h1>{counter}</h1>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => GlobalFunction("kiran")}
        >
          +
        </h1>
      </div> */}

      <button onClick={fetchData}>Fetch</button>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* <h1>{todo.title}</h1> */}
      {filteredArray.map((data, index) => {
        return <Home name={data.title} key={index} />;
      })}
    </div>
  );
}

export default App;
