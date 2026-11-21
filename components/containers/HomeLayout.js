import { serverFetch } from "@/core/services/http";
import Banner from "../Banner";
import TourList from "../TourList/TourList";
import TourSearchSection from "../TourSearchSection";
import EmptyState from "../EmptyState";
import PhonePurchase from "../PhonePurchase";
import WhyTorino from "../WhyTorino";
import ErrorState from "../ErrorState";

async function HomeLayout({ searchParams }) {
  const params = await searchParams;

  let toursData = [];
  let hasError = false;

  try {
    toursData = await serverFetch("/tour", { cache: "no-store" }, params);
  } catch{
    hasError = true;
  }

  return (
    <div>
      <Banner />
      <TourSearchSection />

      {hasError ? (
        <ErrorState />
      ) : !toursData.length ? (
        <EmptyState />
      ) : (
        <TourList toursData={toursData} />
      )}

      <PhonePurchase />
      <WhyTorino />
    </div>
  );
}


export default HomeLayout;
