import Head from "../../components/head";
import Nav from "../../components/nav";
import fetch from "isomorphic-unfetch";

const sw = ({ character }) => {
  return (
    <>
      <div className="hero">
        <Head title={character?.name} />
        <Nav />

        <h1>{`Star Wars Character: ${character?.name}`}</h1>
        <p>Height: {`${character?.height} cm`}</p>
        <p>Hair Color: {`${character?.hair_color}`}</p>
        <p>Eye Color: {`${character?.eye_color}`}</p>
        <p>Birth Year: {`${character?.birth_year}`}</p>
        <p>Gender: {`${character?.gender}`}</p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
};

sw.getInitialProps = async ({ query }) => {
  const characterId = query?.id !== "random" ? query?.id : getRandomCharacter();
  const res = await fetch(`https://swapi.dev/api/people/${characterId}`);
  const character = await res.json();
  return { character };
};

const getRandomCharacter = () => {
  return Math.floor(Math.random() * 80) + 1;
};

export default sw;
