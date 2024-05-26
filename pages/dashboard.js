import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Bitcoin, BookCopy, CrossIcon, File, GitGraph, Github, Gitlab, Network, Settings, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSession, signIn, signOut } from "next-auth/react"
import AccessToken from "@/components/access-token"
import { useState } from "react"
import { MultiStepLoader } from "@/components/multi-step-loader"
import { X } from "lucide-react"

export default function dashboard() {
    const { data: session } = useSession()

    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r border-gray-600 border-opacity-50  bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b border-gray-600 border-opacity-50  px-4 lg:h-[60px] lg:px-6">
                            <Link className="flex items-center gap-2 font-semibold" href="#">
                                <span className="text-[#D4FB84] title text-3xl">GitVault</span>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-5 mt-5">
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    href="#"
                                >
                                    <BookCopy className="h-4 w-4" />
                                    Repositories
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    href="#"
                                >
                                    <GitGraph className="h-4 w-4" />
                                    Activity
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    href="#"
                                >
                                    <Bitcoin className="h-4 w-4" />
                                    Sponsor
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    href="#"
                                >
                                    <Users className="h-4 w-4" />
                                    Organizations
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    href="#"
                                >
                                    <Settings className="h-4 w-4" />
                                    Settings
                                </Link>
                            </nav>
                        </div>
                        <div className="mt-auto p-4">
                            <Card x-chunk="dashboard-02-chunk-0">
                                <CardHeader className="p-2 pt-0 md:p-4">
                                    <CardTitle className="mb-2">Upgrade</CardTitle>
                                    <CardDescription>Get more decentralised storage for your repositories</CardDescription>
                                </CardHeader>
                                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                    <Button className="w-full bg-[#D4FB84]" size="sm">
                                        Upgrade
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 border-b border-gray-600 opacity-50  bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="shrink-0 md:hidden" size="icon" variant="outline">
                                    <MenuIcon className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="flex flex-col" side="left">
                                <nav className="grid gap-2 text-lg font-medium">
                                    <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
                                        <Package2Icon className="h-6 w-6" />
                                        <span className="sr-only">Acme Inc</span>
                                    </Link>
                                    <Link
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                        href="#"
                                    >
                                        <HomeIcon className="h-5 w-5" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                        href="#"
                                    >
                                        <ShoppingCartIcon className="h-5 w-5" />
                                        Orders
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                                    </Link>
                                    <Link
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                        href="#"
                                    >
                                        <PackageIcon className="h-5 w-5" />
                                        Products
                                    </Link>
                                    <Link
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                        href="#"
                                    >
                                        <UsersIcon className="h-5 w-5" />
                                        Customers
                                    </Link>
                                    <Link
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                        href="#"
                                    >
                                        <LineChartIcon className="h-5 w-5" />
                                        Analytics
                                    </Link>
                                </nav>
                                <div className="mt-auto">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Upgrade to Pro</CardTitle>
                                            <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button className="w-full" size="sm">
                                                Upgrade
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                        placeholder="Search products..."
                                        type="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="rounded-full" size="icon" variant="secondary">
                                    <CircleUserIcon className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Storage limit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2">
                                        <span className="text-4xl font-bold">0</span>
                                        <span className="text-sm text-muted-foreground">MB</span>
                                    </div>
                                    <Progress className="mt-5" value={0} />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="mb-3">IPFS remote</CardTitle>
                                    <CardDescription className="">Your IPFS remote has been succesfully connected</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full mt-3">Connected</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="mb-3">Waku node</CardTitle>
                                    <CardDescription className="">Your Waku node has been succesfully started</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full mt-3">Connected</Button>
                                </CardContent>
                            </Card>
                        </div>
                        <h1 className="title text-5xl">Repositories</h1>
                        <Tabs defaultValue="github" className="">
                            <TabsList className="mb-5">
                                <TabsTrigger value="local">Local</TabsTrigger>
                                <TabsTrigger value="github">GitHub</TabsTrigger>
                                <TabsTrigger value="gitlab">GitLab</TabsTrigger>
                            </TabsList>
                            <TabsContent value="local" className="w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Card className="w-full">
                                        <CardHeader className="grid  items-start gap-4 space-y-0">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-center mb-5">
                                                    <CardTitle className=" text-lg">shadcn/ui</CardTitle>
                                                    <button>
                                                        <Network className="h-5 w-5" />
                                                    </button>
                                                </div>
                                                <CardDescription>
                                                    Beautifully designed components that you can copy and paste into your apps.
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400 items-center justify-between">
                                                <div className="flex space-x-4">

                                                    <div className="flex items-center">
                                                        <CircleDotIcon className="mr-1 h-3 w-3 fill-gray-900 text-gray-900" />
                                                        TypeScript
                                                    </div>
                                                    <div>Updated April 2023</div>
                                                </div>
                                                <button className="border border-gray-600 border-opacity-50 rounded-md p-1 px-2 text-black bg-[#D4FB84]">Backup</button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="w-full">
                                        <CardHeader className="grid  items-start gap-4 space-y-0">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-center mb-5">
                                                    <CardTitle className=" text-lg">shadcn/ui</CardTitle>
                                                    <button>
                                                        <Network className="h-5 w-5" />
                                                    </button>
                                                </div>
                                                <CardDescription>
                                                    Beautifully designed components that you can copy and paste into your apps.
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400 items-center justify-between">
                                                <div className="flex space-x-4">

                                                    <div className="flex items-center">
                                                        <CircleDotIcon className="mr-1 h-3 w-3 fill-gray-900 text-gray-900" />
                                                        TypeScript
                                                    </div>
                                                    <div>Updated April 2023</div>
                                                </div>
                                                <button className="border border-gray-600 border-opacity-50 rounded-md p-1 px-2 text-black bg-[#D4FB84]">Backup</button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="w-full">
                                        <CardHeader className="grid  items-start gap-4 space-y-0">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-center mb-5">
                                                    <CardTitle className=" text-lg">shadcn/ui</CardTitle>
                                                    <button>
                                                        <Network className="h-5 w-5" />
                                                    </button>
                                                </div>
                                                <CardDescription>
                                                    Beautifully designed components that you can copy and paste into your apps.
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400 items-center justify-between">
                                                <div className="flex space-x-4">

                                                    <div className="flex items-center">
                                                        <CircleDotIcon className="mr-1 h-3 w-3 fill-gray-900 text-gray-900" />
                                                        TypeScript
                                                    </div>
                                                    <div>Updated April 2023</div>
                                                </div>
                                                <button className="border border-gray-600 border-opacity-50 rounded-md p-1 px-2 text-black bg-[#D4FB84]">Backup</button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="github" className="w-full">
                                {session ? <div>
                                    <AccessToken />
                                </div> :
                                    <div className="flex flex-1 items-center justify-center rounded-lg border border-gray-600 border-opacity-50 border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
                                        <div className="flex flex-col items-center gap-1 text-center p-20 py-44">
                                            <h3 className="text-2xl font-bold tracking-tight mb-5">
                                                Login with GitHub to view your repositories
                                            </h3>
                                            <p className="text-sm text-muted-foreground opacity-50">
                                                Don't worry - we do not store your access token or your personal data
                                            </p>
                                            <Button className="mt-14" onClick={() => signIn("github", null, { scope: "repo workflow" })}>
                                                <Github />
                                                <h1 className="ml-2">
                                                    Sign in with GitHub</h1>
                                            </Button>
                                        </div>
                                    </div>
                                }
                            </TabsContent>
                            <TabsContent value="gitlab" className="w-full">
                                <div
                                    className="flex flex-1 items-center justify-center rounded-lg border border-gray-600 border-opacity-50 border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
                                >
                                    <div className="flex flex-col items-center gap-1 text-center p-20 py-44">
                                        <h3 className="text-2xl font-bold tracking-tight mb-5">
                                            Login with GitLab to view your repositories
                                        </h3>
                                        <p className="text-sm text-muted-foreground opacity-50">
                                            Don't worry - we do not store your access token or your personal data
                                        </p>
                                        <Button className="mt-14 cursor-not-allowed">
                                            <Gitlab />
                                            <h1 className="ml-2">
                                                Sign in with GitLab</h1>
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
            </div>
        </>
    )
}


function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function CircleDotIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="1" />
        </svg>
    )
}


function CircleUserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function PackageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}