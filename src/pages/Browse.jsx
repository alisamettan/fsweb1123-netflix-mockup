export default function Browse(props) {
  const { loggedUser } = props;
  return (
    <div>
      <h1>{loggedUser.nickname} welcome to Browse page</h1>
    </div>
  );
}
