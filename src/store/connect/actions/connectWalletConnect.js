import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

const connectWalletConnect = async (context) => {
  if (context.state.address == "") {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://eth-mainnet.alchemyapi.io/v2/LbpAfwHG3QcUCsTaEOiKc8t7H3zv1K0r",
          4: "https://eth-mainnet.alchemyapi.io/v2/LbpAfwHG3QcUCsTaEOiKc8t7H3zv1K0r",
        },
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      const web3Provider = new providers.Web3Provider(provider);
      const signer = await web3Provider.getSigner();
      const address = await signer.getAddress();
      context.commit("setSigner", signer);
      console.log(address);
      provider.on("disconnect", () => {
        console.log("disconnected");
        const state = {
          address: "",
          signer: null,
          status: false,
        };
        context.commit("reset", state);
      });

      provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
      });

      // Subscribe to chainId change
      provider.on("chainChanged", (chainId) => {
        console.log(chainId);
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default connectWalletConnect;
