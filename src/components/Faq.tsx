import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "Can i add multiple users in my wallet",
    response:
      "Yes! You can grant access to several individuals, ensuring they only have access to the designated funds and spending limits you set",
  },
  {
    question: "Is CtrlSend free to use?",
    response:
      "We believe fair financial services should be accessible to everyone. While we have minimal transaction fees, they are significantly lower than traditional money transfer services. ",
  },
  {
    question: "Can I use CtrlSend to receive money with no conditions?",
    response:
      "Absolutely! CtrlSend offers both conditional and standard transfers. For regular sending needs, you can choose the standard option where your money arrives instantly without any restrictions. However, CtrlSend's unique power lies in the conditional transfer system, allowing you to send money with set conditions.",
  },
  {
    question: "What devices and platforms does CtrlSend support?",
    response:
      "Currently, CtrlSend is available on Android and iOS smartphones through our user-friendly app. We're actively developing a web platform for additional accessibility.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
