import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

const statContent = {
  stats: [
    {
      number: "99.9%",
      label: "Child Safety Solution",
    },
    {
      number: "400+",
      label: "Happy Customers",
    },
    {
      number: "4.8",
      label: "Rating Reviews",
    },
  ],
  getStarted: {
    heading: "Get Started with our service?",
    description:
      "We understand that protecting your loved ones is of utmost importance.",
    img: "/images/illustration-woman.svg",
    cta: {
      cta_href: "#_",
      cta_label: "Learn More...",
    },
  },
};

const Stats = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statContent.stats.map((stat, idx) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <strong className="text-primary text-4xl xl:text-[52px] font-bold block leading-tight">
                    {stat.number}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative">
              {statContent.getStarted.img && (
                <img
                  src={statContent.getStarted.img}
                  alt="statcontentImage"
                  className="absolute right-0 lg:right-6 -top-14 w-24"
                />
              )}
              {statContent.getStarted.heading && (
                <h3 className="text-heading font-bold text-xl mb-3">
                  {statContent.getStarted.heading}
                </h3>
              )}
              {statContent.getStarted.description && (
                <p className="text-md mb-5">
                  {statContent.getStarted.description}
                </p>
              )}
              {statContent.getStarted.cta.cta_label && (
                <Link
                  href={statContent.getStarted.cta.cta_href}
                  className="flex space-x-2 outline-none items-center font-semibold text-primary group"
                >
                  <span>{statContent.getStarted.cta.cta_label}</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                    <BiChevronRight className="text-lg" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
