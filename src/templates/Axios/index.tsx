import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AxiosGet } from "./handlers";

const AxiosTemplates = () => {
  const [myState, setMyState] = useState();
  const [anotherState, setAnotherState] = useState();

  const queryClient = useQueryClient();

  useEffect(() => {
    AxiosGet().then(({ data }) => {
      setMyState(data);
    });
  }, []);

  return (
    <div>
      <div>Cat Image</div>
    </div>
  );
};

export default AxiosTemplates;
