import { useLoaderData } from "react-router-dom";
import BreakingNews from "../components/BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import NewsCart from "../components/NewsCart";

const Home = () => {
  const newsData = useLoaderData();

  console.log(newsData);
  return (
    <div className="">
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-2">

        {newsData.map((item) => (
          <NewsCart key={item.id} item={item}></NewsCart>
        ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
