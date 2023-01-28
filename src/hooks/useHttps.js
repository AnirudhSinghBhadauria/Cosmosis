import { useState, useCallback } from "react";

const useHttps = () => {
  const [requstLoading, setRequestLoading] = useState(true);
  const [requestError, setRequestError] = useState("");

  const sendRequest = useCallback(async (config, useData) => {
    setRequestLoading(true);

    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        body: config.body ? JSON.stringify(config.body) : null,
        headers: config.headers ? config.headers : {},
      });

      if (!response.ok) {
        throw new error("REQUEST FAILED!!");
      }

      const data = await response.json();

      useData(data);
    } catch (error) {
      setRequestError(error.message || "REQUEST FAILED");
    }
    setRequestLoading(false);
  }, []);

  return {
    requestError,
    requstLoading,
    sendRequest,
  };
};

export default useHttps;
