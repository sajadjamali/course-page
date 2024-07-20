import Header from "@/components/Header";
import Content from "@/components/Content";
import Properties from "@/components/Properties";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto sm:w-10/12 sm:mx-0 lg:w-8/12 xl:w-7/12">
        <Properties />
        <Content />
      </main>
    </>
  );
}
