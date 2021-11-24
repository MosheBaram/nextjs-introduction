import Head from "../components/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";

const Page = props => (
  <>
    <div className="hero">
      <Head title="Page" />
      <Nav />
      Next stars: {props?.stars ?? ":-("}
      {console.log(`Render Page: ${props?.stars}`)}
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
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  const stars = json.stargazers_count;
  return { stars };
};

export default Page;
