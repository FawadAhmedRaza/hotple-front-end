"use client";
import { getAllEvents } from "@/api/event";
import Select from "@/components/select";
import { fToNow, getDaysDifference } from "@/utils/format-time";
import Head from "next/head";
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
import Link from "next/link";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
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
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <header className="bg-white flex gap-4 justify-between flex-wrap lg:flex-nowrap px-4 items-center  shadow-md py-4">
        <div className="container mx-auto ">
          <h1 className="text-2xl font-bold">이번 달의 이벤트</h1>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <input
              type="month"
              className="border rounded px-4 py-2 mr-4"
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
        </div>
        <SolidButton onClick={()=>router.push("/events/new")} className={'w-40'}>새로운 이벤트</SolidButton>
      </header>

      <main className="container mx-auto px-4 my-8">
        <div className="text-gray-600 mb-4">
          {
            events?.filter((event) =>
              event.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase())
            )?.length
          }{" "}
          발견된 결과
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events
            ?.filter((event) =>
              event.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase())
            )
            ?.map((event) => {
             
              return(
                <Link
                href={`/events/${event?.id}`}
                  key={event.id}
                  className="flex bg-white shadow-md rounded-lg overflow-hidden"
                >
                  {}
                  <Image
                    src={
                      event.filePath
                        ? event.filePath
                        : "/no-image-placeholder.png"
                    }
                    alt={event.title}
                    className="w-1/3 h-full object-cover"
                    width={400}
                    height={200}
                  />
                  <div className="p-4 w-2/3">
                    <h2 className="text-xl font-bold">{event.title}</h2>
                    <div className="flex flex-wrap gap-3">
                      <p className="text-gray-600">{event.category} -</p>
                      <p className="text-red">{getDaysDifference(event.date)}</p>
                    </div>
                    <p className="mt-2 text-gray-700">
                      {getShortDescription(event.description, 15)}
                    </p>
                  </div>
                </Link>
              )
            })}
        </div>
      </main>
    </div>
  );
}
