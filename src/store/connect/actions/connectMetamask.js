import { ethers } from "ethers";
const connectMetamask = async (context) => {
  console.log("mnetamask");
  if (context.state.address == "") {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = await provider.getSigner();
      console.log("signer", signer);
      context.commit("setSigner", signer);
      context.commit("setAddress", accounts[0]);
      ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length < 1) {
          const state = {
            address: "",
            signer: null,
            status: false,
          };
          console.log("disconnected");
          context.commit("setStatus", false);
          context.commit("reset", state);
          console.log(state);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export default connectMetamask;
