import React, { useState } from "react";

export default function QuickDosageEntry() {
  const initialValues = {
    date: "",
    strain: "",
    dosageAmount: "",
    intakeMethod: ""
  };

  const [log, setLog] = useState(initialValues);

  const handleChange = e => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label htmlFor="dosage date">Date:</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={log.date}
        />
        <label htmlFor="strain">Strain:</label>
        <input
          type="text"
          name="strain"
          onChange={handleChange}
          value={log.strain}
        />
        <label htmlFor="Dosage Amount">Dosage Amount:</label>
        <input
          type="number"
          name="dosageAmount"
          onChange={handleChange}
          value={log.dosageAmount}
        />
        <label htmlFor="intake method">Intake Method:</label>
        <input
          type="text"
          name="intakeMethod"
          onChange={handleChange}
          value={log.intakeMethod}
        />
      </form>
    </>
  );
}
