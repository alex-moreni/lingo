"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import { Button } from "./ui/button"

type Props = {
  label: string
  iconSrc: string
  href: string
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Button
      variant={isActive ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          width={32}
          height={32}
          className="mr-5"
        />{" "}
        {label}
      </Link>
    </Button>
  )
}
