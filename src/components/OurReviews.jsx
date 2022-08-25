import React, { useEffect } from "react"

// COMPONENTS
import SectionHeader from './SectionHeader'
import Container from './Container'

function OurReviews() {

  // REVIEW
  function Review() {
    return (
      <div className="bg-white border border-orange-300 p-10 rounded shadow-lg">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src="/images/avatar.png" alt="User Name" />
        </div>
        <p className="mt-5 text-sm text-gray-400 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae amet aut ut blanditiis nesciunt quia officiis voluptates cum obcaecati magni vero dignissimos illum voluptatum eveniet iusto in tenetur eaque porro fugit soluta, accusamus suscipit aspernatur doloribus. Ducimus, nulla odio.</p>
        <div className="mt-6">
          <h2 className="font-semibold text-gray-700 leading-none">Name</h2>
          <p className="mt-2 text-sm text-gray-400">Ocupation</p>
        </div>
      </div>
    )
  }
  return (
    <section className="section">
      <SectionHeader name="Reviews" />
      <Container display="grid" media="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <Review />
        <Review />
        <Review />
      </Container>
    </section>
  )
}

export default OurReviews