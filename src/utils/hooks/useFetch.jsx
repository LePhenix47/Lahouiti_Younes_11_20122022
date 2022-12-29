import { useState, useEffect } from "react";

import { log } from "../functions/helperFunctions";

export function useFetch(url) {
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [hasError, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  //Will execute once and also everytime the url changes
  useEffect(() => {
    //We need the controller in case we make multiple successions of fetch requests
    const controller = new AbortController();

    log("Fetch →", { url });
    setLoading(true);
    if (!url) {
      log("There must be an URL passed as an argument");
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch(url);

        const dataFromFetch = await response.json();

        setData(dataFromFetch);
      } catch (APIError) {
        console.error(
          `⚠ API Error found! An unexpected error has occured while attempting to make a call to the API → ${APIError}`
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
      //This function will ONLY execute if the component who made the fetch request has been unmounted from the DOM
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, hasError, errorMessage };
}
