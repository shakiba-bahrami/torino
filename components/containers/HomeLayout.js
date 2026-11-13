import { serverFetch } from "@/core/services/http";
import Banner from "../Banner";
import ServerError from "../ServerError";
import Test from "../Test";
import TourList from "../TourList/TourList";
import TourSearchSection from "../TourSearchSection";
import EmptyState from "../EmptyState";

async function HomeLayout({ searchParams }) {
  const params = await searchParams;
  const toursData = await serverFetch("/tour", { cache: "no-store" }, params);

  return (
    <div>
      {/* <Test /> */}
      {/* <Banner /> */}
      {/* <ServerError /> */}
      <TourSearchSection />
      {!toursData.length ? (
        <EmptyState />

      ) : (
        <TourList toursData={toursData} />
      )}
    </div>
  );
}

export default HomeLayout;
