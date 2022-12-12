import axios from "axios";

export interface IUsers {
  id: number;
  nome: string;
  password: string;
  email: string;
}

export const AxiosRequest = async (): Promise<IUsers[] | undefined> => {
  try {
    const { data } = await axios.get("http://localhost:3030");
    return data;
  } catch (error) {
    console.log(error);
  }
};
