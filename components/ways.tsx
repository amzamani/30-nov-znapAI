import { Button } from "@/components/ui/button"
import { Code2, MessageSquare, Globe } from 'lucide-react'

const features = [
  {
    category: "Dive into your data",
    title: "Internal Chat",
    description: "Chat with your data privately to get all the information you need like answers, summaries, reports.",
    buttonText: "Try the demo",
    icon: <MessageSquare className="w-4 h-4 ml-2" />,
  },
  {
    category: "Build great apps",
    title: "Powerful APIs",
    description: "Use our APIs to create your own applications. Create chatbots, upload data sources, send messages and get the answers. All via the APIs.",
    buttonText: "Read the docs",
    icon: <Code2 className="w-4 h-4 ml-2" />,
  },
  {
    category: "Assist your users",
    title: "Website Widget",
    description: "Embed your chatbot into your website to support your customers. A 24/7 tireless support agent.",
    buttonText: "Open the widget",
    icon: <Globe className="w-4 h-4 ml-2" />,
  },
];

export function FeatureSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">Three ways to use it</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="mb-4">
                <div className="text-red-500 uppercase text-sm font-semibold tracking-wide mb-2">{feature.category}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
              </div>
              <div className="mt-auto">
                <Button variant="link" className="p-0 h-auto font-semibold">
                  {feature.buttonText}
                  {feature.icon}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

