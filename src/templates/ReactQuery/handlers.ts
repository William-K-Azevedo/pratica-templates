import axios from "axios";

export const AxiosRequest = async (): Promise<any> => {
  try {
    const { data } = await axios.get("https://cataas.com/cat");
    return data;
  } catch (error) {
    console.log(error);
  }
};
