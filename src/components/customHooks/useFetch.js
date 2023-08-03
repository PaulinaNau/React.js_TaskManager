import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw Error("Can not fetch the data");
          }
          return response.json();
        })
        .then((resdata) => {
          setData(resdata);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
