import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Adding user to your wallet",
    description:
      "Secure your money with conditions: Set specific requirements for how, when and why your money can be spent . Think of it as building a fence around your funds for peace of mind.",
    features: [
      "Tap on Give access",
      "Fill the recipient details and tap Grant access",
      "Enter spending limit"
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Using funds directly from the wallet given access to",
    description:
      " maintain control over your main wallet while empowering the recipient to use the designated funds conveniently and responsibly. Transparency and accountability made easy.",
    features: [
      "Tap on wallets accessible",
      "Enter payment or recipient details",
      "Tap pay/send",
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Approving or Suspending transactions",
    description:
      "Transparency and accountability made easy, recieve notifications on what the funds are being spent on and be the boss of your money by approving or suspending th transaction",
    features: [
      "On the Homepage, tap on transactions",
      "Tap pon the Approve tab",
      "Here you can approve or reject a transaction",
    ],
    image: "/images/features/inventory.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center text-green-500">How It Works</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Preventing Fraud and misuse has never been easier
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={500}
                  height={200}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
