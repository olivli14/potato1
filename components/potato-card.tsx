"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getContract, createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import { potatoABI } from "@/app/abi";
import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { ConnectButton, useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {} from "wagmi";
import { wagmiConfig } from "./wallet-providers";
import { readContract } from "@wagmi/core";
import Link from "next/link";

const CONTRACT_ADDRESS = "0x6a750EbcD76de10dd9da6364BE6Cc155eD44Cb6B";