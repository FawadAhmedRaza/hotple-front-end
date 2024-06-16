"use client";
import { getAllEvents } from "@/api/event";
import Select from "@/components/select";
import { getDaysDifference } from "@/utils/format-time";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  parseISO,
  isWithinInterval,
  startOfMonth,
  endOfMonth,
  format,
} from "date-fns";
import { getShortDescription, removeDuplicates } from "@/utils/helpers";
import SolidButton from "@/components/ui/Buttons/solid-button";
import { useRouter } from "next/navigation";
import H1 from "@/components/ui/Typography/h1";
import H5 from "@/components/ui/Typography/h5";
import H4 from "@/components/ui/Typography/h4";
import H3 from "@/components/ui/Typography/h3";
import Paragraph from "@/components/ui/Typography/paragraph";
import Div from "@/components/ui/div";
import EvenetSkeleton from "@/components/Skeletons/EvenetSkeleton";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), "yyyy-MM")
  );

  const router = useRouter()

  const fetch = async () => {
    setLoading(true);
    try {
      const allEvents = await getAllEvents();
      const filteredEvents = allEvents.filter((event) => {
        const eventDate = parseISO(event.date);
        const monthStart = startOfMonth(parseISO(selectedMonth));
        const monthEnd = endOfMonth(parseISO(selectedMonth));
        return isWithinInterval(eventDate, {
          start: monthStart,
          end: monthEnd,
        });
      });
      setEvents(filteredEvents);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [selectedMonth]);

  if (loading) {
    return <h1><EvenetSkeleton /></h1>;
  }
  return (
    <Div>
      <header className="flex flex-col  border-b dark:border-neutral-800 border-gray-200 pb-4">
          <H1 className="">이번 달의 이벤트</H1>
        <div className=" flex flex-col sm:flex-row justify-between sm:items-center gap-3 w-full">
          <div className="flex justify-between items-center mt-4">
            <input
              type="month"
              className="border rounded-md px-4 py-2 mr-4 dark:border-neutral-800 border-gray-200 dark:bg-brownish_black outline-none focus:outline-none"
              defaultValue={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            />
            <Select
              label={"Category"}
              options={removeDuplicates(
                events.map((event) => ({
                  label: event?.category,
                  value: event?.category,
                }))
              )}
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
            />
          </div>
        <SolidButton onClick={() => router.push("/events/new")} className={'!text-nowrap !py-1.5 h-12 !w-fit self-end'}>새로운 이벤트</SolidButton>
        </div>
      </header>

      <main className="my-8">
        <H3 className=" dark:!text-dark_secondary_label mb-4">
          {
            events?.filter((event) =>
              event.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase())
            )?.length
          }{" "}
          발견된 결과
        </H3>
        <div className="grid grid-flow-col-1  md:grid-cols-2 lg:grid-flow-col-1 xl:grid-cols-2 2xl:grid-flow-col-2 gap-8">
          {events
            ?.filter((event) =>
              event.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase())
            )
            ?.map((event) => (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row dark:bg-brownish_black bg-white shadow-md rounded-lg overflow-hidden "
              >
                <div className="relative w-full sm:w-1/3 max-h-60 sm:max-h-72 overflow-hidden group cursor-pointer dark:bg-brown">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out"></div>
                  <img  
                    src={
                      event.filePath
                        ? event.filePath
                        : "/no-image-placeholder.png"
                    }
                    alt={event.title}
                    className="w-full h-full object-contain sm:object-cover"
                  />
                </div>
                <div className=" px-2 py-4  sm:p-4 w-full sm:w-2/3">
                  <H4 className=" !text-lg md:!text-xl dark:!text-dark_secondary_label mb-1.5 sm:mb-3">{event.title}</H4>
                  <div className="flex flex-wrap gap-3">
                    <Paragraph className="">{event.category} -</Paragraph>
                    <Paragraph className="!text-red">{getDaysDifference(event.date)}</Paragraph>
                  </div>
                  <Paragraph className=" mt-1 sm:mt-2 dark:!text-dark_tertiary_label">
                    {getShortDescription(event.description, 15)}
                  </Paragraph>
                </div>
              </div>
            ))}
        </div>
      </main>
    </Div>
  );
}
