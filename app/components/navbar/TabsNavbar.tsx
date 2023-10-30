"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useMediaQuery } from "@react-hook/media-query";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CircularProgress } from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";

import Link from "next/link";
import { Logo } from "./SvgLogo";

export default function TabsNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isAboveLG = useMediaQuery("(min-width: 1024px)");
  const pathname = usePathname();

  // Split the pathname by '/' to get parts
  const pathParts = pathname.split("/");
  const firstPart = pathParts.length > 1 ? `/` + pathParts[1] : `/` + pathname;

  const { push } = useRouter();

  useEffect(() => {
    if (isAboveLG) {
      setIsOpen(false);
    }
  }, [isAboveLG]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // When the firstPart changes, set loading to true
    setLoading(true);

    // Simulate an asynchronous operation (e.g., API call) here
    // Once the operation is completed, set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 100); // You can adjust the timeout as needed
  }, [firstPart]); // Listen for changes in firstPart

  if (!mounted) return null;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Math", href: "/math" },
    { label: "Science", href: "/science" },
    { label: "Apps", href: "/apps" },
    { label: "Resume", href: "/resume" },
    { label: "More", href: "/more" },
  ];

  const handleTabSelection = (key: any) => {
    if (!loading && key != firstPart) {
      setLoading(true)
    }
    push(key);
  };

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isOpen}
      className={`fixed w-full h-20 z-[100]`}
    >
      <NavbarContent className="lg:hidden">
        <Button
          style={{ zIndex: 2, display: "flex" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <NavbarMenuToggle style={{ pointerEvents: "none" }} />
        </Button>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4">
        <NavbarBrand>
          <Link color="foreground" href="/home">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4">
        <Tabs
          aria-label="Dynamic tabs"
          size={"lg"}
          radius="full"
          items={menuItems}
          onSelectionChange={handleTabSelection}
          selectedKey={firstPart}
        >
          {(item) => <Tab key={item.href} title={item.label}></Tab>}
        </Tabs>

      </NavbarContent>
      <NavbarContent justify="end">
      {loading && <CircularProgress size="md" color="secondary" aria-label="Loading..." />}

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-5" key={`${item}-${index}`}>
            <Link
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full hover:text-fuchsia-600"
              href={item.href}
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
