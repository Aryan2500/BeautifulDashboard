import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  PencilIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"
import NavigationLink from "./NavigationLink"

import Level3Link from "./Level3Link"
import Level3Navigation from "./Level3Navigation"
import { useEffect, useState } from "react"

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

const ProjectNavigation = ({
  selectedProject,
  isOpen,
  setSelectedProject,
}: Props) => {
  const [isOpenl3, setIsOpenl3] = useState(false)

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      setIsOpenl3(!isOpenl3)
    } else {
      setIsOpenl3(!isOpenl3)
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        variants={variants}
        initial="close"
        animate="open"
        exit="close"
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={`h-full flex flex-col gap-8 w-64 absolute bg-neutral-900 ml-0  ${isOpen ? "left-64" : "left-20"
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
        <div className="flex flex-col gap-5">
          <h1 className="tracking-wide text-neutral-300">Team Members</h1>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-rose-800 bg-rose-200/70" />
            <p className="tracking-wide text-neutral-400">Steve Jobs</p>
          </a>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-emerald-800 bg-emerald-200/70" />
            <p className="tracking-wide text-neutral-400">Bill Gates</p>
          </a>
          <a href="#" className="flex flex-row gap-3 place-items-center">
            <UserIcon className="w-8 p-1 rounded-full stroke-2 stroke-indigo-800 bg-indigo-200/70" />
            <p className="tracking-wide text-neutral-400">Jeff Bezos</p>
          </a>

          <Level3Link name="Secret Project Nest" setSelectedProject={setSelectedMenu}  >
            <div className="min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700" />
          </Level3Link>
        </div>
      </motion.nav>

      <AnimatePresence>
        {selectedMenu && (
          <Level3Navigation
            selectedProject={selectedMenu}
            setSelectedProject={setSelectedMenu}
            isOpen={isOpenl3}
          />
        )}
      </AnimatePresence>
    </>



  )
}

export default ProjectNavigation
