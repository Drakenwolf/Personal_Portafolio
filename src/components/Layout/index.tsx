import React, { useState } from "react"
import Sidebar from "../Sidebar"
type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const pages = [
  "home",
  "biography",
  "projects",
  "services",
  "blog",
  "contact",
]
export type pageType =
  | "home"
  | "biography"
  | "projects"
  | "services"
  | "blog"
  | "contact"

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const [current, setCurrent] = useState<pageType>("home")
  const toggleContent = isOpen ? "pl-96" : "pl-0"
  return (
    <>
      <main>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          current={current}
          setCurrent={setCurrent}
        />
        <div
          className={`overflow-y-scroll snap snap-y snap-mandatory w-full transition duration-1000 ${toggleContent}`}
        >
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
