import Head from "../components/head";
import Nav from "../components/nav";
import axios from "axios";

const Page = ({ stars }) => (
  <>
    <div className="hero">
      <Head title="Page" />
      <Nav />
      Next stars: {stars ?? ":-("}
      {console.log(`Render Page: ${stars}`)}
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        background-color: maroon;
        text-align: center;
        color: #fff;
      }
      :global(.hero) {
        width: 100%;
        color: #333;
      }
    `}</style>
  </>
);

Page.getInitialProps = async ({ req }) => {
  console.log("Page.getInitialProps");
  const res = await axios.get("https://api.github.com/repos/vercel/next.js");
  const { data } = res;
  const { stargazers_count: stars } = data;
  return { stars };
};

export default Page;
