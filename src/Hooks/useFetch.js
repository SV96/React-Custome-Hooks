import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Loader() {
  return <div className="loader"></div>;
}

const ErrorLoader = (props) => {
  return (
    <div>
      <p>Error Occured in fetching data {props.error}</p>
    </div>
  );
};

const useFecth = (url) => {
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    data: "",
    error: "",
    component: "",
  });

  const fetchData = () => {
    setFetchState({ ...fetchState, component: <Loader /> });
    axios
      .get(url)
      .then((resp) => {
        setFetchState({
          ...fetchState,
          isLoading: false,
          data: resp.data.data,
          component: "",
        });
      })
      .catch((err) => {
        setFetchState({
          ...fetchState,
          isLoading: false,
          error: err.message,
          component: <ErrorLoader error={err.message} />,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  const { isLoading, data, error, component } = fetchState;
  return { isLoading, data, error, component };
};

const DataFetchComponent = () => {
  const { isLoading, data, error, component } = useFecth(
    "https://reqres.in/api/users"
  );
  useEffect(() => {}, [isLoading]);
  if (isLoading || error !== "") return <div>{component}</div>;
  else {
    return (
      <>
        {data?.map((value) => {
          return <p key={value.id}>{value.first_name}</p>;
        })}
      </>
    );
  }
};

export default DataFetchComponent;
