import React from "react";
import { FaHeart, FaShareAlt, FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";

const events = [
  {
    title: "بوت کمپ برنامه نویسی دیجی کالا",
    description:
      "در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا...",
    location: "تهران، ایران",
    date: "۲۹ بهمن",
    image: event1,
    likes: 49,
  },
  {
    title: "سکوی پرتاب غزال",
    description:
      "سکوی پرتاب غزال، ۲۷ دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌ها...",
    location: "تهران، ایران",
    date: "۲۷ دی",
    image: event2,
    likes: 49,
  },
  {
    title: "فراخوان جذب ایده و استارتاپ",
    description:
      "در حاشیه همایش معدن‌کاری دیجیتال ۱۴۰۱، خانه خلاق و نوآوری دنیای اقتصاد با همکاری...",
    location: "تهران، ایران",
    date: "۲۲ شهریور",
    image: event4,
    likes: 49,
  },
  {
    title: "سکوی پرتاب قزوین",
    description:
      "ویباد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری...",
    location: "قزوین، ایران",
    date: "۲۴ آبان",
    image: event3,
    likes: 49,
  },
];

const RecentEvents = () => {
  return (
    <div className="w-full px-4 py-10 bg-gray-100 text-right font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">رویدادهای اخیر</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-row-reverse bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden mx-auto"
            style={{
              width: "330px",
              height: "140px",
            }}
          >
            <div className="relative w-[40%] h-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M 26 0 Q -4 50 26 100 L 30 100 Q 0 50 30 0 Z"
                  fill="#f59e0b"
                />

                <defs>
                  <clipPath id={`clip-${index}`}>
                    <path d="M 30 0 Q 0 50 30 100 L 100 100 L 100 0 Z" />
                  </clipPath>
                </defs>
                <image
                  href={event.image}
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-${index})`}
                />
              </svg>
            </div>

            <div className="flex-1 p-3 flex flex-col justify-around">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 leading-snug line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-[16px] text-gray-600 leading-snug line-clamp-2">
                  {event.description}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500">
                <div className="flex items-center gap-1 flex-wrap">
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                  <MdLocationOn />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaShareAlt />
                  <FaHeart className="text-red-500" />
                  <span>{event.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          div[style*="330px"] {
            width: 600px !important;
            height: 210px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RecentEvents;
