import Score from "@/components/Score";
import Header from "@/components/Header";
import Content from "@/components/Content";
import BuyCard from "@/components/BuyCard";
import Properties from "@/components/Properties";
import Description from "@/components/Description";
import Introduction from "@/components/Introduction";
import SuggestedCourses from "@/components/SuggestedCourses";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <main className="min-[960px]:flex min-[960px]:space-x-12 rtl:space-x-reverse xl:w-10/12 xl:mx-auto 2xl:w-7/12">
        <div className="min-[960px]:w-8/12">
          <Description />
          <Properties />
          <Content />
          <SuggestedCourses />
          <Score />
        </div>
        <div className="relative bottom-64 hidden min-[960px]:block">
          <div className="sticky top-5">
            <BuyCard />
          </div>
        </div>
      </main>
    </>
  );
}
