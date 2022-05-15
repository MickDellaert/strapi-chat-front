import { useEffect, useState } from "react";

const useFetch = (url, message) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, message]);

  return { data, error, loading };
};

export default useFetch;


// const useFetch = (url, message) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       const fetchData = async () => {
//         setLoading(true);
//         try {
//           const res = await fetch(url);
//           const json = await res.json();

//           setData(json);
//           setLoading(false);
//         } catch (error) {
//           setError(error);
//           setLoading(false);
//         }
//       };
//       fetchData();

//     }, 1000);
//     	return () => {
//       	clearInterval(interval);
//       };

//   }, [url, message]);

//   return { data, error, loading };
// };

// export default useFetch;