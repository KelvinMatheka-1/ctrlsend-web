import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contents = [
  // Your content items
];

export function Features() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
              {/* Your content details */}
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Slider {...sliderSettings}>
                  {/* Map through the images for the carousel */}
                  {content.carouselImages.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={400}
                        height={200}
                        quality={75}
                        sizes="100vw"
                        priority
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
