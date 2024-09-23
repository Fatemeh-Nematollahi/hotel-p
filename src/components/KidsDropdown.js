
import React, { useContext } from 'react';
import { RoomContex } from "../context/RoomContext"
import { Menu } from "@headlessui/react"
import { BsChevronDown } from "react-icons/bs"

const list = [
  { name: "0 kids" },
  { name: "1 kid" },
  { name: "2 kids" },
  { name: "3 kids" },
  { name: "4 kids" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContex)
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids}
        <BsChevronDown className='text-base text-accent-hover' />
      </Menu.Button>
      {/* item */}
      <Menu.Items as='ul' className="bg-white absolute w-full flex flex-col z-40">
        {list.map((li, index) => {
          return (
            <Menu.Item 
            onClick={() =>setKids(li.name)}
            className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer" as="li" key={index}>{li.name}</Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
