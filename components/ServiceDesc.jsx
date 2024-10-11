import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ServiceDesc() {
  const location = useLocation();
  const { service } = location.state;

  const features = service.feature;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(service);
  return (
    <div>
      <section className="pt-24">
        <div className="py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center ">
              <h2 className="font-heading mb-4 bg-PrimaryColor text-gray900 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xl font-semibold tracking-widest  uppercase title-font font-caveat">
                Our Services
              </h2>
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl capitalize font-quicksand">
                {service.title}
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto text-justify font-quicksand">
                {service.desc}
              </p>
            </div>

            {/* <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div className="" key={feature.id}>
                    <dt>
                      <div className=" flex items-center justify-center h-12 w-12 rounded-md bg-gray900 text-white p-2">
                        <img src={feature.image} alt={feature.title} />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 font-montserrat">
                        {feature.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 text-justify font-lora">
                      {feature.dec}
                    </dd>
                  </div>
                ))}
              </dl>
            </div> */}
            <div className="mt-10">
  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
    {features.map((feature) => (
      <div className="flex items-start" key={feature.id}>
        {/* Image Container */}
        <dt className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray900 text-white p-2">
            <img src={feature.image} alt={feature.title} />
          </div>
        </dt>

        {/* Text Container */}
        <div className="ml-4">
          <p className="font-heading text-lg leading-6 font-bold text-gray-700 font-montserrat">
            {feature.title}
          </p>
          <dd className="mt-2 text-base text-gray-500 text-justify font-lora">
            {feature.dec}
          </dd>
        </div>
      </div>
    ))}
  </dl>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDesc;
