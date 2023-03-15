import React from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Divider,
  Spacer,
  Input,
  Button,
  Image,
  Circle,
} from "@chakra-ui/react";
import { SelectCoin } from "./selectCoin";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useProvider } from "@/src/context";
import {
  buildTransaciont,
  buildTransacion_WithNativePayment,
  Contract_Ambar_ERC20_Address,
  Contract_Router_Address,
  Contract_WBNB_Address,
} from "@/src/web3/funcs";

export const SwapCard = () => {
  // Attributes
  const [amountToSend, setAmountToSend] = React.useState("0.0");
  const [amountToReceive, setAmountToReceive] = React.useState("0.0");
  const [isAmbar, setIsAmbar] = React.useState(false);
  const [approveAmbar, setApproveAmbar] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  // Context
  const {
    PAIR,
    ERC20,
    ContractRouter,
    wallet,
    actual_timestamp,
    update_balances,
  } = useProvider();
  // Methods
  const handleSetAmount = (amount, idx) => {
    if (isAmbar && idx == 0) {
      // Seteamos amountToSend como si fuera Ambar
      setAmountToSend(amount);
      // Obtenemos el valor correspondiente de BNB en base al precio que marque el PAIR
      setAmountToReceive(Number(Number(amount) * PAIR.price).toFixed(9));
      return;
    }
    if (!isAmbar && idx == 0) {
      // Seteamos amountToSend como si fuera BNB
      setAmountToSend(amount);
      // Obtenemos el valor correspondiente de AMBAR en base al precio que marque el PAIR
      setAmountToReceive(Number(Number(amount) / PAIR.price).toFixed(9));
      return;
    }

    if (isAmbar && idx == 1) {
      // Seteamos amountToReceive como si fuera BNB
      setAmountToReceive(amount);
      // Obtenemos el valor correspondiente de AMBAR en base al precio que marque el PAIR
      setAmountToSend(Number(Number(amount) / PAIR.price).toFixed(9));
      return;
    }
    if (!isAmbar && idx == 1) {
      // Seteamos amountToReceive como si fuera Ambar
      setAmountToSend(amount);
      // Obtenemos el valor correspondiente de BNB en base al precio que marque el PAIR
      setAmountToReceive(Number(Number(amount) * PAIR.price).toFixed(9));
      return;
    }
  };

  const handleChangeCoins = () => {
    const aux = amountToSend;
    setAmountToSend(amountToReceive);
    setAmountToReceive(aux);
    setIsAmbar(!isAmbar);
  };

  const handleSwap = async () => {
    const amount_receive_wei = web3.utils.toWei(amountToReceive, "ether");
    const amount_send_wei = web3.utils.toWei(amountToSend, "ether");
    const addresses = isAmbar
      ? [Contract_Ambar_ERC20_Address, Contract_WBNB_Address]
      : [Contract_WBNB_Address, Contract_Ambar_ERC20_Address];
    let data = null;
    let params = null;
    if (!isAmbar) {
      // BNB por AMBAR
      data = await ContractRouter.methods
        .swapExactETHForTokens(
          amount_receive_wei,
          addresses,
          wallet,
          actual_timestamp + 1500 // Agregamos bastantes bloques para adelante para que el deadline sea mayor al bloque actual en donde se ejecuta el codigo del contrato
        )
        .encodeABI();
      params = await buildTransacion_WithNativePayment(
        wallet,
        Contract_Router_Address,
        data,
        amount_send_wei
      );
    } else {
      // AMBAR por BNB
      data = await ContractRouter.methods
        .swapExactTokensForETH(
          amount_send_wei,
          String(Number(amount_receive_wei) * 0.9), // Tenemos que poner un poco menos para recibir, porque sino sale como fondos insuficientes. Debe ser por lo mismo que ponemos el precio un poco mas alto del que en realidad es. Para poder repartir esos beneficios con las personas que participan de la Pool de Liquidez.
          addresses,
          wallet,
          actual_timestamp + 1500 // Agregamos bastantes bloques para adelante para que el deadline sea mayor al bloque actual en donde se ejecuta el codigo del contrato
        )
        .encodeABI();
      params = await buildTransaciont(wallet, Contract_Router_Address, data);
    }

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [params],
      })
      .then((res) => {
        setLoading(true);
        const interval = setInterval(async () => {
          web3.eth.getTransactionReceipt(res, async (err, rec) => {
            if (rec) {
              clearInterval(interval);
              setLoading(false);
              update_balances();
            }

            if (err) {
              clearInterval(interval);
              console.log("ERROR: ", err);
            }
          });
        }, 500);
      });
  };

  const handleApprove = async () => {
    const amount_send_wei = web3.utils.toWei(amountToSend, "ether");
    const data = await ERC20.AMBAR.contract.methods
      .approve(Contract_Router_Address, amount_send_wei)
      .encodeABI();
    const params = await buildTransaciont(
      wallet,
      Contract_Ambar_ERC20_Address,
      data
    );

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [params],
      })
      .then((res) => {
        setLoading(true);
        const interval = setInterval(async () => {
          web3.eth.getTransactionReceipt(res, async (err, rec) => {
            if (rec) {
              clearInterval(interval);
              setLoading(false);
              setApproveAmbar(true);
            }

            if (err) {
              clearInterval(interval);
              console.log("ERROR: ", err);
            }
          });
        }, 500);
      });
  };

  // Component
  return wallet == null ? (
    <>
      <Box h="190px" />
      <Image
        src="https://i.ibb.co/jgR5nn6/wallet.png"
        alt="wallet"
        boxSize="150px"
      />
      <Text color="black">Please Connect your Wallet.</Text>
    </>
  ) : (
    <VStack
      minW="350px"
      bg="gray.200"
      borderRadius={16}
      border="2px"
      borderColor="white"
    >
      <Box h="10px" />
      <HStack w="full">
        <Box w="10px" />
        <Text color="black" fontWeight="bold">
          Swap
        </Text>
        <Spacer />
      </HStack>
      <HStack w="full">
        <Box w="10px" />
        <Text color="gray.500">Trade tokens in an instant</Text>
        <Spacer />
      </HStack>
      <Divider />
      <SelectCoin isAmbar={isAmbar} />
      <Input
        value={amountToSend}
        disabled={PAIR == null}
        onChange={(e) => handleSetAmount(e.currentTarget.value, 0)}
        borderRadius={15}
        fontSize="15px"
        color="black"
        bg="#EAF8FF"
        w="80%"
        h="100px"
      />
      <Box h="5px" />
      <Circle bg="#EAF8FF" w="50px" h="50px" onClick={handleChangeCoins}>
        <Image
          src="https://i.ibb.co/yN9mQCR/exchange-2-verde-removebg-preview.png"
          alt="exchange-verde"
          boxSize="30px"
          transform="rotate(90deg)"
        />
      </Circle>
      <SelectCoin isAmbar={!isAmbar} />
      <Input
        value={amountToReceive}
        disabled={PAIR == null}
        onChange={(e) => handleSetAmount(e.currentTarget.value, 1)}
        borderRadius={15}
        fontSize="15px"
        color="black"
        bg="#EAF8FF"
        w="80%"
        h="100px"
      />
      <Box h="10px" />
      {!isAmbar ? (
        <Button
          fontSize="20px"
          w="125px"
          h="30px"
          variant="swap"
          onClick={handleSwap}
        >
          SWAP
        </Button>
      ) : approveAmbar ? (
        <Button variant="swap" onClick={handleSwap}>
          SWAP
        </Button>
      ) : (
        <Button variant="callToAction" onClick={handleApprove}>
          Approve
        </Button>
      )}
      <Box h="10px" />
    </VStack>
  );
};
