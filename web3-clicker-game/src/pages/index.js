// src/pages/index.js
import { useState } from 'react';
import useWallet from '../hooks/useWallet';

export default function Home() {
  const { walletAddress, connectWallet } = useWallet();
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Web3 Clicker Game</h1>
      {walletAddress ? (
        <p className="text-green-600">
          Connected: {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)}
        </p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      <div className="flex flex-col items-center space-y-2">
        <p className="text-xl">Score: {score}</p>
        <button onClick={() => setScore(score + 1)}>Click Me!</button>
      </div>
    </div>
  );
}
