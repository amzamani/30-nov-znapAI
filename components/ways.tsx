import { Button } from "@/components/ui/button"
import { Code2, MessageSquare, Globe } from 'lucide-react'

const features = [
  {
    category: "Dive into your data",
    title: "Internal Chat",
    description: "Create an AI-powered knowledge base, and get instant answer to any question.",
    buttonText: "Try Chat",
    icon: <MessageSquare className="w-4 h-4 ml-2" />,
    link: "https://csv.askfromdata.com/",
  },
  // {
  //   category: "Build great apps",
  //   title: "Powerful APIs",
  //   description: "Use our APIs to create your own applications. Create chatbots, upload data sources, send messages and get the answers. All via the APIs.",
  //   buttonText: "Read the docs",
  //   icon: <Code2 className="w-4 h-4 ml-2" />,
  // },
  {
    category: "Assist your users",
    title: "Website Widget",
    description: "Embed your chatbot into your website to assist your customers. A 24/7 tireless AI agent.",
    buttonText: "Embed Widget",
    icon: <Globe className="w-4 h-4 ml-2" />,
    link: "/login",
  },
];

export function FeatureSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">Use Case</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text uppercase text-sm font-semibold tracking-wide mb-2">
                  {feature.category}
                </div>

                <h3 className="text-2xl font-bold mb-4 ">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
              </div>
              <div className="mt-auto">
                {/* <Button variant="link" className="p-0 h-auto font-semibold">
                  <a href={feature.link}>
                    {feature.buttonText}

                  </a>
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

