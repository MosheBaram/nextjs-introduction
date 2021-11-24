import Head from "../components/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import axios from "axios";

const CallApi = ({ name, url }) => {
  return (
    <>
      <div className="hero">
        <Head title="CallApi" />
        <Nav />

        <div>
          Api Response from URL {url}: {name ?? "Error: No response received"}
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
  const res = await axios.get(url);
  const { data } = res;
  const { name } = data;
  return { url, name };
};

export default CallApi;
