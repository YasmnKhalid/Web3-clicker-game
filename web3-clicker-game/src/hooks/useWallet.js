import { useState, useEffect } from "react";
import { ethers } from "ethers";  

const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  async function checkWalletConnection() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum); // ✅ Correct for Ethers v6
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Error checking wallet connection", error);
      }
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum); // ✅ Correct for Ethers v6
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("User rejected the request", error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  }

  return { walletAddress, connectWallet };
};

export default useWallet;
