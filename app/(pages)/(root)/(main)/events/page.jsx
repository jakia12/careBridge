import PageBanner from "@/components/shared/PageBanner";
import EventsSections from "./components/EventsSections";

const EventsPage = () => {
  return (
    <div>
      <PageBanner title="Events" />
      <EventsSections />
    </div>
  );
};

export default EventsPage;
