import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { LogInIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function LoginButton() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
            <div className="flex items-center justify-between">
                <h1 className="text-xl">
                Howdy, {session.user.name}
                </h1>
                <div className="space-y-2 items-center">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={session.user.image} />
                    <AvatarFallback>GH</AvatarFallback>
                </Avatar>
                <div>
                </div>
                <div className="flex justify-center">
                <button onClick={() => signOut()}>Sign out</button>
                </div>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="">
            Not signed in <br />
            <Button variant="outline" onClick={() => signIn("github", null, { scope: "repo workflow" })}>
                <LogInIcon className="mr-2 h-4 w-4" />
                Signin with GitHub</Button>
        </div>
    )
}