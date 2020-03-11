import React from "react";

function QueryForm(props) {
  console.log(props);
  const { handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Enter start date:
        <input type="date" onChange={handleChange} name="starttime" />
      </label>
      <label htmlFor="">
        Enter end date:
        <input type="date" onChange={handleChange} name="endtime" />
      </label>
      <label htmlFor="">
        Number of earthquakes to display:
        <input type="number" onChange={handleChange} name="limit" min="0" />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default QueryForm;
