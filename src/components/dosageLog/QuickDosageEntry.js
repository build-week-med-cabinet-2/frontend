import React, { useState } from "react";

export default function QuickDosageEntry() {
  const initialValues = {
    date: "",
    strain: "",
    dosageAmount: "",
    intakeMethod: ""
  };

  const [log, setLog] = useState(initialValues);

  const handleChannge = e => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label htmlFor="dosage date">Date:</label>
        <input type="date" name="dosageDate" id="" />
        <label htmlFor="strain">Strain:</label>
        <input type="text" name="strain" id="" />
        <label htmlFor="Dosage Amount">Dosage Amount:</label>
        <input type="number" name="amount" id="" />
        <label htmlFor="intake method">Intake Method:</label>
        <input type="text" name="intake" id="" />
      </form>
    </>
  );
}
