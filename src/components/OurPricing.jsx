import React, { useEffect } from "react"

// COMPONENTS
import SectionHeader from "./SectionHeader"
import Container from "./Container"

function OurPricing() {

  // MENBERSHIPS
  const memberships = [
    {
      id: 1,
      name: 'Silver Menbership',
      price: 19,
      features: ['Free Fitness', 'Free Refreshment', 'Flexible Timing', 'Certificate']
    },
    {
      id: 2,
      name: 'Gold Menbership',
      price: 49,
      features: ['Advanced Fitness', 'Free Refreshment', 'Free Training assets', 'Personal Atention']
    },
    {
      id: 3,
      name: 'Platinum Menbership',
      price: 79,
      features: ['Free Fitness', 'Free Refreshment', 'Flexible Timing', 'Certificate']
    }
  ]

  // PRICING CARD
  function Menbership({ membership }) {
    return (
      <div className="group p-10 border border-orange-300 rounded text-center shadow-lg">
        <h2 className="group-hover:text-orange-400 font-semibold text-lg text-gray-700 leading-none transition duration-5">{membership.name}</h2>
        <p className="my-10 text-gray-700 text-4xl font-bold leading-none">${membership.price}<span className="text-sm text-gray-400">/mo</span></p>
        <ul className="text-sm text-gray-400 text-center leading-none">
          {membership.features.map((feature, i) => <li key={i} className={`${i ? 'mt-5' : ''}`}>{feature}</li>)}
        </ul>
        <a href="#" className="outline-none block mt-8 w-[80%] m-auto py-4 rounded-full bg-sky-400 font-bold text-sm text-center text-white uppercase tracking-wide hover:bg-orange-500 focus:bg-orange-500 transition duration-5 ">sign up now</a>
      </div>
    )
  }

  return (
    <section className="section">
      <SectionHeader name="Pricing" />
      <Container display="grid" media="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {memberships.map(membership => <Menbership key={membership.id} membership={membership} />)}
      </Container>
    </section>
  )
  
}

export default OurPricing