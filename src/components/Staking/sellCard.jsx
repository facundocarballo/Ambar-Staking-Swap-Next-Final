import React from "react";
import {
  VStack,
  HStack,
  Spacer,
  Box,
  Text,
  Button,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
} from "@chakra-ui/react";
import { useProvider } from "@/src/context";
import {
  AMBAR_IMAGE,
  BNB_IMAGE,
  buildTransaciont,
  buildTransacion_WithNativePayment,
  BUSD_IMAGE,
  USDT_IMAGE,
} from "@/src/web3/funcs";
import { Spinner } from "react-bootstrap";

export const StakingSellCard = ({ info, idx }) => {
  // Attributes
  // Context
  const {
    BeginnerPlan,
    StandarPlan,
    ExpertPlan,
    BusinessPlan,
    PremiumPlan,
    ExecutivePlan,
    ERC20,
    wallet,
    update_plan,
  } = useProvider();
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState("");

  const [busdSelected, setBusdSelected] = React.useState(false);
  const [busdApprove, setBusdApprove] = React.useState(false);

  const [usdtSelected, setUsdtSelected] = React.useState(false);
  const [usdtApprove, setUsdtApprove] = React.useState(false);

  const [bnbSelected, setBnbSelected] = React.useState(false);

  const [ambarSelected, setAmbarSelected] = React.useState(false);
  const [ambarApprove, setAmbarApprove] = React.useState(false);
  // Methods
  const getCorrectPlan = () => {
    switch (idx) {
      case 0:
        return BeginnerPlan;
      case 1:
        return StandarPlan;
      case 2:
        return ExpertPlan;
      case 3:
        return BusinessPlan;
      case 4:
        return PremiumPlan;
      case 5:
        return ExecutivePlan;
    }
  };
  const getERC20Contract = () => {
    if (busdSelected) return ERC20.BUSD;
    if (usdtSelected) return ERC20.USDT;
    return ERC20.AMBAR;
  };
  const handleSetApprove = () => {
    if (busdSelected) {
      setBusdApprove(true);
      return;
    }

    if (usdtSelected) {
      setUsdtApprove(true);
      return;
    }

    if (ambarSelected) {
      setAmbarApprove(true);
      return;
    }
  };
  const handleApproveERC20 = async () => {
    const Plan = getCorrectPlan();
    const Coin = getERC20Contract();
    const amount_wei = web3.utils.toWei(amount, "ether");
    const data = await Coin.contract.methods
      .approve(Plan.address, amount_wei)
      .encodeABI();
    const params = await buildTransaciont(wallet, Coin.address, data);

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [params],
      })
      .then((res) => {
        setLoading(true);
        const interval = setInterval(() => {
          web3.eth.getTransactionReceipt(res, (err, rec) => {
            if (rec) {
              handleSetApprove();
              clearInterval(interval);
              setLoading(false);
            }

            if (err) {
              clearInterval(interval);
              console.log("ERROR: ", err);
            }
          });
        }, 500);
      });
  };
  const handleBuyPlan = async () => {
    const Plan = getCorrectPlan();
    const amount_wei = web3.utils.toWei(amount, "ether");
    let params = null;
    if (bnbSelected) {
      const data = await Plan.contract.methods.invest_bnb_direct().encodeABI();
      params = await buildTransacion_WithNativePayment(
        wallet,
        Plan.address,
        data,
        amount_wei
      );
    } else {
      const Coin = getERC20Contract();
      const data = await Plan.contract.methods
        .invest_erc20_direct(amount_wei, Coin.address)
        .encodeABI();
      params = await buildTransaciont(wallet, Plan.address, data);
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
              await update_plan(idx, Plan);
              setLoading(false);
            }

            if (err) {
              clearInterval(interval);
              console.log("ERROR: ", err);
            }
          });
        }, 500);
      });
  };
  const handleSelectBusd = () => {
    setBnbSelected(false);
    setUsdtSelected(false);
    setAmbarSelected(false);
    setBusdSelected(!busdSelected);
  };
  const handleSelectUsdt = () => {
    setBnbSelected(false);
    setBusdSelected(false);
    setAmbarSelected(false);
    setUsdtSelected(!usdtSelected);
  };
  const handleSelectBnb = () => {
    setUsdtSelected(false);
    setBusdSelected(false);
    setAmbarSelected(false);
    setBnbSelected(!bnbSelected);
  };
  const handleSelectAmbar = () => {
    setUsdtSelected(false);
    setBusdSelected(false);
    setBnbSelected(false);
    setAmbarSelected(!ambarSelected);
  };

  const isOutOfRange = () => {
    if (amount == "") return false;
    if (bnbSelected) {
      if (Number(amount) < Number(info.minBNB)) return true;
      if (Number(amount) > Number(info.maxBNB)) return true;
      return false;
    }
    if (Number(amount) < Number(info.minDeposit)) return true;
    if (Number(amount) > Number(info.maxDeposit)) return true;
    return false;
  };

  const isDisabled_min_one_erc20_selected = () => {
    return !(busdSelected || ambarSelected || bnbSelected || usdtSelected);
  };

  const isERC20 = () => {
    return busdSelected || usdtSelected || ambarSelected;
  };

  const isApprove = () => {
    if (busdSelected && busdApprove) return true;
    if (usdtSelected && usdtApprove) return true;
    if (ambarSelected && ambarApprove) return true;
    return false;
  };

  const getImage = () => {
    if (busdSelected) return BUSD_IMAGE;
    if (usdtSelected) return USDT_IMAGE;
    if (bnbSelected) return BNB_IMAGE;
    return AMBAR_IMAGE;
  };

  // Component
  return (
    <VStack>
      <VStack
        bg="gray.200"
        border="1px solid #fff"
        borderRadius={16}
        w="350px"
        minH="550px"
      >
        <VStack bg="#7645D9" borderRadius="16px 16px 1px 1px" w="full">
          <Box h="5px" />
          <HStack w="full">
            <Box w="5px" />
            <VStack>
              <HStack>
                <Box w="1px" />
                <Text>{info.title}</Text>
              </HStack>
              <HStack>
                <Box w="1px" />
                <Text fontSize="10px" color="gray.400">
                  {info.description}
                </Text>
              </HStack>
            </VStack>
            <Spacer />
            <Image
              src={getImage()}
              alt="imgToken"
              boxSize="55px"
              bg="white"
              borderRadius={360}
            />
            <Box w="5px" />
          </HStack>
          <Box h="10px" />
        </VStack>
        <Box h="10px" />
        <HStack w="full">
          <Box w="5px" />
          <VStack
            borderRadius={16}
            border="1px solid #ccc"
            w="full"
          >
            <Box h="10px" />

            <HStack w="full">
              <Box w="5px" />
              <Text color="black">Daily Interes:</Text>
              <Spacer />
              <Text color="black">{info.interesRate}</Text>
              <Box w="5px" />
            </HStack>

            <HStack w="full">
              <Box w="5px" />
              <Text color="black">Total Return</Text>
              <Spacer />
              <Text color="black">{info.totalReturn}</Text>
              <Box w="5px" />
            </HStack>

            <Box h="10px" />
          </VStack>
          <Box w="5px" />
        </HStack>
        <Box h="5px" />
        <Text color='black'>Select Currency</Text>
        <HStack w="full">
          <Spacer />
          <Button
            fontSize="15px"
            w="80px"
            h="30px"
            onClick={handleSelectAmbar}
            variant={ambarSelected ? "selected" : "notSelected"}
          >
            AMBAR
          </Button>
          <Button
            fontSize="15px"
            w="80px"
            h="30px"
            onClick={handleSelectBusd}
            variant={busdSelected ? "selected" : "notSelected"}
          >
            BUSD
          </Button>
          <Button
            fontSize="15px"
            w="80px"
            h="30px"
            onClick={handleSelectUsdt}
            variant={usdtSelected ? "selected" : "notSelected"}
          >
            USDT
          </Button>
          <Button
            fontSize="15px"
            w="80px"
            h="30px"
            onClick={handleSelectBnb}
            variant={bnbSelected ? "selected" : "notSelected"}
          >
            BNB
          </Button>
          <Spacer />
        </HStack>
        <Box h="15px" />
        <Text color='black'>Amount of your Investment</Text>
        <Input
          color='black'
          border='1px solid #000'
          value={amount}
          placeholder="Cantidad a Invertir"
          fontSize="15px"
          h="30px"
          w="85%"
          onChange={(e) => setAmount(e.currentTarget.value)}
        />
        <Box h="15px" />
        {loading ? (
          <Spinner />
        ) : isERC20() ? (
          isApprove() ? (
            <Button
              isDisabled={
                isOutOfRange() ||
                wallet == null ||
                isDisabled_min_one_erc20_selected()
              }
              onClick={handleBuyPlan}
              variant="selected"
            >
              Enable Contract
            </Button>
          ) : (
            <Button
              onClick={handleApproveERC20}
              variant="callToAction"
              isDisabled={
                isOutOfRange() ||
                wallet == null ||
                isDisabled_min_one_erc20_selected()
              }
            >
              Approve
            </Button>
          )
        ) : (
          <Button
            isDisabled={
              isOutOfRange() ||
              wallet == null ||
              isDisabled_min_one_erc20_selected()
            }
            onClick={handleBuyPlan}
            variant="selected"
          >
            Enable Contract
          </Button>
        )}
        {isOutOfRange() ? (
          <Text color="red" fontSize="11px">
            This amount doesn't match with this plan.
          </Text>
        ) : null}
        {wallet == null ? (
          <Text color="red" fontSize="11px">
            Please, connect your wallet.
          </Text>
        ) : null}
        <Box h="5px" />
        
        <Accordion color='black' allowToggle w="full">
          <AccordionItem color='black'>
            <h2>
              <AccordionButton>
                <HStack w="full">
                  <Spacer />
                  <Text fontSize='15px' color="black">Details</Text>
                  <AccordionIcon color="black" />
                </HStack>
              </AccordionButton>
            </h2>
            <AccordionPanel color='black'>
              <HStack w="full">
                <Box w="10px" />
                <Text>Min Deposit</Text>
                <Spacer />
                <Text>
                  ${info.minDeposit} | {info.minBNB} BNB
                </Text>
                <Box w="10px" />
              </HStack>
              <HStack w="full">
                <Box w="10px" />
                <Text>Max Deposit</Text>
                <Spacer />
                <Text>
                  ${info.maxDeposit} | {info.maxBNB} BNB
                </Text>
                <Box w="10px" />
              </HStack>
              <HStack w="full">
                <Box w="10px" />
                <Text>Payback</Text>
                <Spacer />
                <Text>YES</Text>
                <Box w="10px" />
              </HStack>
              <HStack w="full">
                <Box w="10px" />
                <Text>Total Return</Text>
                <Spacer />
                <Text>{info.totalReturn}</Text>
                <Box w="10px" />
              </HStack>
              <HStack w="full">
                <Box w="10px" />
                <Text>Term Dias</Text>
                <Spacer />
                <Text>{info.termDays}</Text>
                <Box w="10px" />
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box h="15px" />
      </VStack>
      <Box h="10px" />
    </VStack>
  );
};
