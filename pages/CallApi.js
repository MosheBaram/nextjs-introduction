import Head from "../components/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";

const CallApi = ({ name, url }) => {
  return (
    <>
      <div className="hero">
        <Head title="CallApi" />
        <Nav />

        <div>
          Api Response from URL {url}: {name}
        </div>
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

CallApi.getInitialProps = async () => {
  const url = `https://nextjs-introduction-azure.vercel.app/api/hello`;
  const res = await fetch(url);
  const { name } = await res.json();
  return { name, url };
};

export default CallApi;
