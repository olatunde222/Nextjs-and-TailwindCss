import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const solutionContent = {
  text: {
    headingSubTitle: "Our Solutions",
    headingTitle:
      "From safeguarding your home with state-of -the-art alarm systems",
    description:
      "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our family security Plan, you can rest easy knowing that youve taken the neccessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most - Your family's well Being.",
    features: [
      {
        title: "Home Fire Security ",
      },
      {
        title: "Cyber Security Solutions",
      },
      {
        title: "Emergency Preparedness  ",
      },
      {
        title: "Identity Theft Protection",
      },
    ],
    cta: {
      btn1: {
        href: "#_",
        label: "Get Started",
      },
      btn2: {
        href: "#_",
        label: "HOw it Works",
      },
    },
  },
  images: {
    img1: "/images/solution-img-1-min.jpg",
    img2: "/images/solution-img-2-min.jpg",
    img3: "/images/solution-img-3-min.jpg",
  },
  experince: {
    years: "25+",
    label: "years of experience",
  },
};

const Solutions = () => {
  return (
    <section className="py-32 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20 ">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={solutionContent.images.img1}
                    width={626}
                    height={640}
                    className="object-cover h-full w0-full rounded-lg"
                    alt="solutionsImage"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src={solutionContent.images.img3}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg"
                      alt="solutionImage"
                    />
                  </div>
                </div>
              </div>
              {/* End col */}
              <div className="my-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="bg-purpleLight w-10 h-10 lg-w-20 rounded-2xl rounded-tr-[200px]"></div>
                  </div>
                  <div>
                    <Image
                      className="object-cover h-full w-full rounded-lg shadow-2xl"
                      alt="solutionImage"
                      src={solutionContent.images.img2}
                      width={547}
                      height={573}
                    />
                  </div>
                  {solutionContent.experince.label && (
                    <div>
                      <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                        <strong className="block font-bold text-primary text-xl lg:text-5xl">
                          {solutionContent.experince.years}
                        </strong>
                        <span>{solutionContent.experince.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 relative z-10">
            {solutionContent.text.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10">
                {solutionContent.text.headingSubTitle}
              </span>
            )}
            {solutionContent.text.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {solutionContent.text.headingTitle}
              </h2>
            )}

            {solutionContent.text.description && (
              <p className="text-body leading-relaxed mb-10">
                {solutionContent.text.description}
              </p>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
              {solutionContent.text.features.map((feature, idx) => (
                <li
                  key={feature.title}
                  className="flex flex-grow items-center space-x-5"
                >
                  <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <BiCheck className="text-white text-xl" />
                  </span>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-3">
              <Link
                href={solutionContent.text.cta.btn1.href}
                className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                {solutionContent.text.cta.btn1.label}
              </Link>
              <Link
                href={solutionContent.text.cta.btn2.href}
                className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                {solutionContent.text.cta.btn2.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
