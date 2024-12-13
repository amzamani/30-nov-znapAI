import { GithubCard } from "@/components/github-card";
import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { FAQ } from '@/components/faq';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeatureSection } from "@/components/ways"
import Mid from "@/components/features"
export default function IndexPage() {

  return (
    <>
      <section data-aos="fade-up" className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 py-12 md:py-24 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl border shadow-md bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Find us on 𝕏
          </Link> */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Create Custom Chatbots
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Train AI chatbots on custom data, use them internally or seamlessly embed them into your application.         </p>
          <div className="space-x-4 space-y-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              {/* <Icons.bot className="h-4 w-4 mr-2"></Icons.bot> */}
              Get Started
            </Link>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), 'bg-white')}
            >
              <Icons.gitHub className="h-4 w-4 mr-2"></Icons.gitHub> GitHub
            </Link> */}
          </div>
          {/* <Image data-aos="zoom-in" priority={false} className="mt-10 border shadow-lg" src="/dashboard.png" width={810} height={540} alt="Dashboard" /> */}
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 my-32">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/jDjaVi4iHEg?controls=0&modestbranding=1&rel=0"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* <section
      className="flex w-full items-start justify-center bg-cover bg-center bg-no-repeat md:bg-[url('https://tailframes.com/images/squares-bg.webp')]"
>
      <div
        className="m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 pt-12 md:gap-12 md:pt-20 px-3 sm:px-8 lg:px-16 xl:px-32"
      >
        <div className="flex flex-1 flex-col items-center gap-6 text-center">
          <Badge size="large" variant="secondary">
            Tailframes v1.0
          </Badge>
          <div className="flex max-w-lg flex-col gap-6">
            <h3 className="text-4xl font-semibold text-slate-950 md:text-6xl">
              Here is your new Tailwind UI kit!
            </h3>
            <p className="text-lg font-normal leading-7 text-slate-500">
              We've done it carefully and simply. The elements work well together to create stunning landings.
            </p>
          </div>
          <Button size="large">
            Get a Template
          </Button>
        </div>
        <div className="mb-0 flex w-full flex-1 items-center justify-center rounded-t-3xl bg-slate-100 py-32 md:mb-0">
          <div
            className="flex size-[94px] items-center justify-center rounded-full border-[6px] border-white bg-blue-700 shadow"
          >
            <Button variant="text" size="xsmall" iconOnly aria-label="Play">
              
            </Button>
          </div>
        </div>
      </div>
    </section> */}
      <section data-aos="fade-up" className="container space-y-6 py-12 md:py-24 lg:py-24">
        <FeatureSection />
      </section>

      <section data-aos="fade-up" id="chat" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Test our chatbot assistant
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Ask any question about us to our chatbot. You can also try the chatbot buttom right of the window.
          </p>
          <div className="min-w-[85%] min-h-[15rem] text-left items-left pt-6">
            <iframe
              src="/embed/cm4mp4qhh000384g4gjeu26zg/window?chatbox=false"
              className="overflow-hidden border border-1 rounded-lg shadow-lg w-full h-[65vh]"
              allowFullScreen allow="clipboard-read; clipboard-write"
            ></iframe>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" id="features" className="container space-y-6 py-12 md:py-24 lg:py-24">
        <Mid/>
      </section>

      {/* <section data-aos="fade-up" id="integrations" className="container py-12 md:py-24 lg:py-32">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Compatible with your Platform
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Effortlessly integrate with the most popular website platforms.
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <div className="grid w-full items-center justify-center gap-12 md:grid-cols-4 lg:gap-6">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="WordPress"
                    className="rounded-lg aspect-[2/1] overflow-hidden object-contain object-center"
                    height="60"
                    src="/wordpress.svg"
                    width="120"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Shopify"
                    className="rounded-lg aspect-[2/1] overflow-hidden object-contain object-center"
                    height="60"
                    src="/shopify.svg"
                    width="120"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Squarespace"
                    className="rounded-lg aspect-[2/1] overflow-hidden object-contain object-center"
                    height="60"
                    src="/squarespace.svg"
                    width="120"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Wix"
                    className="rounded-lg aspect-[2/1] overflow-hidden object-contain object-center"
                    height="60"
                    src="/wix.svg"
                    width="120"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section data-aos="fade-up" id="low-code" className="container space-y-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Low code and easy to implement
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our chatbot requires very low amount of code to implement in it in your website.
            You can follow our documentation to see how to implement our chatbot in your website.
          </p>
          <Image alt="code example" className="mt-6 shadow-xl border rounded-lg" width={550} height={550} src="/code_example.png" />
        </div>
      </section> */}
      {/* <section data-aos="fade-up" id="open-source" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} is open source and powered by open source software. <br />{" "}
            The code is available on GitHub.
          </p>
        </div>
        <div className="mt-10 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-left">
          <GithubCard />
        </div>
      </section> */}
      {/* <section data-aos="fade-up" id="pricing" className="container py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pick the perfect plan for you</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                All plans include everything that is required to build a chatbot.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{freePlan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">${freePlan.price}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Perfect for personal projects, experiments, or simply getting familiar with our powerful tools.
                </p>
                <ul className="space-y-1">
                  <li>✓ {freePlan.maxChatbots} Chatbot</li>
                  <li>✓ {freePlan.maxCrawlers} Crawler</li>
                  <li>✓ {freePlan.maxFiles} Files</li>
                  <li>✓ {freePlan.maxMessagesPerMonth} Messages per Month</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{basicPlan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">${basicPlan.price}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  For organizations that require collaboration and deploy multiple chatbots.
                </p>
                <ul className="space-y-1">
                  <li>✓ {basicPlan.maxChatbots} Chatbots</li>
                  <li>✓ {basicPlan.maxCrawlers} Crawlers</li>
                  <li>✓ {basicPlan.maxFiles} Files</li>
                  <li>✓ Customizations</li>
                  <li>✓ Unlimited Messages</li>
                  <li>✓ Client Inquiry / Collect Leads</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{proPlan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">${proPlan.price}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Tailored solutions for large-scale operations and advanced requirements.
                </p>
                <ul className="space-y-1">
                  <li>✓ {proPlan.maxChatbots} Chatbots</li>
                  <li>✓ {proPlan.maxCrawlers} Crawlers</li>
                  <li>✓ {proPlan.maxFiles} Files</li>
                  <li>✓ Customizations</li>
                  <li>✓ Unlimited Messages</li>
                  <li>✓ Client Inquiry / Collect Leads</li>
                  <li>✓ Remove &apos;Powered by OpenAssistantGPT&apos;</li>
                  <li>✓ Client File Attachment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">ENTERPRISE</CardTitle>
                <CardDescription className="text-2xl font-bold">$X</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  Custom plan for bigger enterprise. Contact the team for more information.
                </p>
                <ul className="space-y-1">
                  <li>✓ X Chatbots</li>
                  <li>✓ X Crawlers</li>
                  <li>✓ X Files</li>
                  <li>✓ All Features from other plans.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center mt-10 text-center">
            <Link href="/dashboard/billing" className={cn(buttonVariants({ size: "lg" }))}>
              Buy our paid plan now quick and easy!
            </Link>
          </div>
        </div>
      </section> */}
      {/* <section data-aos="fade-up" id="faq" className="container space-y-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            FAQ
          </h2>
          <div className="w-full text-left">
            <FAQ />
          </div>
        </div>
      </section> */}

    </>
  );
}
