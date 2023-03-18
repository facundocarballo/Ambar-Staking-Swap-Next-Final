import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useProvider } from '../context';
import { getBNBCurrentPrice } from '../web3/funcs/coingecko';
import { Image, Spinner, Text } from '@chakra-ui/react';
import { AMBAR_IMAGE } from '../web3/funcs';

export const NavBar = ({howToBuy, home, ecosystem, team, swap, staking }) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const { loadContractData, wallet, bnbPrice, PAIR, setBnbPrice, setPAIR } = useProvider();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    if (bnbPrice == null) {
      getBNBCurrentPrice().then((obj) => {
        setBnbPrice(obj.bnb_usd);
        setPAIR(obj.pair);
      });
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleConnect = async () => {
    setLoading(true);
    await loadContractData();
    setLoading(false);
  };

  const getCleanAddress = (address) => {
    const firstPart = String(address).substring(0, 4);
    const secondPart = String(address).substring((String(address).length - 5), (String(address).length - 1));

    return firstPart + "..." + secondPart;
  };

  return (
    <header className="header" data-header="">
      <div className="container">
        <Link href="/" className="logo">
          <img
            src="./assets/images/logo.png"
            width={180}
            height={180}
            alt="ambar logo"
          />
        </Link>
        <nav className={active ? "navbar active" : "navbar"} data-navbar="">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/" className={home ? "navbar-link active" : "navbar-link"} data-nav-link="">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/ecosystem"
                className={ecosystem ? "navbar-link active" : "navbar-link"}
                data-nav-link=""
              >
                Ecosystem
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/team" className={team ? "navbar-link active" : "navbar-link"} data-nav-link="">
                Team
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/Swap" className={swap ? "navbar-link active" : "navbar-link"} data-nav-link="">
                Swap
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/Staking" className={staking ? "navbar-link active" : "navbar-link"} data-nav-link="">
                Staking
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="https://ambarcoin.gitbook.io/ambar"
                className="navbar-link"
                data-nav-link=""
              >
                Whitepaper
              </Link>
            </li>
          </ul>
        </nav>
        {
              bnbPrice == null ? null : <>
                <Image 
                src={AMBAR_IMAGE}
                alt='ambar-img'
                boxSize='50px'
                />
                <Text color='black'>{(Number(bnbPrice) * PAIR.price).toFixed(6)} USD</Text>
              </>
            }
        <button
          className={active ? "nav-toggle-btn active" : "nav-toggle-btn"}
          aria-label="Toggle menu"
          data-nav-toggler=""
          onClick={() => setActive(!active)}
        >
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </button>
        {
          howToBuy ?
            <Link href="/buy" class="btn btn-outline">How to buy</Link> 
          :
            wallet == null ?
              loading ? <Spinner color='black' /> : <Link class="btn btn-outline" onClick={handleConnect}>Connect Wallet</Link>
            : <Link class="btn btn-outline">{getCleanAddress(wallet)}</Link>
        }
      </div>
    </header>
  )
}


/*

<Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="Swap" className={activeLink === 'swap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Swap</Nav.Link>
              <Nav.Link href="Staking" className={activeLink === 'staking' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Staking</Nav.Link>
              <Nav.Link href="Market " className={activeLink === 'market' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Market</Nav.Link>
              <Nav.Link href="https://ambarcoin.gitbook.io/ambar" className={activeLink === 'whitepaper' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whitepaper')}>Whitepaper</Nav.Link>
            </Nav>
            {
              bnbPrice == null ? null : <>
                <Image 
                src={AMBAR_IMAGE}
                alt='ambar-img'
                boxSize='50px'
                />
                <Text>{(Number(bnbPrice) * PAIR.price).toFixed(6)} USD</Text>
              </>
            }
            <span className="navbar-text">
              {
                wallet == null ?
                  <button onClick={handleConnect} className="vvd"><span>Connect wallet</span></button>
                  : loading ? 
                  <Spinner /> 
                  : <button className="vvd"><span>{getCleanAddress(wallet)}</span></button>
              }
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>

*/