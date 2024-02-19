/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/outline";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const newLine = "\xa0".repeat(1000);
const faqs = [
  {
    id: 1,
    question: "How To Add Sustainability Icons To The Product?",
    answer:
      "1- Select all sustainability icons that apply to all of your products from the sustainability icons page." +
      newLine +
      " 2- Upload your proof document." +
      newLine +
      " 3- Now you can add the icons to your products!" +
      newLine +
      " 4- You can always edit sustainability icons & upload their proof document.",
  },
  {
    id: 2,
    question: "How To Add Sustainability Icons To The Product?",
    answer:
      "1- Select all sustainability icons that apply to all of your products from the sustainability icons page." +
      newLine +
      " 2- Upload your proof document." +
      newLine +
      " 3- Now you can add the icons to your products!" +
      newLine +
      " 4- You can always edit sustainability icons & upload their proof document.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div>
      <div className="mx-auto p-6">
        <div className="mx-auto divide-y-2 divide-gray-200">
          {/* <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2> */}
          <dl className="mb-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ExpandMoreIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 w-full">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
