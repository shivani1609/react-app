import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>We apologize for the inconvenience. Please try again later.</p>
            <p>{error.status}: {error.statusText}</p>
        </div>
    )
}

export default Error;