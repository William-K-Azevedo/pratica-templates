import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosRequest, IUsers } from "./handlers";
import axios from "axios";
import { useState } from "react";

interface INovoUser {
  nome: string;
  senha: string;
  email: string;
}

const ReactQueryTemplates = () => {
  const [formData, setFormData] = useState<INovoUser>({
    nome: "",
    senha: "",
    email: "",
  });
  const queryClient = useQueryClient();

  // Simples utilização de React Query:
  const { data, isLoading } = useQuery(["users"], AxiosRequest);

  //   Utilizando a opção select para modificar o dado retornado pela api:
  // const selected = useQuery(["moreCats"], AxiosRequest, {
  //   select: (data) => <div>{data}</div>,
  // });

  //Padrão bem utilizado para fazer algo no servidor e em seguida atualizar o estado com o servidor atualizado
  const myMutation = useMutation(
    (data: INovoUser) => axios.post("http://localhost:3030/", data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  return (
    <>
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        <div style={{ margin: 10 }}>
          {data?.map((user) => (
            <div>
              <div>ID: {user.id}</div>
              <div>Nome: {user.nome}</div>
              <div>Senha: {user.password}</div>
              <div>Email: {user.email}</div>
            </div>
          ))}
        </div>
      )}
      <div>
        <div>
          Nome:
          <input
            name="nome"
            onChange={(e) =>
              setFormData({
                ...formData,
                nome: e.target.value,
              })
            }
            type="text"
            value={formData.nome}
          />
        </div>
        <div>
          Senha:
          <input
            name="senha"
            onChange={(e) =>
              setFormData({
                ...formData,
                senha: e.target.value,
              })
            }
            type="text"
            value={formData.senha}
          />
        </div>
        <div>
          Email:
          <input
            name="email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            type="text"
            value={formData.email}
          />
        </div>
        <button
          onClick={() => {
            myMutation.mutate(formData);
          }}
        >
          Enviar
        </button>
      </div>
    </>
  );
  //   return <>{isLoading ? <div>Carregando</div> : <div>{data}</div>}</>;
};

export default ReactQueryTemplates;
