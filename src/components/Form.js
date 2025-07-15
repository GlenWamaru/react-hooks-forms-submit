import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName.length === 0) {
      setErrors(["First name is required!"]);
      return;
    }

    const formData = { firstName, lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
  }

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <button type="submit">Submit</button>
      </form>

      {errors.length > 0 &&
        errors.map((err, index) => (
          <p key={index} style={{ color: "red" }}>
            {err}
          </p>
        ))}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
