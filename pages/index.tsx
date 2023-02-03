import type { NextPage } from "next";
import Head from "next/head";

import { Heading } from "../components/Heading";
import { Spacer } from "../components/Spacer";
import { DnaStrands } from "../components/DnaStrands";
import { DualColumn } from "../components/DualColumn";

const Home: NextPage = () => {
  return (
    <div className="flex w-100 min-h-screen flex-col items-center justify-center bg-midnight">
      <Head>
        <title>Frontend Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex container flex-1 flex-col items-center text-center">
        <Heading />
        <Spacer />
        <DnaStrands />
        <DualColumn />
      </main>
    </div>
  );
};

export default Home;
