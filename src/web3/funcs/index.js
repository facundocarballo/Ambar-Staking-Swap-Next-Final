import { Beginner, Business, Executive, Expert, Premium, Standar } from "@/src/components/Staking/data";
import Web3 from "web3";
import AmbarJSON from '../ABI/Ambar.json';
import AmbarPlanJSON from '../ABI/AmbarPlan.json';
import ERC20_JSON from '../ABI/ERC20.json';
import PAIR_JSON from "../ABI/Pair.json";
import ROUTER_JSON from '../ABI/Router.json';
import { getBNBCurrentPrice } from "./coingecko";
import { getPairInfo } from "./pair";
import { getPlanData } from "./plans";
import { getAllTokensInfo } from "./tokens";

export const BSC_MAINNET_RPC = "https://bsc-dataseed1.binance.org/"; //"https://data-seed-prebsc-1-s1.binance.org:8545/";

// 97 -> Testnet
// 56 -> Mainnet
export const CHAIN_ID = 56; //97;

// const { ethereum, web3 } = window;


const Contract = require('web3-eth-contract');

Contract.setProvider(BSC_MAINNET_RPC);

// Owner Address
export const Owner_Address = "0xF1d298e09B0e50a37ba30A6E510314524aCAcfAa";

// Contract Address
export const Contract_Beginner_Plan_Address = "0xD3995aB5DaC6E457C3A3dCCe28117f1AB92b0AE8"; //"0xf98C14027bA102cb8044CE18A871A099E1e5cBAd";
export const Contract_Standard_Plan_Address = "0x975ebC3DE01A7987f0CE7B48c709cf48BF6535d2"; //"0x8Ab5Aa74e60a3f551158e1C8699426214c4C44D8";
export const Contract_Expert_Plan_Address = "0x954a92FBBd347eE95efD7b8c92581eE815cE551b"; //"0xE025148df3972d4c97D19B4c70643D45d2124A23";
export const Contract_Business_Plan_Address = "0x5E64f152547bC0A585fD99030dee28078c5A91E2"; //"0xE6086C4357257Fb9B506C03Da8aC9345C32F3c40";
export const Contract_Premium_Plan_Address = "0xf4784114181F6cd7f417D233b3E2cCd3034F0A5a"; //"0x4741AD7B7e10F770d88e96C74b2be708E0E25c90";
export const Contract_Executive_Plan_Address = "0xBda1fbF645807d40a42ad11AD518b546F8e5A9c7"; //"0x30a126387F39C09056dC9C138bcC897e9BC2a831";

// ERC20's
export const Contract_Busd_Address = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; //"0x2E50a44F2C744E2BcDe025028622d6349115D7Bf";
export const Contract_Usdt_Address = "0x55d398326f99059fF775485246999027B3197955"; //"0x24DA85920bbF1be872632aF232ac34a2C5580Ef6";
export const Contract_WBNB_Address = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
export const Contract_Ambar_ERC20_Address = "0x5116AF9818423090cA8b361b3fD2D8Cd76ef94E5"; //"0x0bcaEaB8160482801D5bC3f57ee5ED5caB2458ae";

// PancakeSwap
export const Contract_Pair_AMBAR_BNB_Address = "0xA2C9147Bb87A117340F0cf7f9789DF3722b0fc1d"; //"0xFaB8aaa174574ca62eA164F968BaBeea7e0190c9";
export const Contract_Router_Address = "0x10ED43C718714eb63d5aA57B78B54704E256024E"; //"0xD99D1c33F9fC3444f8101754aBC46c52416550D1";

// IMAGES
export const BUSD_IMAGE = "https://i.ibb.co/3C00M3S/busd.png";
export const USDT_IMAGE = "https://i.ibb.co/tXBk12n/usdt.png";
export const AMBAR_IMAGE = "https://i.ibb.co/B29Kxfp/ambar-image.png";
export const BNB_IMAGE = "https://i.ibb.co/5nrV3wY/bnb.png";

