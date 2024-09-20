import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res); // Store all currency data
        setError(null);
      })
      .catch((err) => {
        setError("Error fetching data");
        setData({});
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}

export default useCurrencyInfo;
