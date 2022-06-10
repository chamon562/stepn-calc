import React, { useState, Fragment } from "react";
import trainerImg from "../../images/trainer.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
console.log(Menu);
const Calc = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex justify-evenly ">
        <div className="relative hover:scale-125 w-32 ease-in-out duration-200">
          <img
            className="bg-green-400 border rounded-md  shadow-lg mt-4 "
            src={trainerImg}
            alt="trainer shoe"
          />
          <span className="bg-gray-300 font-bold border absolute w-20 inset-x-6 top-0 rounded-full text-center mt-1">
            Walker
          </span>
        </div>
        <div className="relative hover:scale-125 w-32 ease-in-out duration-200">
          <img
            className="bg-green-400 border rounded-md  shadow-lg mt-4 "
            src={trainerImg}
            alt="trainer shoe"
          />
          <span className="bg-gray-300 font-bold border absolute w-20 inset-x-6 top-0 rounded-full text-center mt-1">
            Walker
          </span>
        </div>
        <div className="relative hover:scale-125 w-32 ease-in-out duration-200">
          <img
            className="bg-green-400 border rounded-md  shadow-lg mt-4 "
            src={trainerImg}
            alt="trainer shoe"
          />
          <span className="bg-gray-300 font-bold border absolute w-20 inset-x-6 top-0 rounded-full text-center mt-1">
            Walker
          </span>
        </div>
        <div className="relative hover:scale-125 w-32 ease-in-out duration-200">
          <img
            className="bg-green-400 border rounded-md  shadow-lg mt-4 "
            src={trainerImg}
            alt="trainer shoe"
          />
          <span className="bg-gray-300 font-bold border absolute w-20 inset-x-6 top-0 rounded-full text-center mt-1">
            Walker
          </span>
        </div>
      </div>
      {/* drop down rarity common uncomm rare epic legendary each change should trigger its base attributes */}
      <div>
        <h1 className="text-center text-3xl mt-8">Rarity</h1>
      </div>
      <Menu as="div" className="relative inset-x-[45%] inline-block ">
        <div>
          <Menu.Button
            className="
        h-12
        inline-flex 
        justify-center
        items-center 
        w-40 
        rounded-md 
        border-gray-300 
        shadow-sm px-4 py-2 
        bg-white
        text-lg
        font-medium 
        text-gray-700 
        hover:bg-gray-50 
        focus:outline-none 
        focus:ring-offest-2 
        focus:ring-offset-gray-100 
        focus:ring-indigo-500
        "
          >
            Options
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* TODO:  when the user selects a menu rarity it will lock in that it will be of that specific rarity 
            and the background of the img div should change to that rarity color 
        */}
          <Menu.Items className=" text-center font-medium absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-400 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Common
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-green-300 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Uncommon
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-sky-400 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Rare
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-indigo-400 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Epic
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-orange-400 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Legendary
                  </a>
                )}
              </Menu.Item>
              {/* <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form> */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Calc;
