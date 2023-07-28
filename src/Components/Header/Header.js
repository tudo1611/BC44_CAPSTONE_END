import React from "react";
import UserNav from "./UserNav";
export default function Header() {
  return (
    <div>
      <header className="p-1 dark:bg-gray-800 dark:text-gray-100 bg-white w-full fixed">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <div>
            <img
              src="https://demo2.cybersoft.edu.vn/logo.png"
              className="w-40 hover:scale-110 transition duration-500"
              alt=""
            />
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
          </ul>

          <UserNav />
        </div>
      </header>
    </div>
  );
}
