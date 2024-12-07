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


interface WelcomeEmailProps {
    name: string | null | undefined;
}

export default function WelcomeEmail({ name }: { name: string | null | undefined }) {
    const previewText = `Welcome to ${siteConfig.name}, ${name}!`;

    return (
        <div className="bg-gray-50 min-h-screen flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
                {/* Preview text */}
                <p className="hidden">{previewText}</p>
                
                {/* Header */}
                <h1 className="text-2xl font-semibold text-center text-blue-500">
                    Welcome to {siteConfig.name}!
                </h1>
                
                {/* Greeting */}
                <p className="text-sm mt-4">
                    Hello <span className="font-medium">{name}</span>,
                </p>
                
                {/* Message */}
                <p className="text-sm mt-2">
                    We're excited to have you onboard at <span className="font-medium">{siteConfig.name}</span>. We
                    hope you enjoy your journey with us. If you have any questions or
                    need assistance, feel free to reach out.
                </p>
                
                {/* Contact */}
                <p className="text-sm mt-2">
                    You can contact us directly at{" "}
                    <a href="mailto:contact@znap.in" className="text-blue-500 underline">
                        contact@znap.in
                    </a>.
                </p>
                
                {/* Button */}
                <div className="text-center mt-6">
                    <a
                        href={`${siteConfig.url}dashboard/`}
                        className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Get Started
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
                    You are subscribed to marketing emails. To manage your communication preferences, click{" "}
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
