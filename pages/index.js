import Header from "../components/Header/index";
import SearchBar from "../components/Header/SearchBar";
import Slider from "../components/Slider/index";
import Sources from "../components/Sources/index";
import Collection from "../components/Collection/index";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bacanta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative min-h-screen after:bg-main after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Sources />
        <Collection title="Genul Epic" />
        <Collection title="Genul Liric" />
        <Collection title="Genul Dramatic" />
      </main>
    </div>
  );
}
