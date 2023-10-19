import { useEffect, useState } from "react";

function Univeristies() {
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    async function getUniversities() {
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=United+Kingdom"
      );
      const data = await response.json();
      console.log(response);
      setUniversities(data);
    }
    getUniversities();
  }, []);

  return (
    <>
      <h1> Univeristies </h1>
      <ul className="universities">
        {universities.map(({ name, country }) => (
          <li key={name}>
            {country} - {name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Univeristies;
