import Head from "../components/head";
import Nav from "../components/nav";
import Image from "next/image";
import axios from "axios";

const CallApi = ({ name, image, url }) => {
  return (
    <>
      <div className="hero">
        <Head title="CallApi" />
        <Nav />

        <div>
          Api Response from URL {url}:
          <p>{name ?? "Error: No response received"}</p>
          <p>
            {image ? (
              <Image
                src={image}
                alt={name}
                title={name}
                width="300%"
                height="300%"
              />
            ) : (
              "Error: No image received"
            )}
          </p>
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
  const { name, image } = data;
  return { url, image, name };
};

export default CallApi;
