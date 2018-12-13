import Link from 'next/link';
import Head from 'next/head'

export default () => (
  <div className="column col-12">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"/>
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"/>
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"/>
    </Head>
    <header className="navbar">
      <section className="navbar-section">
        <Link href="/"><a className="btn btn-link">Home</a></Link>
        <Link href="/about"><a className="btn btn-link">About</a></Link>
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search"/>
          <button className="btn btn-primary input-group-btn">Search</button>
        </div>
      </section>
    </header>
  </div>
);