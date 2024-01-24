import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Initiating Locked fund transfer",
    description:
      "Secure your money with conditions: Set specific requirements for how your money can be spent before sending it. Think of it as building a fence around your funds for peace of mind.",
    features: [
      "Tap on Transfer",
      "Select locked funds transfer from the drop down",
      "Fill the recipient details and tap transfer",
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Requesting to use funds",
    description:
      "The recipient asks your permission to use the funds based on the conditions you set. Transparency and accountability made easy.",
    features: [
      "Tap on withdraw",
      "Select and  double tap on the transaction you wan to widraw from to autofill details",
      "Enter amount and reason to withdraw, then tap request funds",
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Approving or Rejecting withdraw requests",
    description:
      "Be the boss of your money: Decide if the conditions have been met and grant access to the funds, or send a friendly decline message for further clarification.",
    features: [
      "On the Homepage, tap Approve",
      "Tap pending tab",
      "Here you can approve or reject withdraw requests",
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
