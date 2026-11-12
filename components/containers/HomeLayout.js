import { serverFetch } from "@/core/services/http";
import Banner from "../Banner";
import ServerError from "../ServerError";
import Test from "../Test";
import TourList from "../TourList/TourList";
import TourSearchSection from "../TourSearchSection";
async function HomeLayout() {
    const toursData = await serverFetch("/tour", { cache: "no-store" });
  
  return (
    <div>
      {/* <Test /> */}
      {/* <Banner /> */}
      {/* <ServerError /> */}
      <TourSearchSection />
      <TourList toursData={toursData} />
    </div>
  );
}

export default HomeLayout;
