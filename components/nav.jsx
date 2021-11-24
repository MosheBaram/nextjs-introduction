import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/Page">
          <a>Page</a>
        </Link>
      </li>
      <li>
        <Link href="/CallApi">
          <a>Call API</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/123456/Tweakers%20Developers%20Summit">
          <a>Blog Post 1</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/989898/Yet%20Another%20Blog%20Post">
          <a>Blog Post 2</a>
        </Link>
      </li>
      <li>
        <Link href="/rnm/2">
          <a>MR</a>
        </Link>
      </li>
      <li>
        <Link href="/rnm/265">
          <a>PR</a>
        </Link>
      </li>
      <li>
        <Link href={`/rnm/random`}>
          <a>Random</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
