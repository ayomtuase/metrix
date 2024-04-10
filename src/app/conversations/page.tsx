import { OrdersIcon } from "@/components/icons/orders-icon";
import { SendIcon } from "@/components/icons/send-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import React, { Fragment } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaCheck, FaPlus } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";

const Conversations = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className="font-medium">Conversations with Customers</p>
        <Button>New Message</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="rounded-lg h-auto py-2.5 lg:hidden mt-2.5"
          >
            <HiViewList />
            <span className="ml-2.5 text-sm">View Contacts</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2 pt-8">
          <div className="pb-3">
            <Contacts />
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex gap-[19px] mt-5">
        <div className="rounded-lg bg-white pt-[22px] w-[411px] min-w-[411px] shrink-0 hidden lg:block">
          <Contacts />
        </div>

        <div className="rounded-lg bg-white grow">
          <div className="flex flex-col md:flex-row border-b px-[22px] py-4 justify-between">
            <div className="flex items-stretch">
              <Image
                src={"/assets/images/user-image.png"}
                width={60}
                height={60}
                alt="user-image"
                className="rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between ml-2 h-full">
                <p className="font-medium">Jane Doe</p>
                <div className="flex items-center mt-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="hsla(230,51%,81%,1) text-sm ml-1">
                    Online
                  </span>
                  <span className="text-sm ml-2 text-gray-text">12:55 am</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start md:items-end mt-2 md:mt-0">
              <div className="flex items-center space-x-3">
                <span className="rounded-full w-[99px] h-[19px] grid text-xs place-items-center bg-yellow-accent text-[hsla(230,9%,12%,1)]">
                  New Customer
                </span>
                <Button variant="link" className="px-0 py-0 h-auto">
                  View Profile
                </Button>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <OrdersIcon className="text-[hsla(230,5%,34%,1)]" />
                <span className="ml-2 text-gray">0 Orders</span>
              </div>
            </div>
          </div>
          <div className="px-3 md:pl-[30px] md:pr-[21px] pb-5">
            <div className="flex justify-center mt-5">
              <span className="rounded-full py-2 px-3 bg-[hsla(230,33%,97%,1)] text-[hsla(230,9%,12%,1)]">
                12 August 2022
              </span>
            </div>

            <div className="flex flex-col items-start mt-5  max-w-full">
              <div className="flex w-full py-2 border-b">
                <Image
                  src="/assets/images/iphone-1.png"
                  height={49}
                  width={49}
                  alt="iphone1"
                  className="mr-[14px]"
                />
                <div className="flex flex-col grow justify-between">
                  <p className="text-sm mb-2.5">iPhone 13</p>
                  <div className="flex justify-between items-end">
                    <p className="font-medium text-sm">₦730,000.00</p>
                    <span className="font-medium text-xs">
                      <span className="text-primary">12</span> in Stock
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-primary p-2 md:p-4 text-sm md:text-lg font-medium rounded-es-none mt-2 text-white">
                Hello, I want to make enquiries about your product
              </div>
              <p className="text-gray-text mt-2">12:55 am</p>
            </div>
            <div className="flex flex-col w-full items-end text-end mt-5">
              <div className="rounded-2xl bg-[hsla(32,100%,91%,1)] text-end p-2 md:p-4 text-sm md:text-lg font-medium rounded-ee-none mt-2">
                Hello Janet, thank you for reaching out
              </div>
              <p className="text-gray-text mt-2 flex items-center">
                12:55 am{" "}
                <span className="w-5 h-5 bg-[hsla(32,100%,91%,1)] ml-2 grid place-items-center rounded-full">
                  <FaCheck className="text-[hsla(230,9%,12%,1)]" size={12} />
                </span>
              </p>
            </div>
            <div className="flex flex-col w-full items-end text-end mt-5">
              <div className="rounded-2xl bg-[hsla(32,100%,91%,1)] text-[hsla(230,9%,12%,1)] p-2 md:p-4 text-sm md:text-lg font-medium rounded-ee-none mt-2">
                What do you need to know?
              </div>
              <p className="text-gray-text mt-2 flex items-center">
                12:57 am{" "}
                <span className="w-5 h-5 bg-[hsla(32,100%,91%,1)] ml-2 grid place-items-center rounded-full">
                  <FaCheck className="text-[hsla(230,9%,12%,1)]" size={12} />
                </span>
              </p>
            </div>

            <div className="flex justify-center mt-5">
              <span className="rounded-full py-2 px-3 bg-[hsla(230,33%,97%,1)] text-[hsla(230,9%,12%,1)]">
                Today
              </span>
            </div>

            <div className="flex flex-col items-start mt-5 max-w-full">
              <div className="rounded-2xl bg-primary p-2 md:p-4 text-sm md:text-lg font-medium rounded-es-none mt-2 text-white">
                I want to know if the price is negotiable, i need about 2 Units
              </div>
              <p className="text-gray-text mt-2">12:55 am</p>
            </div>

            <div className="w-full relative mt-3.5">
              <div className="absolute flex space-x-2 items-center left-0 top-0 bottom-0 w-auto pl-2 md:pl-4 pr-5">
                <Button
                  type="submit"
                  title="submit"
                  className="text-primary-black w-6 h-6 p-0 bg-[hsla(32,100%,94%,1)] rounded-lg"
                >
                  <FaPlus className="text-[hsla(230,9%,12%,1)]" size={12} />
                </Button>
              </div>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Your message"
                className="placeholder:text-[hsla(202,4%,68%,1)] pl-[40px] md:pl-[63px] text-sm h-[51px] rounded-lg w-full pr-[84px] md:pr-[167px]"
                autoComplete={"off"}
              />
              <div className="absolute flex space-x-3 items-center right-0 top-0 bottom-0 w-auto px-4">
                <BsEmojiSmile role="button" className="text-primary" />
                <Button
                  type="submit"
                  title="submit"
                  className="text-primary-black bg-[hsla(32,100%,94%,1)] rounded-md px-2 md:px-4 h-9 text-base"
                >
                  <span className="hidden md:inline">Send</span>
                  <SendIcon className="md:ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Contacts = () => {
  return (
    <div className="w-full px-2 lg:px-6">
      <div className="flex w-full items-center justify-between mb-4">
        <p className="text-xl font-medium">Contacts</p>
        <p className="text-xl font-medium text-gray">34</p>
      </div>
      <div className="w-full relative">
        <div className="absolute flex space-x-2 items-center left-0 top-0 bottom-0 w-auto px-4">
          <Button
            type="submit"
            title="submit"
            className="text-primary-black w-5 h-5 p-0 bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent"
          >
            <SearchIcon />
          </Button>
        </div>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="placeholder:text-[hsla(202,4%,68%,1)] pl-[52px] text-sm h-[45px] rounded-lg w-full pr-4"
          autoComplete={"off"}
        />
      </div>

      <div className="mt-5">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="flex py-4 border-b">
                <div className="relative">
                  <Image
                    src={"/assets/images/user-image.png"}
                    width={48}
                    height={48}
                    alt="user-image"
                    className="rounded-lg"
                  />
                  <div className="absolute w-2 h-2 rounded-full border-2 border-white right-0 top-0 bg-primary"></div>
                </div>
                <div className="ml-2 flex flex-col justify-between grow">
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-gray-text line-clamp-1 text-ellipsis">
                    Hi, i want make enquiries about yo...
                  </p>
                </div>
                <div className="flex flex-col justify-between ml-2.5 shrink-0 items-end">
                  <span className="rounded-full w-10 h-[19px] grid text-xs place-items-center bg-yellow-accent text-[hsla(230,9%,12%,1)]">
                    New
                  </span>
                  <span className="text-gray-text text-xs">12:55 am</span>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Conversations;
