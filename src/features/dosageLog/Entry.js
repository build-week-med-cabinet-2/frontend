import React from "react";

const Entry = props => {
  const { dosageDate, strain, dosageAmount, intakeMethod } = props.entry;

  return (
    <div>
      <p>Dose info from dose on {dosageDate}</p>
      <p>{strain}</p>
      <p>{dosageAmount}</p>
      <p>{intakeMethod}</p>
    </div>
  );
};

export default Entry;
