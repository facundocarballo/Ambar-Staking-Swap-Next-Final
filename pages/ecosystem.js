import Head from "next/head";
import { NavBar } from "@/src/components/NavBar";
import Script from "next/script";

export default function Ecosystem() {
    return (
        <>
            <>
                <Head>
                    <>
                        <meta charSet="UTF-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Ecosystem - Decentralized Solutions </title>
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
                    <article>
                        <section className="section hero" aria-label="hero" data-section="">
                            <div className="container">
                                <div className="hero-content">
                                    <h1 className="h1 hero-title">A user-based ecosystem</h1>
                                    <p className="hero-text">
                                        The AMBAR ecosystem focuses on covering all the needs of crypto
                                        investors, players and fans of our NFTs by creating multiple
                                        utilities.
                                    </p>
                                    <a href="/buy.html" className="btn btn-primary">
                                        How to buy AMBAR
                                    </a>
                                </div>
                                <figure className="hero-banner">
                                    <img
                                        src="./assets/images/aca.png"
                                        width={570}
                                        height={448}
                                        alt="logoaca"
                                        className="w-100"
                                    />
                                </figure>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/sugarswap.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">SugarSwap</h2>
                                    <p className="section-text">
                                        You can have access to a world of cryptos, you can do farming,
                                        pool and staking.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Swap</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Staking</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Farms</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Pools</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Liquidity</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/nftmarketplace.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">NFT Marketplace</h2>
                                    <p className="section-text">
                                        The world's first NFT marketplace for digital art related to our
                                        games and metaverse.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Buy and sell NFTs</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Anime art</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">AMBAR Chain</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/multiverse.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">Multiverse Studio</h2>
                                    <p className="section-text">
                                        Virtual reality events where users can participate in various
                                        events in the multiverse.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Celebrities vs Fans</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">VR Events</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Anime related events</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/blockchain27.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">AMBARCHAIN</h2>
                                    <p className="section-text">
                                        A protocol to build and connect all the tokens and games on our
                                        network.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Secure</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Scalable</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Ultra Speed</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/academy2.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">Crypto Academy</h2>
                                    <p className="section-text">
                                        A crypto-related online academy where students earn by learning.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Deep crypto courses</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Earn while learning</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Follow-Up exams</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/globo.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">Ambar Explorer</h2>
                                    <p className="section-text">
                                        Our own browser interacting with our token.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Token earnings for browsing</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Private browsing</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Ultra speed</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/startup2.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">Start-up</h2>
                                    <p className="section-text">
                                        Ambar will help those people who have brilliant ideas and do not
                                        have working capital to carry out your projects.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Start your own project</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Funds account</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section about" aria-label="about" data-section="">
                            <div className="container">
                                <figure className="about-banner">
                                    <img
                                        src="./assets/images/fintech2.png"
                                        width={136}
                                        height={136}
                                        loading="lazy"
                                        alt="about banner"
                                        className="w-100"
                                    />
                                </figure>
                                <div className="about-content">
                                    <h2 className="h2 section-title">Fintech</h2>
                                    <p className="section-text">
                                        A We integrate with the technologies and applications of daily
                                        use, everything will happen with our amber token.
                                    </p>
                                    <ul className="section-list">
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Decentralized applications</h3>
                                            </div>
                                        </li>
                                        <li className="section-item">
                                            <div className="title-wrapper">
                                                <ion-icon name="checkmark-circle" aria-hidden="true" />
                                                <h3 className="h3 list-title">Applications of daily use</h3>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">
                                        Explore More
                                    </a>
                                </div>
                            </div>
                        </section>
                        <footer className="footer">
                            <div className="footer-top" data-section="">
                                <div className="container">
                                    <div className="footer-brand"></div>
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
                    </article>
                </main>

                <Script src="./assets/js/script.js" defer />
                <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
                <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
            </>

        </>
    );
}