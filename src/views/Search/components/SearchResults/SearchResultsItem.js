export default function SearchResultsItem({ id, name, email }) {
  return (
    <div
      style={{
        backgroundColor: "#E8E7E7",
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
      <p></p>
    </div>
  );
}
