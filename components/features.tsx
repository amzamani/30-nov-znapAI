// import Image from 'next/image'
export default function Mid() {
    return (
        // <section className=" py-12 md:py-24 lg:py-32">
        //   <div className="container px-4 md:px-6">
        //     <div className="flex flex-col items-center space-y-4 text-center">
        //       <div className="space-y-2">
        //         {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
        //           Welcome to Our Amazing Platform
        //         </h1> */}
        //         {/* <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        //           Discover the power of innovation and creativity. Start your journey with us today.
        //         </p> */}
        //       </div>
        //       <div className="w-full px-2 my-8">
        //         <div className="relative w-full aspect-[3/2]">
        //           <Image
        //             src="/AskFromData.svg"
        //             alt="Product Overview"
        //             fill
        //             className="object-cover shadow-lg"
        //           />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        <div className="bg-white ">
            {/* <div className="mx-auto max-w-screen-2xl px-4 md:px-8"> */}
            <div className="flex flex-col justify-center items-center mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Features
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                    Build your custom chatbot easily.



                    </p>
                </div>
                {/* text - end */}
                <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {/* feature - start */}
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        {/* <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/1.png" // Replace with your image path
                  alt="Connect Data"
                  layout="fill"
                  objectFit="contain"
                  className="absolute w-1/8 h-1/8"
                />
              </div> */}
                        <h3 className="mb-2 text-lg font-semibold md:text-xl text-gray-800">
                            Connect Data
                        </h3>
                        <p className="mb-4 text-gray-500">
                            Connect your data from over 20+ sources like PDF, CSV and Excel.
                        </p>
                    </div>
                    {/* feature - end */}
                    {/* feature - start */}

                    {/* feature - end */}
                    {/* feature - start */}
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        {/* <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/1.png" // Replace with your image path
                  alt="Connect Data"
                  layout="fill"
                  objectFit="contain"
                  className="absolute w-1/8 h-1/8"
                />
              </div> */}
                        <h3 className="mb-2 text-lg font-semibold md:text-xl text-gray-800">
                            Ask in Natural Language
                        </h3>
                        <p className="mb-4 text-gray-500">
                            Ask questions in English or 95 other languages and get insights instantly.
                        </p>
                    </div>
                    {/* feature - end */}
                    {/* feature - start */}
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        {/* <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/1.png" // Replace with your image path
                  alt="Connect Data"
                  layout="fill"
                  objectFit="contain"
                  className="absolute w-1/8 h-1/8"
                />
              </div> */}
                        <h3 className="mb-2 text-lg font-semibold md:text-xl text-gray-800">
                            Generate Charts
                        </h3>
                        <p className="mb-4 text-gray-500">
                            Get instant insights and charts, save time and cost.
                        </p>
                    </div>
                    {/* feature - end */}
                    {/* feature - start */}
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        {/* <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/1.png" // Replace with your image path
                  alt="Connect Data"
                  layout="fill"
                  objectFit="contain"
                  className="absolute w-1/8 h-1/8"
                />
              </div> */}
                        <h3 className="mb-2 text-lg font-semibold md:text-xl text-gray-800">
                            Customise
                        </h3>
                        <p className="mb-4 text-gray-500">
                        Tailor the chatbot to meet your specific business needs with flexible settings and configurations.
                        </p>
                    </div>
                    {/* feature - end */}
                    {/* feature - start */}
                    <div className="flex flex-col rounded-lg border p-4 md:p-6">
                        {/* <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src="/1.png" // Replace with your image path
                  alt="Connect Data"
                  layout="fill"
                  objectFit="contain"
                  className="absolute w-1/8 h-1/8"
                />
              </div> */}
                        <h3 className="mb-2 text-lg font-semibold md:text-xl text-gray-800">
                            Embed into your App
                        </h3>
                        <p className="mb-4 text-gray-500">
                            Integrate AI-powered chatbot on your own platform and enable your customers to chat with their data.


                        </p>
                    </div>
                    {/* feature - end */}
                </div>
            </div>
        </div>
    )
}