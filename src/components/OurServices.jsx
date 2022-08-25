import React, { useEffect } from "react"

// COMPONENTS
import SectionHeader from "./SectionHeader"
import Container from "./Container"

function OurServices() {

  const services = [
    { id: 1, name: 'Personal Training', banner: 'personal-training.jpg' },
    { id: 2, name: 'Pilates', banner: 'pilates.jpg' },
    { id: 3, name: 'Spinning Class', banner: 'spinning-class.jpg' },
    { id: 4, name: 'Strength Training', banner: 'strength-training.jpg' },
  ]

  // SERVICE
  function Service({ service, index }) {
    return (
      <div className="rounded-sm overflow-hidden">
        <div className="h-[50vw] max-h-[350px] overflow-hidden">
          <img className="w-full h-full object-cover" src={`https://ik.imagekit.io/of8sk3s88sie/landingpage/${service.banner}`} alt="Spinning Class" />
        </div>
        <div className={"py-6 md:pb-0 " + (index == services.length - 1 ? 'pb-0' : '')}>
          <h2 className="mt-1 text-md font-semibold text-gray-600 leading-none">{service.name}</h2>
          <p className="mt-5 text-sm text-gray-400 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deserunt culpa modi assumenda in officiis veritatis aspernatur, sit quibusdam quod facilis odio odit unde commodi excepturi impedit et sint quidem.
          </p>
        </div>
      </div>
    )
  }
  
  return (
    <section className="section bg-gray-100">
      <SectionHeader name="Services" />
      <Container display="grid" media="gap-2 md:grid-cols-2 2xl:grid-cols-4">
        {services.map((service, i) => <Service key={service.id} service={service} index={i} />)}
      </Container>
    </section>
  )
}

export default OurServices
