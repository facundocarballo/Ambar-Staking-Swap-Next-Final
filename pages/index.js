import { NavBar } from "@/src/components/NavBar";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Ambarcoin - Decentralized Solutions </title>
          <meta name="author" content="Ambarcoin" />
          <meta
            name="keywords"
            content="ambarcoin, ambar, bnb, eth, btc, bitcoin, criptocurrency,criptomonedas, cryptocurrencies, shiba, binance, dogecoin,"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="We are an open source platform that writes and distributes decentralized applications for a world that lives in constant growth."
          />
          <link rel="shortcut icon" href="./favicon.ico" type="image/svg+xml" />
          <link rel="stylesheet" href="./assets/css/style.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </>

      </Head>
      <NavBar howToBuy={true}/>

      <main>
        <article className="article">
          <section className="section hero" aria-label="hero" data-section="">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">Revolutionizing the crypto world</h1>
                <p className="hero-text">
                  Ambar will be the form of payment for future applications created
                  by us, these applications will be used daily throughout the world.
                </p>
                <a
                  href="https://bscscan.com/token/0x5116af9818423090ca8b361b3fd2d8cd76ef94e5"
                  className="btn btn-primary"
                >
                  Explore BscScan
                </a>
              </div>
              <figure className="banner_img">
                <img
                  src="./assets/images/logoambarhead.png"
                  width={570}
                  height={448}
                  alt="logoambarhead"
                  className="w-100"
                />
              </figure>
            </div>
          </section>
          <section
            className="section instruction"
            aria-label="instruction"
            data-section=""
          >
            <div className="container">
              <h2 className="h2 section-title">The ecosystem</h2>
              <p className="section-text">
                8 utilities combined into a single project.
              </p>
              <ul className="instruction-list">
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/sugarswap.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 1"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">SugarSwap</h3>
                    <p className="card-text">
                      You can have access to a world of cryptos, you can do farming,
                      pool and staking.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/nft.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 2"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">NFT Marketplace</h3>
                    <p className="card-text">
                      The world's first NFT marketplace for digital art related to
                      our games and metaverse.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/game.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 3"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">Multiverse Studio</h3>
                    <p className="card-text">
                      Virtual reality events where users can participate in various
                      events in the multiverse.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/ambarchain.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 4"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">Ambarchain</h3>
                    <p className="card-text">
                      A protocol to build and connect all the tokens and games on
                      our network.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="instruction-list">
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/academy.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 5"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">Crypto Academy</h3>
                    <p className="card-text">
                      A crypto-related online academy where students earn by
                      learning.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/globo.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 6"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">Ambar explorer</h3>
                    <p className="card-text">
                      Our own browser interacting with our token.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/starup.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 7"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">Start-up</h3>
                    <p className="card-text">
                      Ambar will help those people who have brilliant ideas and do
                      not have working capital to carry out your projects.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/fintech.png"
                        width={96}
                        height={96}
                        loading="lazy"
                        alt="Step 8"
                        className="img"
                      />
                    </figure>
                    <h3 className="h3 card-title">Fintech</h3>
                    <p className="card-text">
                      A We integrate with the technologies and applications of daily
                      use, everything will happen with our amber token.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="section about" aria-label="about" data-section="">
            <div className="container">
              <figure className="about-banner">
                <img
                  src="./assets/images/about-banner.png"
                  width={748}
                  height={436}
                  loading="lazy"
                  alt="about banner"
                  className="w-100"
                />
              </figure>
              <div className="about-content">
                <h2 className="h2 section-title">About the Project</h2>
                <p className="section-text">
                  Ambar launched on November 28, 2022 with a single mission,
                  building an entire ecosystem for holders and fans alike. Ambar is
                  built on a foundation of transparency and open communication with
                  the community.
                </p>
                <ul className="section-list">
                  <li className="section-item">
                    <div className="title-wrapper">
                      <ion-icon name="checkmark-circle" aria-hidden="true" />
                      <h3 className="h3 list-title">Liquidity locked</h3>
                    </div>
                  </li>
                  <li className="section-item">
                    <div className="title-wrapper">
                      <ion-icon name="checkmark-circle" aria-hidden="true" />
                      <h3 className="h3 list-title">Transparent team</h3>
                    </div>
                  </li>
                </ul>
                <a href="/ecosystem.html" className="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </section>
          <section className="section about" aria-label="about" data-section="">
            <div className="container">
              <figure className="about-banner">
                <img
                  src="./assets/images/team.png"
                  width={748}
                  height={436}
                  loading="lazy"
                  alt="about banner"
                  className="w-100"
                />
              </figure>
              <div className="about-content">
                <h2 className="h2 section-title">The Team</h2>
                <p className="section-text">
                  Our team takes a proactive approach to keep our investors up to
                  date with our development progress, marketing plans and strategies
                  to take the project to the top of the crypto world.
                </p>
                <a href="/team.html" className="btn btn-primary">
                  Discover the team
                </a>
              </div>
            </div>
          </section>
          <section className="section app" aria-label="app" data-section="">
            <div className="container">
              <div className="app-content">
                <h2 className="h2 section-title">
                  Free Your Money &amp; Invest With Confident
                </h2>
                <p className="section-text">
                  With Ambarcoin, you can be sure your trading skills are matched
                </p>
                <ul className="section-list">
                  <li className="section-item">
                    <div className="title-wrapper">
                      <ion-icon name="checkmark-circle" aria-hidden="true" />
                      <h3 className="h3 item-title">
                        Buy, Sell, And Trade On The Go
                      </h3>
                    </div>
                    <p className="item-text">
                      Manage Your Holdings From Your Mobile Decive
                    </p>
                  </li>
                  <li className="section-item">
                    <div className="title-wrapper">
                      <ion-icon name="checkmark-circle" aria-hidden="true" />
                      <h3 className="h3 item-title">Take Control Of Your Wealth</h3>
                    </div>
                    <p className="item-text">
                      Rest Assured You (And Only You) Have Access To Your Funds
                    </p>
                  </li>
                </ul>
                <div className="app-wrapper">
                  <a href="#">
                    <img
                      src="./assets/images/googleplay.png"
                      width={135}
                      height={40}
                      loading="lazy"
                      alt="get it on google play"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="./assets/images/appstore.png"
                      width={120}
                      height={40}
                      loading="lazy"
                      alt="download on the app store"
                    />
                  </a>
                </div>
              </div>
              <div className="app-banner">
                <img
                  src="./assets/images/app-banner.png"
                  width={526}
                  height={526}
                  loading="lazy"
                  alt="app banner"
                  className="w-100"
                />
              </div>
            </div>
          </section>
          <section
            className="section instruction"
            aria-label="instruction"
            data-section=""
          >
            <div className="container">
              <h2 className="h2 section-title">Where Ambar appears</h2>
              <ul className="instruction-list">
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/poocoin.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 1"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/dextools.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 2"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/coinbrain.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 3"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/pancake.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 4"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/dexscreener.svg"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 3"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/geckot.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 3"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/bogged.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 3"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
                <li>
                  <div className="instruction-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/bscscan.png"
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Step 3"
                        className="img"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      
      <footer className="footer">
        {/* Se ve bien */}
        <div className="footer-top" data-section="">
          <div className="container">
            <div className="footer-brand">
              <h2 className="footer-title">ROADMAP </h2>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Phase 1</p>
              </li>
              <li>
                <a className="footer-link">Launch of our website 🤙</a>
              </li>
              <li>
                <a className="footer-link">Creation of our communities 🤙</a>
              </li>
              <li>
                <a className="footer-link">ICO 🤙</a>
              </li>
              <li>
                <a className="footer-link">
                  Platform design and protocol development 🤙
                </a>
              </li>
              <li>
                <a className="footer-link">Listing on Pancakeswap 🤙</a>
              </li>
              <li>
                <a className="footer-link">Listing on Coinmarketcap</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Phase 2</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Internal Audit
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Manual token burn
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Exchange function
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  SugarSwap
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Build lending capacity to enable performance improvement
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Launch of our NFT Market
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Phase 3</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Launchpad with partners
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Mobile Application Launch
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Game NFTs (METAVERSE)
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blockchain AMBAR
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Launch of our stablecoin
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Development of our web browser
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Phase 4</p>
              </li>
              <li>
                <a className="footer-link">Listing on Coingecko</a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Listing CEX
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Association Visa
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Association with commercial establishments
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">© 2023 Ambarcoin All Rights Reserved</p>
            <ul className="social-list">
              <li>
                <a href="https://twitter.com/ambarcoin" className="social-link">
                  <img
                    src="./assets/images/twitter.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://t.me/ambarofficial" className="social-link">
                  <img
                    src="./assets/images/telegram.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ambarcoin/"
                  className="social-link"
                >
                  <img
                    src="./assets/images/instagram.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@ambarcoindefi"
                  className="social-link"
                >
                  <img
                    src="./assets/images/youtube.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/user/Ambarchain"
                  className="social-link"
                >
                  <img
                    src="./assets/images/reddit.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@ambarcoin" className="social-link">
                  <img
                    src="./assets/images/medium.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Script src="./assets/js/script.js" defer></Script>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>

  );
}
