import Header from "../components/Header";

const Main = ({ loggedUser }) => {
  return (
    <div>
      <Header loggedUser={loggedUser} />
      <h1>main page</h1>
    </div>
  );
};

export default Main;
