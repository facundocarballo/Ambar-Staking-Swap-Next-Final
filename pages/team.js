import { NavBar } from "@/src/components/NavBar";
import Head from "next/head";
import Script from "next/script";

export default function Team() {
    return (
        <>
            <Head>
                <>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Team - Decentralized Solutions </title>
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
            <>
            <NavBar howToBuy={true} home={false} ecosystem={false} team={true} swap={false} staking={false} />
                <main>
                    <article>
                        <section className="section hero" aria-label="hero" data-section="">
                            <div className="container">
                                <div className="hero-content">
                                    <h1 className="h1 hero-title">The Team</h1>
                                    <p className="hero-text">
                                        Our team takes a proactive approach to keep our investors up to
                                        date with our development progress and marketing plans.
                                    </p>
                                    <a href="/buy.html" className="btn btn-primary">
                                        How to buy AMBAR
                                    </a>
                                </div>
                                <figure className="hero-banner">
                                    <img
                                        src="./assets/images/team5.png"
                                        width={570}
                                        height={448}
                                        alt="logoteam5"
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
                                <ul className="instruction-list">
                                    <li>
                                        <div className="instruction-card">
                                            <figure className="card-banner">
                                                <img
                                                    src="./assets/images/luis.png"
                                                    width={60}
                                                    height={96}
                                                    loading="lazy"
                                                    alt="Step 1"
                                                    className="img"
                                                />
                                            </figure>
                                            <h3 className="h3 card-title">Luis Sanchez</h3>
                                            <p className="card-text">
                                                Founder and CEO of Ambarcoin. Responsible for project
                                                development and leading.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="instruction-card">
                                            <figure className="card-banner">
                                                <img
                                                    src="./assets/images/manuelregalado.png"
                                                    width={96}
                                                    height={96}
                                                    loading="lazy"
                                                    alt="Step 2"
                                                    className="img"
                                                />
                                            </figure>
                                            <h3 className="h3 card-title">Manuel Regalado</h3>
                                            <p className="card-text">
                                                Controlling and organizing all operational processes.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="instruction-card">
                                            <figure className="card-banner">
                                                <img
                                                    src="./assets/images/mahadi.png"
                                                    width={96}
                                                    height={96}
                                                    loading="lazy"
                                                    alt="Step 3"
                                                    className="img"
                                                />
                                            </figure>
                                            <h3 className="h3 card-title">Mahadi Hassan</h3>
                                            <p className="card-text">Designer</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="instruction-card">
                                            <figure className="card-banner">
                                                <img
                                                    src="./assets/images/arelismedrano.png"
                                                    width={96}
                                                    height={96}
                                                    loading="lazy"
                                                    alt="Step 4"
                                                    className="img"
                                                />
                                            </figure>
                                            <h3 className="h3 card-title">Arelis Medrano</h3>
                                            <p className="card-text">Accounting Manager</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
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
                    </article>
                </main>

                <Script src="./assets/js/script.js" defer />

                <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
                <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
            </>

        </>
    );
}