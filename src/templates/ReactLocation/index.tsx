import { ReactLocation, Router } from "@tanstack/react-location";
import AxiosTemplate from "../Axios";
import ReactQueryTemplates from "../ReactQuery";

const reactLocation = new ReactLocation();

const Routes = () => {
  return (
    <Router
      location={reactLocation}
      routes={[
        {
          path: "/",
          element: <AxiosTemplate />,
        },
        {
          path: "/query",
          element: <ReactQueryTemplates />,
        },
      ]}
    />
  );
};

export default Routes;
