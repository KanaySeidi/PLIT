import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";

const Test = () => {
  return (
    <>
      <Disclosure>
        <DisclosureButton className="py-2">Ты гей</DisclosureButton>
        <DisclosurePanel className="bg-red-400">Конечно</DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Test;
