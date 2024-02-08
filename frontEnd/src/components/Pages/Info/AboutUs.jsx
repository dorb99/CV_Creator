import React from "react";
import image from "../../../assets/aboutus.jpg";
const AboutUsPage = () => {
  const testimonialsData = [
    {
      name: "John Workhard",
      role: "He Is Doing So Much",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
      quote:
        "as a tottaly real person i can say that wroking at typedout was the best and only desicion i have made in my life.",
    },
    {
      name: "Jane Waters",
      role: "CEO of Atlantis",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2547&q=80",
      quote:
        "i used to work for apple but i had to go to somewhere better so typedout was the only compeny fitting.",
    },
    {
      name: "John Smithmousy",
      role: "Inventor Of mouse pads",
      image:
        "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1256&q=80",
      quote:
        "I brought hp the first mice problem so i had to find a place where i could express myself fully",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-dark-blue text-white py-12 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Welcome to TypedOut</h1>
          <p className="text-lg mt-4">
            Crafting Experiences with Words and cool designs
          </p>
        </div>
      </header>

      <section className="container mx-auto my-12 px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-dark-blue">
              At TypedOut, our mission is to transform careers by crafting
              professional narratives. We leverage cutting-edge technology to
              empower individuals and businesses through innovative and
              intuitive tools. Our primary goal is to revolutionize the way
              people present themselves professionally, offering a superior
              alternative to traditional CV methods.{" "}
              <span className="text-rose-700">
                (We might not beat Windows in basketball, but we'll create
                slam-dunk CVs!)
              </span>
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Mission Illustration"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-8 shadow-md rounded-md container mx-auto my-12">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-700">
          At TypedOut, we are a diverse and passionate team of creatives,
          developers, and visionaries. Committed to excellence, we foster a
          culture of innovation to deliver solutions that exceed our users'
          needs.
        </p>
      </section>

      <section className="flex items-center justify-center py-20 bg-white min-w-screen">
        <div className="px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Same Design Again Yes We Like It
            </p>
            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              So lets meet the team
            </h2>
            <h3>wait this are the same from before??</h3>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>
            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src={testimonial.image}
                        className="object-cover w-full h-full"
                        alt={`Testimonial from ${testimonial.name}`}
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
