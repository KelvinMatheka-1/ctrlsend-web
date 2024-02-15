import Image from "next/image";

const services = [
  {
    title: "The Problem We Solve",
    description:
      "Fraud, misuse, and lack of control leave both senders and recipients vulnerable. ",
    image: "/images/services/problem.svg",
    alt: "Service description",
  },
  {
    title: "Our Unique Solution",
    description:
      "CtrlSend empowers senders to set conditions and approve/reject withdrawals, ensuring funds are used as intended. ",
    image: "/images/services/solution2.svg",
    alt: "Service description",
  },
  {
    title: "Market Opportunity",
    description:
      "The mobile money market is exploding, but trust remains a major hurdle. We address this critical gap with a solution tailored for both casual users and businesses. ",
    image: "/images/services/market.svg",
    alt: "Service description",
  },
  {
    title: "Competitive Advantage",
    description:
      "Unlike competitors who focus on speed or convenience, CtrlSend prioritizes trust and control",
    image: "/images/services/advantage.svg",
    alt: "Service description",
  },
  {
    title: "The Future of CtrlSend",
    description:
      "We aim to be the global leader in secure and transparent mobile money transfers.",
    image: "/images/services/future.svg",
    alt: "Service description",
  },
  {
    title: "Pivoting",
    description:
      "Say goodbye to the hassle of sending money back and forth",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Why CtrlSend?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-green-500">
        Imagine sending money knowing exactly what happens with it. That is CtrlSend.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
