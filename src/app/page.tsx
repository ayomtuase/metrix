import { CartIcon } from "@/components/icons/cart-icon";
import { CustomersIcon } from "@/components/icons/customers-icon";
import { FolderIcon } from "@/components/icons/folder-icon";
import { OrdersIcon } from "@/components/icons/orders-icon";
import { SalesChartIcon } from "@/components/icons/sales-chart-icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment } from "react";
import { RxCaretDown } from "react-icons/rx";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-[19px] h-[145px]">
        <div className="group transition rounded-lg bg-white hover:bg-primary px-[15px] py-[11px] h-full flex flex-col justify-between">
          <div className="flex w-full justify-between items-center">
            <span className="h-9 w-9 grid place-items-center bg-[hsla(230,85%,64%,0.12)] group-hover:bg-[hsla(0,0%,100%,0.16)] text-primary group-hover:text-white rounded-lg">
              <SalesChartIcon />
            </span>
            <div className="flex space-x-[7px] text-[hsla(230,10%,77%,1)] group-hover:text-white">
              <span className="text-xs">This Week</span>
              <RxCaretDown />
            </div>
          </div>
          <div className="flex items-center group-hover:text-white">
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                Sales
              </p>
              <p className="text-xl font-medium">₦4,000,000.00</p>
            </div>
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                Volume
              </p>
              <p className="text-xl font-medium flex items-center">
                450{" "}
                <span className="text-green ml-[7px] text-xs group-hover:text-white">
                  +20.00%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="group transition rounded-lg bg-white hover:bg-primary px-[15px] py-[11px] h-full flex flex-col justify-between">
          <div className="flex w-full justify-between items-center">
            <span className="h-9 w-9 grid place-items-center bg-[hsla(32,100%,78%,0.16)] group-hover:bg-[hsla(0,0%,100%,0.16)] text-black group-hover:text-white rounded-lg">
              <CustomersIcon />
            </span>
            <div className="flex space-x-[7px] text-[hsla(230,10%,77%,1)] group-hover:text-white">
              <span className="text-xs">This Week</span>
              <RxCaretDown />
            </div>
          </div>
          <div className="flex items-center group-hover:text-white">
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                Customers
              </p>
              <p className="text-xl font-medium flex items-center">
                1,250{" "}
                <span className="text-green ml-[7px] text-xs group-hover:text-white">
                  +15.80%
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                Active
              </p>
              <p className="text-xl font-medium flex items-center">
                1,180{" "}
                <span className="text-green ml-[7px] text-xs group-hover:text-white">
                  85%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="group transition rounded-lg bg-white hover:bg-primary px-[15px] py-[11px] h-full flex flex-col justify-between">
          <div className="flex w-full justify-between items-center">
            <span className="h-9 w-9 grid place-items-center bg-[hsla(32,100%,78%,0.16)] group-hover:bg-[hsla(0,0%,100%,0.16)] text-primary group-hover:text-white rounded-lg">
              <OrdersIcon />
            </span>
            <div className="flex space-x-[7px] text-[hsla(230,10%,77%,1)] group-hover:text-white">
              <span className="text-xs">This Week</span>
              <RxCaretDown />
            </div>
          </div>
          <div className="flex items-center group-hover:text-white">
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                All Orders
              </p>
              <p className="text-xl font-medium flex items-center">450</p>
            </div>
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                Pending
              </p>
              <p className="text-xl font-medium flex items-center">5</p>
            </div>
            <div className="flex flex-col space-y-2 grow">
              <p className="text-sm text-gray-text group-hover:text-white">
                Completed
              </p>
              <p className="text-xl font-medium flex items-center">445</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grow mt-[19px]">
        <div className="grid grid-cols-3 gap-[19px] h-full w-full">
          <div className="col-span-2">
            <div className="grid grid-cols-2 grid-rows-[145px_145px] gap-[19px]">
              <div className="col-span-1 row-span-2 group transition rounded-lg bg-white hover:bg-primary px-[15px] py-[11px]">
                <div className="flex items-center justify-between">
                  <p>Marketing</p>
                  <div className="flex space-x-[7px] text-[hsla(230,10%,77%,1)] group-hover:text-white">
                    <span className="text-xs">This Week</span>
                    <RxCaretDown />
                  </div>
                </div>
                <div className="flex justify-between">
                  {[
                    {
                      dotColor: "bg-primary",
                      text: "Acquisition",
                    },
                    {
                      dotColor: "bg-primary",
                      text: "Purchase",
                    },
                    {
                      dotColor: "bg-yellow",
                      text: "Retention",
                    },
                  ].map(({ dotColor, text }) => (
                    <span key={text} className="flex space-x-1.5">
                      <span className={cn("h-2 w-2", dotColor)}></span>
                      <span>{text}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="group transition rounded-lg bg-white hover:bg-primary px-[15px] py-[11px] flex flex-col justify-between">
                <div className="flex w-full justify-between items-center">
                  <span className="h-9 w-9 grid place-items-center bg-[hsla(230,85%,64%,0.12)] group-hover:bg-[hsla(0,0%,100%,0.16)] text-primary group-hover:text-white rounded-lg">
                    <FolderIcon />
                  </span>
                </div>
                <div className="flex items-center group-hover:text-white">
                  <div className="flex flex-col space-y-2 grow">
                    <p className="text-sm text-gray-text group-hover:text-white">
                      All Products
                    </p>
                    <p className="text-xl font-medium">45</p>
                  </div>
                  <div className="flex flex-col space-y-2 grow">
                    <p className="text-sm text-gray-text group-hover:text-white">
                      Active
                    </p>
                    <p className="text-xl font-medium flex items-center">
                      32{" "}
                      <span className="text-green ml-[7px] text-xs group-hover:text-white">
                        +24%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="group transition rounded-lg bg-white hover:bg-primary px-[15px] py-[11px] flex flex-col justify-between">
                <div className="flex w-full justify-between items-center">
                  <span className="h-9 w-9 grid place-items-center bg-[bg-[hsla(32,100%,78%,0.16)]] group-hover:bg-[hsla(0,0%,100%,0.16)] text-primary group-hover:text-white rounded-lg">
                    <CartIcon />
                  </span>
                </div>
                <div className="flex items-center group-hover:text-white">
                  <div className="flex flex-col space-y-2 grow">
                    <p className="text-sm text-[hsla(0,52%,59%,1)] group-hover:text-white">
                      Abandoned Cart
                    </p>
                    <p className="text-xl font-medium">
                      20%{" "}
                      <span className="text-green ml-[7px] text-xs group-hover:text-white">
                        +0.00%
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 grow">
                    <p className="text-sm text-gray-text group-hover:text-white">
                      Customers
                    </p>
                    <p className="text-xl font-medium flex items-center">30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-[19px] px-5 py-4 rounded-lg bg-white min-h-[400px]">
              <div className="flex justify-between items-center">
                <div className="flex space-x-5 items-center">
                  <p className="font-medium">Summary</p>
                  <div className="flex rounded-lg items-center text-sm px-2.5 py-1 space-x-5 text-primary bg-primary/[0.20]">
                    <span>Sales</span>
                    <RxCaretDown />
                  </div>
                </div>
                <div className="flex space-x-[7px] text-foreground">
                  <span className="text-xs">Last 7 days</span>
                  <RxCaretDown />
                </div>
              </div>
            </div>
          </div>

          <div className="h-full max-h-full overflow-auto rounded-lg bg-white p-5">
            <p className="font-medium">Recent Orders</p>
            <div className="flex flex-col mt-3">
              {Array.from({ length: 8 }).map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="w-full flex py-3 border-b border-[hsla(230,36%,96%,1)]">
                      <Image
                        src="/assets/images/iphone-1.png"
                        height={49}
                        width={49}
                        alt="iphone1"
                        className="mr-[14px]"
                      />
                      <div className="flex grow justify-between">
                        <div className="flex flex-col">
                          <p className="text-sm mb-[10px]">iPhone 13</p>
                          <p className="text-sm font-medium">₦730,000.00 x 1</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-sm mb-[10px] text-gray">
                            12 Sept 2022
                          </p>
                          <p className="text-xs rounded-full text-[hsla(137,32%,47%,1)] bg-[hsla(158,49%,39%,0.12)] py-0.5 px-4">
                            Completed
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex py-3 border-b border-[hsla(230,36%,96%,1)]">
                      <Image
                        src="/assets/images/iphone-2.png"
                        height={49}
                        width={49}
                        alt="iphone2"
                        className="mr-3.5"
                      />
                      <div className="flex grow justify-between">
                        <div className="flex flex-col">
                          <p className="text-sm mb-2.5">iPhone 13</p>
                          <p className="text-sm font-medium">₦730,000.00 x 1</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-sm mb-3 text-gray">12 Sept 2022</p>
                          <p className="text-xs rounded-full text-[hsla(0,52%,59%,1)] bg-[hsla(4,87%,71%,0.12)] py-0.5 px-4">
                            Pending
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
