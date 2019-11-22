import React from "react";
import { useSelector } from "react-redux";
import Entry from "./Entry";

export default function Log() {
  const entries = useSelector(state => state.dosages.entries);
  console.log(entries);
  return (
    <>
      <h2 style={{marginTop:"2rem"}}>Dosage History</h2>
      {entries.length ? (
        <>
          {entries.map((item, index) => (
            <Entry key={index} entry={item} />
          ))}
        </>
      ) : (
        <p>Please Add a log to view past logs</p>
      )}
    </>
  );
}
