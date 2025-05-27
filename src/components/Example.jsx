import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example({ question, answer }) {
  return (
    <div className="w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5 border-2">
      <Disclosure as="div" className="p-6">
        <DisclosureButton className="group flex w-full items-center justify-between">
          <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
            {question}
          </span>
          <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
          {answer}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
