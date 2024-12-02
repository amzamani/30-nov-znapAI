import { Metadata } from "next";

export function constructMetadata({
    title = `ZnapAI - Build your own chatbot in a Znap`,
    description = `A platform for building chatbot. We offer seamless integration for effortlessly incorporating a chatbot into your website.`,
    image = "https://www.znapai.com/dashboard.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/logo-32-32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/logo-32-32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/logo-32-32.png",
        },
    ],
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            ...(image && {
                images: [
                    {
                        url: image,
                    },
                ],
            }),
        },
        twitter: {
            title,
            description,
            ...(image && {
                card: "summary_large_image",
                images: [image],
            }),
            creator: "@oassistantgpt",
        },
        icons,
        metadataBase: new URL('https://www.znapai.com'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}