import { useRouter } from "next/router";
import Head from "../../../components/head";
import Nav from "../../../components/nav";

const Blog = () => {
  const router = useRouter();
  const { query } = router;
  const { someprop, id } = query;

  return (
    <>
      <div className="hero">
        <Head title={someprop} />
        <Nav />

        <h1>{`Blog Post ID: ${id}`}</h1>
        <p>Page name: {someprop}</p>
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

export default Blog;
