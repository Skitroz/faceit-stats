"use client";

import Link from "next/link"
import {
    LineChart,
    LogIn,
    Trophy,
    Video,
    User,
    BarChart,
} from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"

export default function Nav() {
    return (
        <TooltipProvider>
            <aside className="fixed inset-y-0 left-0 z-50 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <div className="flex flex-col gap-6">
                        <Link
                            href="/"
                            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="h-4 w-4 transition-all group-hover:scale-110"><path d="M20 5.125c0-.134-.142-.167-.198-.067-1.815 3.317-2.864 5.193-3.77 6.934H5.144c-.141 0-.198.201-.085.268 4.508 2.01 11.028 5.059 14.685 6.733.085.034.255-.067.255-.134V5.125z" fill="#F50"></path></svg>
                        </Link>
                        <div className="border-black border-b"></div>
                    </div>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Trophy className="h-5 w-5" />
                                <span className="sr-only">Classement</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Classement</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Video className="h-5 w-5" />
                                <span className="sr-only">Parties en cours</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Parties en cours</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <BarChart className="h-5 w-5" />
                                <span className="sr-only">Lobby stats</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Lobby stats</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <User className="h-5 w-5" />
                                <span className="sr-only">Chercher un joueur</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Chercher un joueur</TooltipContent>
                    </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <LogIn className="h-5 w-5" />
                                <span className="sr-only">Connexion</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Connexion</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
        </TooltipProvider>
    )
}
