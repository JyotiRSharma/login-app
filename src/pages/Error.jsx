import { useRouteError } from "react-router-dom";

const Error = ()  => {
  const err = useRouteError();
  return (
    <div className="grid place-content-center h-48 mt-52 font-mono">
    <label>Oops!!</label>
    <label>Something went wrong!!</label>
    <label>{err.status + ":" + err.statusText}</label>
    </div>
  )
}

export default Error;