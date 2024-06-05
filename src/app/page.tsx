"use client";
import ConnectButton from "@/components/ConnectButton";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  return (
    <main className="flex min-h-screen items-center justify-between p-8 ">
      <div className="flex flex-col m-auto">
        {address ? (
          <h2 className="py-2 text-white text-center">Wallet conectada</h2>
        ) : (
          <h2 className="py-2 text-white text-center">Wallet desconectada</h2>
        )}
        <ConnectButton />
      </div>
    </main>
  );
}
