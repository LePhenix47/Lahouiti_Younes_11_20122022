import { useState, useEffect } from "react";

export function useHook(url) {
  const [data, setData] = useState({});

  const [isLoading, setLoading] = useState(false);

  const [hasError, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  //Will execute once and also everytime the url changes
  useEffect(() => {
    const controller = new AbortController(); //We need the controller in case we make multiple successions of fetch requests

    setLoading(true);
    if (!url) {
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch(url);
        const dataFromFetch = await response.json();

        setData(dataFromFetch);
      } catch (APIError) {
        console.error(
          `API Error! An unexpected error has occured: ${APIError}`
        );
        setError(true);
        setErrorMessage(APIError);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    //In case we make multiple fetch requests → we abort the rest of them if one fail or is out of sync
    return () => {
      controller.abort();
    };
  }, [url]);

  if (hasError) {
    return { data, isLoading, hasError, errorMessage };
  }

  return { data, isLoading, hasError };
}
