import { NavBar } from "@/src/components/NavBar";
import Head from "next/head";
import Script from "next/script";

export default function Buy() {
    return (
        <>
            <Head>

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

            </Head>

            <NavBar howToBuy={true} />
            <main>
                <article>
                    <section className="section hero" aria-label="hero" data-section="">
                        <div className="container">
                            <div className="hero-content">
                                <h1 className="h1 hero-title">How to buy</h1>
                                <p className="hero-text">
                                    You can buy decentralized Ambar on Pancakeswap and Poocoin or choose
                                    one of the exchanges it is listed on.
                                </p>
                                <a href="" className="btn btn-primary">
                                    Scroll to see options
                                </a>
                            </div>
                            <figure className="hero-banner">
                                <img
                                    src="./assets/images/crypto.png"
                                    width={570}
                                    height={448}
                                    alt="logocrypto"
                                    className="w-100"
                                />
                            </figure>
                        </div>
                    </section>
                    <section className="section about" aria-label="about" data-section="">
                        <div className="container">
                            <figure className="about-banner">
                                <img
                                    src="./assets/images/pancakeswap.png"
                                    width={116}
                                    height={116}
                                    loading="lazy"
                                    alt="about banner"
                                    className="w-100"
                                />
                            </figure>
                            <div className="about-content">
                                <h2 className="h2 section-title">Buy on Pancakeswap</h2>
                                <p className="section-text">
                                    You can have access to a world of cryptos, you can do farming, pool
                                    and staking.
                                </p>
                                <ul className="section-list">
                                    <li className="section-item">
                                        <div className="title-wrapper">
                                            <ion-icon name="checkmark-circle" aria-hidden="true" />
                                            <h3 className="h3 list-title">
                                                Create a Wallet (e.g Metamask)
                                            </h3>
                                        </div>
                                    </li>
                                    <li className="section-item">
                                        <div className="title-wrapper">
                                            <ion-icon name="checkmark-circle" aria-hidden="true" />
                                            <h3 className="h3 list-title">Fund your wallet with BNB</h3>
                                        </div>
                                    </li>
                                    <li className="section-item">
                                        <div className="title-wrapper">
                                            <ion-icon name="checkmark-circle" aria-hidden="true" />
                                            <h3 className="h3 list-title">
                                                Open Pancakeswap on your browser
                                            </h3>
                                        </div>
                                    </li>
                                    <li className="section-item">
                                        <div className="title-wrapper">
                                            <ion-icon name="checkmark-circle" aria-hidden="true" />
                                            <h3 className="h3 list-title">
                                                Paste the AMBAR contract address
                                            </h3>
                                        </div>
                                    </li>
                                    <li className="section-item">
                                        <div className="title-wrapper">
                                            <ion-icon name="checkmark-circle" aria-hidden="true" />
                                            <h3 className="h3 list-title">Swap BNB for AMBAR</h3>
                                        </div>
                                    </li>
                                </ul>
                                <a
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x5116af9818423090ca8b361b3fd2d8cd76ef94e5"
                                    className="btn btn-primary"
                                >
                                    Buy on Pancakeswap
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

            <Script src="./assets/js/script.js" defer></Script>

            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </>

    );
}