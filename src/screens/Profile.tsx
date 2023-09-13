import { useNavigate } from "react-router-dom";
import { logOutUser } from "../apollo";
import Button from "./components/shared/Button";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={() => logOutUser(navigate)}>Log Out</Button>
    </div>
  );
}
