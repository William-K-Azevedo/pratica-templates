import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosRequest } from "./handlers";
import axios from "axios";

const ReactQueryTemplates = () => {
  const queryClient = useQueryClient();

  // Simples utilização de React Query:
  const { data, isLoading } = useQuery(["cats"], AxiosRequest);

  //   Utilizando a opção select para modificar o dado retornado pela api:
  const selected = useQuery(["moreCats"], AxiosRequest, {
    select: (data) => <div>{data}</div>,
  });

  //Padrão bem utilizado para fazer algo no servidor e em seguida atualizar o estado com o servidor atualizado
  const myMutation = useMutation(() => axios.post("mutation.url"), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cats"]);
    },
  });

  return <>{isLoading ? <div>Carregando</div> : <div>{data}</div>}</>;
  //   return <>{isLoading ? <div>Carregando</div> : <div>{data}</div>}</>;
};

export default ReactQueryTemplates;
