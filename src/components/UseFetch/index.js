import useFetch from "../../hooks/useFetch";

import React from "react";

const UseFetch = () => {
  const { data, error, loading } = useFetch(
    "https://www.reddit.com/r/news.json"
  );

  console.log(data);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default UseFetch;
