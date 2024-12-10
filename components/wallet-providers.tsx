
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

export const wagmiConfig = getDefaultConfig({
  appName: "Potato",
  projectId: "1e86d282f0c60f91fc5642bc3fb15e52",
  chains: [baseSepolia],
  ssr: true,
});

export function WalletProviders({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider showRecentTransactions={true}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}


