import type { NextPage } from "next";
import Head from "next/head";

import { Heading } from "../components/Heading";
import { DnaStrands } from "../components/DnaStrands";

const Home: NextPage = () => {
  return (
    <div className="flex bg-midnight  min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Frontend Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center text-center">
        <Heading />
        <DnaStrands />
      </main>
    </div>
  );
};

export default Home;
