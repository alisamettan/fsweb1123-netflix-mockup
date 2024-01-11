import Header from "../components/Header";
import { Redirect } from "react-router-dom";
import Promote from "../components/Promote";
import MoviesSection from "../components/MoviesSection";
import TopMoviesSection from "../components/topMovies/TopMoviesSection";

export default function Browse(props) {
  const { selectedProfile } = props;

  if (!selectedProfile) {
    return <Redirect to="/welcome" />;
  }

  return (
    <div>
      <Header selectedProfile={selectedProfile} />
      <Promote />

      <MoviesSection title="Because you watched Aliens" genre="Horror" />
      <MoviesSection
        title="Because you watched Fast and Furious"
        genre="Action"
      />
      <TopMoviesSection title="Top 10 Movies in Turkey Today" />
      <MoviesSection title="Because you like Comedy Movies" genre="Comedy" />
    </div>
  );
}
