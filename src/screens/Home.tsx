import { useNavigate } from "react-router-dom";
import { isLoggedInVar, logOutUser } from "../apollo";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => logOutUser(navigate)}>Log out now!</button>
    </div>
  );
}
