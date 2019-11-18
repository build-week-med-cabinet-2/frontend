import React, { useState } from "react";

export const AilmentForm = () => {
  const initialValues = {
    ailment: "",
    yearsUse: null,
    painLevel: null
  };

  const [ailmentValues, setAilmentValues] = useState(initialValues);

  const handleChange = e => {
    setAilmentValues({ ...ailmentValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="formWrapper">
        <form>
          <label htmlFor="ailment">Ailment</label>
          <input
            type="text"
            name="ailment"
            onChange={handleChange}
            value={ailmentValues.ailment}
          />
          <label htmlFor="years of pharma use">Years of Pharma Use</label>
          <input
            type="number"
            min="0"
            max="100"
            name="yearsUse"
            placeholder="0"
            onChange={handleChange}
            value={ailmentValues.yearsUse}
          />
          <label htmlFor="pain level">Pain Level</label>
          <input
            type="number"
            min="0"
            max="10"
            name="painLevel"
            placeholder="0"
            onChange={handleChange}
            value={ailmentValues.painLevel}
          />
        </form>
      </div>
    </>
  );
};
