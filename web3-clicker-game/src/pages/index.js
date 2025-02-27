import { useState } from "react";
import useWallet from "../hooks/useWallet";
import { Howl } from "howler";
const clickSoundFile = "/click.mp3"; 

export default function Home() {
  const { walletAddress, connectWallet } = useWallet();
  const [score, setScore] = useState(0);

  // Load sound effect
  const clickSound = new Howl({
    src: [clickSoundFile],
  });
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🔥 Web3 Clicker Game 🔥</h1>

      {walletAddress ? (
        <p className="text-green-400 text-lg mb-4">
          Connected: {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all mb-6"
        >
          Connect Wallet
        </button>
      )}

      {/* Score & Progress Bar */}
      <div className="w-64 bg-gray-700 rounded-full h-6 mb-4">
        <div
          className="h-6 rounded-full bg-green-500 transition-all"
          style={{ width: `${score % 100}%` }}
        ></div>
      </div>

      <p className="text-xl font-semibold mb-2">Score: {score}</p>

      {/* Click Button with Sound */}
      <button
        onClick={() => {
          setScore(score + 1);
          clickSound.play(); // Play sound on click
        }}
        className="px-8 py-4 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        Click Me! 🖱️
      </button>
    </div>
  );
}


