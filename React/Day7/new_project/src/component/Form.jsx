import Reac from "react";

export default function Form({text,value,arr}) {
  return (
    <div>
      <form action="">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
        
      </form>
      <h1>{text}</h1>
          <input type="number" value={value} />
          <h1>{arr}</h1>
    </div>
  );
}
