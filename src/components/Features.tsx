import Image from "next/image";
import Slider from "react-slick";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Initiating Locked fund transfer",
    description:
      "Euismod fames in felis ornare interdum phasellus imperdiet habitant, elementum leo lobortis facilisis suscipit nullam.",
    features: [
      "Tap on Transfer",
      "Select locked funds transfer from the drop down",
      "Fill the recipient details and tap transfer",
    ],
    image:[
      "/images/step1.png",
      "/images/step1.jpg",
      "/images/step1.jpg",
      "/images/step1.jpg"
    ],
    order: false,
  },
  {
    title: "Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus at modi ea tempore sapiente optio, quas sint nobis pariatur.",
    features: [
      "But I must explain to you how all this mistaken",
      "Voluptatum deleniti atque corrupti quos",
      "He endures pains to avoid worse pains",
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Inventory",
    description:
      "Porta facilisis ullamcorper rutrum erat luctus aliquam phasellus pharetra fusce, aliquet montes turpis mus habitasse lectus lacinia.",
    features: [
      "Sed ut perspiciatis unde omnis iste natus",
      "Quis autem vel eum iure reprehenderit",
      "Consequuntur magni dolores eos qui ratione",
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
                  width={400}
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
