import { useEffect, useState } from "react";

const JSONobject = [
  {
    key: "1",
    name: "aaaa",
  },
  {
    key: "2",
    name: "bbbb",
  },
  {
    key: "3",
    name: "cccc",
  },
  {
    key: "4",
    name: "dddd",
  },
];
const ListAndKeys = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 4000);
  }, []);

  const renderData = () => {
    return JSONobject.map((val, idx) => (
      <div key={val.key}>
        <p>{val.name}</p>
      </div>
    ));
  };
  return <div>{isLoading ? <h2>is Loading...</h2> : renderData()}</div>;
};
export default ListAndKeys;
