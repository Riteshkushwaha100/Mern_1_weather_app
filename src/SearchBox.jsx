import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <>
      <div className="mx-auto" >
        <form  onSubmit={handleSubmit}>
          <Form.Control
            style={{ width: "18rem", margin: "20px" }}
            type="text"
            className="mx-auto"
            placeholder="Enter location"
            value={location}
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
