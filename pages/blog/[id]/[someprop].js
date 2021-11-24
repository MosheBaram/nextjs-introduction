import { useRouter } from "next/router";
import Head from "../../../components/head";
import Nav from "../../../components/nav";

export default function blog() {
  const router = useRouter();

  return (
    <>
      <div className="hero">
        <Head title={router.query?.someprop} />
        <Nav />

        <h1>{`Blog Post ID: ${router.query?.id}`}</h1>
        <p>Page name: {router.query?.someprop}</p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
