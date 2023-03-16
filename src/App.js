import { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";


const App = () => {
  const [values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    birthday: "",
    contact:"",
  });

  const inputs = [
    {
      id: 1,
      name: "Firstname",
      type: "text",
      placeholder: "Firstname",
      errorMessage:
        "Enter firstname",
      label: "Firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage:
        "Enter lastname",
      label: "Firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage:"select date of birth",
      label: "Birthday",
    },
    {
      id: 5,
      name: "contact",
      type: "tel",
      placeholder: "Contact",
      errorMessage: "Enter Contact number",
      label: "Contact",
      required: true,
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button>Submit</button>
    </form>
  </div>
  );
};

export default App;