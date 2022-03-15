import { ethers } from "ethers";
const { ethereum } = window;

const autoConnectMetamask = async ({ commit }) => {
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log("Connected", accounts[0]);
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = await provider.getSigner();
  commit("setStatus", true);
  commit("setAddress", accounts[0]);
  commit("setSigner", signer);
  ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length < 1) {
      const state = {
        address: "",
        signer: null,
        status: false,
      };
      commit("setStatus", false);
      console.log("disconnected");
      commit("reset", state);
    }
  });
};
export default autoConnectMetamask;
