"use client";

import { ConversationsIcon } from "@/components/icons/conversations-icon";
import { CustomersIcon } from "@/components/icons/customers-icon";
import { DashboardIcon } from "@/components/icons/dashboard-icon";
import { InventoryIcon } from "@/components/icons/inventory-icon";
import { Logo } from "@/components/icons/logo";
import { NotificationsIcon } from "@/components/icons/notifications-icon";
import { OrdersIcon } from "@/components/icons/orders-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useResponsive } from "@/lib/hooks/use-responsive";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";

const Template = ({ children }: { children: ReactNode }) => {
  const currentPath = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isBigScreen } = useResponsive() || {};

  useEffect(() => {
    if (typeof isBigScreen !== "undefined" && !isBigScreen) {
      setIsSidebarOpen(isBigScreen);
    }
  }, [isBigScreen]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const showFullItem = isSidebarOpen || !isBigScreen;

  const currentRoute = Object.values(ROUTES).find(
    (route) => route.path === currentPath
  );

  return (
    <main className="flex h-screen max-h-screen min-h-screen min-w-screen relative overflow-hidden">
      <div
        className={cn(
          "fixed lg:relative h-full min-h-full max-h-full bg-white shrink-0 z-50",
          showFullItem ? "w-[240px]" : "w-auto",
          {
            "-translate-x-full": !isSidebarOpen && !isBigScreen,
          }
        )}
      >
        <div
          className={cn(
            "flex flex-col h-full min-h-full max-h-full overflow-hidden",
            showFullItem ? "px-8" : "px-4"
          )}
        >
          <Link href={"#"} className="mt-6 flex items-center">
            <Logo width={52} height={52} />
            {showFullItem ? (
              <span className="text-black text-xl font-bold ml-[5px]">
                Metrix
              </span>
            ) : null}
          </Link>

          <nav className={cn("flex flex-col space-y-3 mt-[62px]")}>
            {[
              {
                Icon: DashboardIcon,
                text: "Dashboard",
                href: ROUTES.DASHBOARD.path,
              },
              {
                Icon: OrdersIcon,
                text: "Orders",
                href: ROUTES.ORDERS.path,
                count: 3,
              },
              {
                Icon: CustomersIcon,
                text: "Customers",
                href: ROUTES.CUSTOMERS.path,
              },
              {
                Icon: InventoryIcon,
                text: "Inventory",
                href: ROUTES.INVENTORY.path,
              },
              {
                Icon: ConversationsIcon,
                text: "Conversations",
                href: ROUTES.CONVERSATIONS.path,
                count: 16,
              },
              {
                Icon: SettingsIcon,
                text: "Settings",
                href: ROUTES.SETTINGS.path,
              },
            ].map(({ Icon, text, href, count }) => {
              const isActive = currentPath === href;
              return (
                <Link
                  href={href}
                  key={text}
                  className={cn(
                    "flex group items-center rounded-xl text-[hsla(230,5%,34%,1)] hover:bg-primary hover:text-white cursor-pointers px-3.5 py-3",
                    isActive ? "text-white bg-primary" : ""
                  )}
                  onClick={() => {
                    if (!isBigScreen) {
                      closeSidebar();
                    }
                  }}
                >
                  <Icon className="shrink-0" />
                  {showFullItem ? (
                    <div className="flex items-center ml-4 space-x-3">
                      <span
                        className={cn("text-sm", {
                          "text-white": isActive,
                        })}
                      >
                        {text}
                      </span>
                      {count ? (
                        <span className="w-6 h-6 grid place-items-center text-xs rounded-full text-[hsla(230,9%,12%,1)] bg-yellow">
                          {count}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
        <Button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className={cn(
            "absolute rounded-full p-0 h-[40px] w-[40px] right-0 translate-x-2/4 top-[10px] z-50",
            {
              hidden: !isSidebarOpen && !isBigScreen,
            }
          )}
        >
          {isSidebarOpen ? (
            <BsArrowBarLeft className="text-white w-[18px] h-[18px]" />
          ) : (
            <BsArrowBarRight className="text-white w-[18px] h-[18px]" />
          )}
        </Button>
      </div>
      <div className="grid grid-rows-[64px_24px_1fr] grow h-full min-h-full max-h-full relative">
        <div
          className={cn(
            "flex sticky top-0 bg-background min-h-[64px] h-16 max-h-[64px] pl-[21px] pr-[14px] items-center z-40 backdrop-blur justify-between"
          )}
        >
          {!isSidebarOpen ? (
            <div className="inline-flex">
              <Link href={ROUTES.DASHBOARD.path} className="lg:hidden">
                <Logo width={36} height={36} />
              </Link>
              <Button
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                className="rounded-full bg-transparent inline-flex p-0 border border-placeholder lg:hidden h-[40px] w-[40px] ml-2.5"
              >
                {isSidebarOpen ? (
                  <BsArrowBarLeft className="text-placeholder hover:text-white w-[18px] h-[18px]" />
                ) : (
                  <BsArrowBarRight className="text-placeholder hover:text-white w-[18px] h-[18px]" />
                )}
              </Button>
            </div>
          ) : null}
          <div className="flex w-full justify-between">
            {currentRoute ? (
              <p className="font-medium text-xl hidden md:inline">
                {currentRoute.title}
              </p>
            ) : null}

            <div className="space-x-5 flex items-center ml-auto">
              <div className="flex rounded-lg px-3 py-1.5 space-x-5 text-[hsla(230,9%,12%,1)] bg-yellow-accent text-sm">
                <span>Nanny’s Shop</span>
                <RxCaretDown />
              </div>
              <NotificationsIcon />
              <Image
                src="/assets/images/profile.png"
                height={32}
                width={32}
                alt="profile"
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
        <div className="pl-[21px]">stuff</div>
        <ScrollArea className="bg-[hsla(230,33%,97%,1)] grow px-[19px] pt-[28px] pb-5 flex flex-col overflow-y-auto">
          {children}
        </ScrollArea>
      </div>
    </main>
  );
};

export default Template;
