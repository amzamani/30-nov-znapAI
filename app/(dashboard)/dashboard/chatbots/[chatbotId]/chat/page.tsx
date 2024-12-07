import { getCurrentUser } from "@/lib/session"
import { notFound, redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { Chatbot, User } from "@prisma/client"
import { db } from "@/lib/db"
import Link from "next/link"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

interface ChatbotSettingsProps {
    params: { chatbotId: string }
}

async function getChatbotForUser(chatbotId: Chatbot["id"], userId: User["id"]) {
    return await db.chatbot.findFirst({
        where: {
            id: chatbotId,
            userId: userId,
        },
    })
}

export default async function ChatbotPage({ params }: ChatbotSettingsProps) {

    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    const chatbot = await getChatbotForUser(params.chatbotId, user.id)

    if (!chatbot) {
        notFound()
    }

    return (
        <DashboardShell>
            <DashboardHeader heading="Chat" text="Start chatting with your chatbot">
                <Link
                    href={`/dashboard/chatbots`}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "md:left-8 md:top-8"
                    )}
                >
                    <>
                        <Icons.chevronLeft className="mr-2 h-4 w-4" />
                        Back
                    </>
                </Link>
            </DashboardHeader>
            <div className="mb-6 text-center">
                <span className="text-gray-700">
                    Open in fullscreen in a new window, by clicking{" "}
                    <Link
                        href={`${siteConfig.url}embed/${chatbot.id}/window?chatbox=false`}
                        target="_blank"
                        className="underline text-blue-600 hover:text-blue-800"
                    >
                        here
                    </Link>
                </span>
            </div>
            <div className="h-svh">
                <iframe
                    src={`/embed/${chatbot.id}/window?chatbox=false`}
                    className="overflow-hidden border border-1 rounded-lg shadow-lg w-full h-4/6"
                    allowFullScreen allow="clipboard-read; clipboard-write"
                ></iframe>
            </div>
        </DashboardShell >
    )
}