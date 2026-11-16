import { serverFetch } from "@/core/services/http";
import Banner from "../Banner";
import ServerError from "../ServerError";
import Test from "../Test";
import TourList from "../TourList/TourList";
import TourSearchSection from "../TourSearchSection";
import EmptyState from "../EmptyState";
import PhonePurchase from "../PhonePurchase";
import WhyTorino from "../WhyTorino";

async function HomeLayout({ searchParams }) {
  const params = await searchParams;
  const toursData = await serverFetch("/tour", { cache: "no-store" }, params);

  return (
    <div>
      <Banner />
      <TourSearchSection />
      {!toursData.length ? <EmptyState /> : <TourList toursData={toursData} />}
      <PhonePurchase />
      <WhyTorino />
    </div>
  );
}

export default HomeLayout;
