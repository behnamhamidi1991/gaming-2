import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h2>Ooops! :(</h2>
      <h1>{error.status}</h1>
      <p>{error.data}</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
