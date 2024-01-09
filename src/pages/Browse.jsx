import Header from "../components/Header";
import { Redirect } from "react-router-dom";
import Promote from "../components/Promote";

export default function Browse(props) {
  const { loggedUser } = props;

  if (!loggedUser) {
    return <Redirect to="/welcome" />;
  }

  return (
    <div>
      <Header loggedUser={loggedUser} />
      <Promote />

      <h1>{loggedUser.nickname} welcome to Browse page</h1>
    </div>
  );
}
