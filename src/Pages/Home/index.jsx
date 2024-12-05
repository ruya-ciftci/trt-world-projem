import Articles from "../../Components/Articles";
import Categories from "../../Components/Categories";
import MainNews from "../../Components/MainNews";
import RelatedArticles from "../../Components/Related";
import Country from "../../Components/Country";
import Popular from "../../Components/Popular";
import Suggestions from "../../Components/Suggestions";
import News from "../../Components/News";

export default function HomePages() {
  return (
    <div className="w-full h-full">
      <Categories />

      <section className="flex flex-col gap-12 px-4 lg:px-0">
        <div className="w-full h-full flex flex-col xl:flex-row gap-8 lg:gap-16 ">
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <MainNews />
            <RelatedArticles />
          </div>

          <div className="hidden lg:block w-px min-h-full bg-[#E1E6EB]" />

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-24">
            <Articles />
            <div className=" hidden lg:block w-px min-h-full bg-[#E1E6EB]" />

            <Country />
          </div>
        </div>

        {/* Yatay Çizgi */}
        <div className="w-full h-[1px] bg-[#E1E6EB] mt-[48px]" />

        <div className="w-full">
          <Popular />
        </div>
        <div className="w-full">
          <Suggestions />
        </div>
        <div className="w-full">
          <News />
        </div>
      </section>
    </div>
  );
}
