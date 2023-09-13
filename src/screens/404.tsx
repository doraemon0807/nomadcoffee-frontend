import { useNavigate } from "react-router-dom";
import routes from "../routes";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Error</h1>
      <button onClick={() => navigate(routes.home)}>Return to Home</button>
    </div>
  );
}
