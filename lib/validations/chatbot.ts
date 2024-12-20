import * as z from "zod"

export const chatbotSchema = z.object({
    name: z.string().min(3).max(50),
    openAIKey: z.string().optional(),
    prompt: z.string().min(1),
    welcomeMessage: z.string().min(1),
    chatbotErrorMessage: z.string().min(1),
    modelId: z.string().optional(),
    files: z.array(z.string()),
    rightToLeftLanguage: z.boolean().default(false),
})
