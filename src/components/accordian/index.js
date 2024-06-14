
"use client";

import { Accordion } from "flowbite-react";
import { Children } from "react";

const CustomAccordion=()=> {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>최상의</Accordion.Title>
        <Accordion.Content>
         {Children}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
export default CustomAccordion;
