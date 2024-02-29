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
          Have you ever been concerned about losing control of your money after sending it to someone? Worry no more, CtrlSend is a secure mobile money service that allows you to share a portion of your wallet directly with the recipient, set spending limits, and receive notifications when and what the money is spent on, all in real time, with the option to suspend a transaction if you suspect suspicious activity or misuse. CtrlSend gives you the confidence that they will only spend what you authorize, even after the money is transferred.
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
              <Link href="https://ctrlsend.vercel.app/" target="_blank">
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
