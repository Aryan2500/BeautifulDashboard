import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  PencilIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import NavigationLink from "./NavigationLink"
import { NavContext } from "./Navigation"
import { useContext, useEffect, useRef } from "react"


const variants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
}

interface Props {
  selectedProject: string
  isOpen: boolean
  setSelectedProject: (project: string | null) => void
}

const Level3Navigation = ({
  selectedProject,
  isOpen,
  setSelectedProject,
}: Props) => {


  const navRef = useRef();
  const handleClickOutside = (event: Event) => {
    console.log(navRef.current)
    console.log(event.target)

    if (navRef.current && !navRef.current.contains(event.target)) {
      setSelectedProject(null)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <motion.nav
      ref={navRef}
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className={`h-full flex flex-col gap-8 w-64 absolute bg-neutral-900 ml-0  ${isOpen ? "l3nav" : "left-64"
        } border-r border-neutral-800 p-5`}
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <h1 className="tracking-wide text-neutral-100 text-lg">
          {selectedProject}
        </h1>
        <button onClick={() => setSelectedProject(null)}>
          <XMarkIcon className="w-8 stroke-neutral-400" />
        </button>
      </div>

      <div className="flex flex-col gap-3 overflow-y-auto hide-scrollbar">
        <NavigationLink name="Progress">
          <ArrowTrendingUpIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink name="Team Members">
          <UserGroupIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink name="In Review">
          <PencilIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink name="In Progress">
          <BoltIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink name="Up Next">
          <CursorArrowRaysIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink name="Project Settings">
          <AdjustmentsHorizontalIcon className="stroke-[0.75] stroke-inherit min-w-8 w-8" />
        </NavigationLink>
      </div>

    </motion.nav>
  )
}

export default Level3Navigation
