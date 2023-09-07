import { isLoggedInVar } from "../apollo";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => isLoggedInVar(false)}>Log in now!</button>
    </div>
  );
}
