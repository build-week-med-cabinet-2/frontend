import React from "react";

export const Ailment = props => {
  const { ailment } = props;

  return (
    <>
      <button>❌</button>
      <h4>{ailment.ailmentName}</h4>
    </>
  );
};
