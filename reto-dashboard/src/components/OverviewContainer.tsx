import data from "../data.json";
import { OverviewCard, OverviewTodayCard } from "./OverviewCard";

export const OverviewContainer = () => {
  return (
    <section className="absolute top-[191px] max-w-[1440px] left-0 right-0 mx-auto flex flex-wrap">
      {data.overview.map((object) => (
        // <div key={object.id}>tarjeta</div>
        <OverviewCard key={object.id} {...object} />
      ))}
    </section>
  );
};

export const OverviewTodayContainer = () => {
  return (
    <section >
        <h2 className="text-2xl font-bold mb-[27px] text-dark-grayish-blue ml-8">Overview today</h2>
      <div className="flex flex-wrap">
        {data["overview-today"].map((object) => (
          <OverviewTodayCard key={object.id} {...object} />
        ))}
      </div>
    </section>
    // <div>Overview today container</div>
  );
};
