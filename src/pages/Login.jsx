import Header from "../components/Header";

export default function Login({ loggedUser }) {
  return (
    <div>
      <Header loggedUser={loggedUser} />
      <h1>Login page</h1>
    </div>
  );
}