export const loadBasicData = async () => {
    await loadWeb3();

    // Investment Contracts
    const ContractBeginnerPlan = new Contract(AmbarPlanJSON.output.abi, Contract_Beginner_Plan_Address);
    const ContractStandardPlan = new Contract(AmbarPlanJSON.output.abi, Contract_Standard_Plan_Address);
    const ContractExpertPlan = new Contract(AmbarPlanJSON.output.abi, Contract_Expert_Plan_Address);
    const ContractBusinessPlan = new Contract(AmbarPlanJSON.output.abi, Contract_Business_Plan_Address);
    const ContractPremiumPlan = new Contract(AmbarPlanJSON.output.abi, Contract_Premium_Plan_Address);
    const ContractExecutivePlan = new Contract(AmbarPlanJSON.output.abi, Contract_Executive_Plan_Address);

    // ERC20 Contracts
    const ContractBUSD = new Contract(ERC20_JSON.output.abi, Contract_Busd_Address);
    const ContractUSDT = new Contract(ERC20_JSON.output.abi, Contract_Usdt_Address);
    const ContractAmbarERC20 = new Contract(ERC20_JSON.output.abi, Contract_Ambar_ERC20_Address);

    // PancakeSwap Contract
    const ContractPair_AMBAR_BNB = new Contract(PAIR_JSON.output.abi, Contract_Pair_AMBAR_BNB_Address);
    const ContractRouter = new Contract(ROUTER_JSON.output.abi, Contract_Router_Address);

    const { bnb_usd } = await getBNBCurrentPrice();
    
    const PAIR = await getPairInfo(ContractPair_AMBAR_BNB);

    const wallet = await getAccount();
    const chainID = await window.web3.eth.getChainId();

    const actual_timestamp = await getActualTimestamp();

    const ERC20 = await getAllTokensInfo(ContractBUSD, ContractUSDT, ContractAmbarERC20, wallet, 'ether');

    const BeginnerPlan = await getPlanData(
        ContractBeginnerPlan,
        Contract_Beginner_Plan_Address,
        wallet,
        Beginner
    );

    const StandarPlan = await getPlanData(
        ContractStandardPlan,
        Contract_Standard_Plan_Address,
        wallet,
        Standar
    );

    const ExpertPlan = await getPlanData(
        ContractExpertPlan,
        Contract_Expert_Plan_Address,
        wallet,
        Expert
    );

    const BusinessPlan = await getPlanData(
        ContractBusinessPlan,
        Contract_Business_Plan_Address,
        wallet,
        Business
    );

    const PremiumPlan = await getPlanData(
        ContractPremiumPlan,
        Contract_Premium_Plan_Address,
        wallet,
        Premium
    );

    const ExecutivePlan = await getPlanData(
        ContractExecutivePlan,
        Contract_Executive_Plan_Address,
        wallet,
        Executive
    );


    return {
        wallet,
        chainID,
        BeginnerPlan,
        StandarPlan,
        ExpertPlan,
        BusinessPlan,
        PremiumPlan,
        ExecutivePlan,
        ERC20,
        PAIR,
        ContractRouter,
        actual_timestamp,
        bnbPrice: bnb_usd
    }
};

export const unixToDate = (timestamp) => {
    const d = new Date(Number(timestamp));
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}

export const getSymbolOfERC20 = (address) => {
    switch (address) {
        case Contract_Busd_Address:
            return 'BUSD';
        case Contract_Usdt_Address:
            return 'USDT';
        case Contract_Ambar_ERC20_Address:
            return 'AMBAR';
        default:
            return 'BNB';
    }
};

export const getImageOfERC20 = (address) => {
    switch (address) {
        case Contract_Busd_Address:
            return 'https://i.ibb.co/3C00M3S/busd.png';
        case Contract_Usdt_Address:
            return 'https://i.ibb.co/tXBk12n/usdt.png';
        case Contract_Ambar_ERC20_Address:
            return 'https://i.ibb.co/B29Kxfp/ambar-image.png';
        default:
            return 'https://i.ibb.co/5nrV3wY/bnb.png';
    }
};

export const getActualTimestamp = async () => {
    const currentBlock = await web3.eth.getBlockNumber();

    const block = await web3.eth.getBlock(currentBlock);

    return block.timestamp;
};

export const getAccount = async () => {
    const account = await ethereum.request({ method: 'eth_coinbase' });
    String(account).replaceAll(' ', '');
    return account;
};

export const buildTransaciont = async (addressAccount, to, data) => {
    const nonce = await web3.eth.getTransactionCount(addressAccount);
    const estimateGas = await web3.eth.estimateGas({
        from: addressAccount,
        to: to,
        nonce: nonce,
        data: data
    });
    const gas_price = await web3.eth.getGasPrice();
    return {
        from: addressAccount,
        to: to,
        gas: web3.utils.toHex(estimateGas),
        gasPrice: web3.utils.toHex(gas_price),
        data: data
    };

}

export const buildTransacion_WithNativePayment = async (addressAccount, to, data, msg_value) => {
    const nonce = await web3.eth.getTransactionCount(addressAccount);
    const estimateGas = await web3.eth.estimateGas({
        from: addressAccount,
        to: to,
        value: web3.utils.toHex(msg_value),
        nonce: nonce,
        data: data
    });
    const gas_price = await web3.eth.getGasPrice();
    return {
        from: addressAccount,
        to: to,
        value: web3.utils.toHex(msg_value),
        gas: web3.utils.toHex(estimateGas),
        gasPrice: web3.utils.toHex(gas_price),
        data: data
    };

}

export const getERC20Info = async (Contract, addressAccount, format, contractAddress) => {
    const balanceWEI = await Contract.methods.balanceOf(addressAccount).call();
    const balance = web3.utils.fromWei(balanceWEI, format);

    return {
        contract: Contract,
        address: contractAddress,
        balance: Number(balance).toFixed(2)
    }
}

export const getNativeCryptoInfo = async (wallet, format) => {
    const bnbAmountWEI = await web3.eth.getBalance(wallet);
    const bnbAmount = web3.utils.fromWei(bnbAmountWEI, format);

    return {
        contract: null,
        address: null,
        balance: Number(bnbAmount).toFixed(2)
    }
}

export const loadWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            // await ethereum.enable();
            // Acccounts now exposed
            await ethereum.request({ method: 'eth_requestAccounts' })
        } catch (error) {
            // User denied account access...
            console.log('Error: requiring browser wallet: ', error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */ });
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

};