"use client"
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import ThemeSwitcher from './ThemeSwitcher'
import { useMediaQuery } from '@react-hook/media-query';
import { usePathname } from 'next/navigation';

import Link from "next/link";
import { Logo } from "./SvgLogo";

export default function NextNavbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const isAboveLG = useMediaQuery('(min-width: 1024px)');

    const pathname = usePathname();

    useEffect(() => {
        if (isAboveLG) {
            setIsOpen(false);
        }
    }, [isAboveLG])

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;


    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Math', href: '/math' },
        { label: 'Science', href: '/science' },
        { label: 'Apps', href: '/apps' },
        { label: 'More', href: '/more' },
        { label: 'Resume', href: '/resume' },
    ];

    return (
        <Navbar isBordered
            position="sticky"
            isBlurred={false}
            isMenuOpen={isOpen}
            className={`fixed w-full h-20 z-[100]`}
        >
            <NavbarContent className='lg:hidden'>
                <Button
                    style={{ zIndex: 2, display: 'flex' }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <NavbarMenuToggle
                        style={{ pointerEvents: "none" }}
                    />
                </Button>

            </NavbarContent>
            <NavbarContent className="hidden lg:flex gap-4">
                <NavbarBrand>
                    <Link color="foreground" href="/home">
                        <Logo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === '/home'}>  
                    <Link color="foreground" href="/home">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/about'}>
                    <Link href="/about" aria-current="page">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/math'}>
                    <Link color="foreground" href="/math">
                        Math
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/science'}>
                    <Link color="foreground" href="/science">
                        Science
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/apps'}>
                    <Link color="foreground" href="/apps">
                        Apps
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/more'}>
                    <Link color="foreground" href="/more">
                        More
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/resume'}>
                    <Link color="foreground" href="/resume">
                        Resume
                    </Link>
                </NavbarItem>
            </NavbarContent>
            
            <NavbarContent justify="end">
                <NavbarItem >
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className='mt-5' key={`${item}-${index}`}>
                        <Link
                            style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                fontFamily:
                                    'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
                            }}
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
