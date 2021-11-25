import Head from "../../components/head";
import Nav from "../../components/nav";
import Image from "next/image";
import axios from "axios";

const rnm = ({ data }) => {
  const { name, status, species, gender, origin, location, image } = data;
  const { originName = name } = origin;
  const { locationName = name } = location;

  return (
    <>
      <div className="hero">
        <Head title={name} />
        <Nav />

        <h1>{`Rick and Morty Character: ${name}`}</h1>
        <Image src={image} alt={name} title={name} width="300%" height="300%" />

        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {originName}</p>
        <p>Current Location: {locationName}</p>
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

rnm.getInitialProps = async ({ query }) => {
  const characterId = query?.id !== "random" ? query?.id : getRandomCharacter();
  const url = `https://rickandmortyapi.com/api/character/${characterId}`;
  const res = await axios.get(url);
  const { data } = res;

  return { data };
};

const getRandomCharacter = () => {
  return Math.floor(Math.random() * 825) + 1;
};

export default rnm;
