import React, { useState } from "react";
import axios from "axios";

export const AxiosGet = async (): Promise<any> => {
  try {
    const response = axios.get("https://cataas.com/cat");
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const AxiosPost = async () => {
  try {
    const response = axios.post("some link", {
      method: "GET",
      data: {
        someData: "oi",
      },
    });
  } catch (error) {}
};
