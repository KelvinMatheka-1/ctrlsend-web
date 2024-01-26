import Image from "next/image";
import Link from "next/link";
import Home from './paralax'
import ReactFastMarquee from 'react-fast-marquee';

export function Hero() {
  
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Welcome to <br />{" "}
            <span className="text-green-500 font-extrabold ">CtrlSend</span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
          CtrlSend is a money transfer service that lets users control how their money is spent after it is transferred.
          It works by allowing users to send locked funds and setting specific conditions on their transfers, such as requiring the recipient to provide proof of purchase or legitimacy of something when the recipient sends a withdrawal request. 
          Upon satisfaction, the sender can approve or reject the request. This in turn gives senders control over how their money is spent and also makes it easy for recipients to account for usage.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#services">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  View Demo
                </button>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/humberni/halley/blob/main/README.md" target="_blank">
                <button className="bg-green-500 text-white text-base rounded-full px-4 p-2 font-medium">
                  Documentation
                </button>
              </Link>
            </div>
          </div>
        </div>
        

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/wallet.svg"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
      <ReactFastMarquee  className="text-green-500 font-extrabold" speed={20}>
       <div className="mr-10">Unending cases of Fraud seem to always be the talk of the town</div>
       <div className="mr-10">Unending cases of Fraud seem to always be the talk of the town</div>
       <div className="mr-10">Unending cases of Fraud seem to always be the talk of the town</div>
       <div className="mr-10">Unending cases of Fraud seem to always be the talk of the town</div>
      </ReactFastMarquee>
      
      <Home />
    </div>
  );
}
