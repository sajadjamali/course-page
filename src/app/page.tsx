import Score from "@/components/Score";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Properties from "@/components/Properties";
import Description from "@/components/Description";
import Introduction from "@/components/Introduction";
import SuggestedCourses from "@/components/SuggestedCourses";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <main className="w-full min-[960px]:w-8/12 xl:w-10/12 xl:mx-auto 2xl:w-7/12">
        <Description />
        <Properties />
        <Content />
        <SuggestedCourses />
        <Score />
      </main>
    </>
  );
}
