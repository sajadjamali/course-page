import Score from "@/components/Score";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Properties from "@/components/Properties";
import Introduction from "@/components/Introduction";
import SuggestedCourses from "@/components/SuggestedCourses";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <main className="w-full mx-auto sm:w-11/12 sm:mx-0 lg:w-9/12 xl:w-7/12">
        <Properties />
        <Content />
        <SuggestedCourses />
        <Score />
      </main>
    </>
  );
}
