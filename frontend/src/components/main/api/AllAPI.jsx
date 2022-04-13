import { useEffect, useState } from "react";
import axios from "axios";

function AllAPI() {
  const [allInfoOfAPI, setallInfoOfAPI] = useState([]);

  useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        setallInfoOfAPI(response.data);
      });
  }, []);

  const data = allInfoOfAPI;
  const arrayOfAPIData = [];
  arrayOfAPIData.push(data);

  console.warn(arrayOfAPIData);

  return <> </>;
}

export default AllAPI;
