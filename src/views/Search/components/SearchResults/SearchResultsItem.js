import  React from "react";
export default function SearchResultsItem({ id, name, email }) {
  return (
    <div
      style={{
        backgroundColor: "#E8E7E7",
        margin:20,
        padding: 10,
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
      <p></p>
    </div>
  );
}
