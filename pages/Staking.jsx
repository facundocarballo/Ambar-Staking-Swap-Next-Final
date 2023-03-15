import React from "react";
import { NavBar } from "@/src/components/NavBar";
import { VStack, Box, Heading, Text } from "@chakra-ui/react";
import { StakingView } from "@/src/components/Staking/view";
import Head from "next/head";

const Staking = () => {
  // Attributes
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);
  // Context
  // Methods
  // Component
  return isBrowser ? (
    <div className="fc">
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar howToBuy={false} home={false} ecosystem={false} team={false} swap={false} staking={true} />
      <VStack>
      <Box h="120px" />
        <Heading color='black'>AMBAR STAKING</Heading>
        <Text color='gray.400'>Stake and earn rewards on this tokens</Text>
        <Box h="15px" />
        <StakingView />
      </VStack>
    </div>
  ) : null;
};

export default Staking;
