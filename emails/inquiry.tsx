import React from "react";
// import {
//     Body,
//     Button,
//     Container,
//     Head,
//     Heading,
//     Html,
//     Preview,
//     Text,
//     Tailwind,
//     Section,
//     Link,
// } from "@react-email/components";
import { siteConfig } from "@/config/site";


interface InquiryEmailProps {
    ownerName: string | null | undefined;
    userEmail: string | null | undefined;
    userInquiry: string | null | undefined;
    chatbotName: string | null | undefined;
    chatbotId: string | null | undefined;
}

export default function InquiryEmail({
    ownerName,
    userEmail,
    userInquiry,
    chatbotName,
    chatbotId,
}: {
    ownerName: string | null | undefined;
    userEmail: string | null | undefined;
    userInquiry: string | null | undefined;
    chatbotName: string | null | undefined;
    chatbotId: string | null | undefined;
}) {
    const previewText = `New User Inquiry for ${chatbotName}!`;

    return (
        <div className="bg-gray-50 min-h-screen flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
                {/* Preview text */}
                <p className="hidden">{previewText}</p>

                {/* Header */}
                <h1 className="text-2xl font-semibold text-center text-blue-500">
                    New User Inquiry from {userEmail}!
                </h1>

                {/* Greeting */}
                <p className="text-sm mt-4">
                    Hello <span className="font-medium">{ownerName}</span>,
                </p>

                {/* Message */}
                <p className="text-sm mt-2">
                    You have received a new inquiry from a user. Here are the details:
                </p>

                {/* Inquiry Details */}
                <div className="mt-4 text-sm">
                    <p>
                        <span className="font-semibold">Chatbot Name:</span> {chatbotName}
                    </p>
                    <p>
                        <span className="font-semibold">User Email:</span> {userEmail}
                    </p>
                    <p>
                        <span className="font-semibold">Inquiry Message:</span> {userInquiry}
                    </p>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-6">
                    <a
                        href={`${siteConfig.url}dashboard/chatbots/${chatbotId}/inquiries`}
                        className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Open Inquiries Dashboard
                    </a>
                </div>

                {/* Closing */}
                <p className="text-sm mt-6">
                    Cheers,
                    <br />
                    The {siteConfig.name} Team
                </p>

                {/* Footer */}
                <p className="text-xs text-gray-400 text-center mt-6">
                    You are subscribed to emails for inquiry notifications. To manage your communication preferences, click{" "}
                    <a
                        href={`${siteConfig.url}dashboard/settings`}
                        className="text-blue-500 underline"
                    >
                        here
                    </a>.
                </p>
            </div>
        </div>
    );
}
