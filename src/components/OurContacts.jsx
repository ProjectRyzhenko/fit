import React, { useEffect } from "react"

// COMPONENTS
import Container from "./Container"

function OurContacts() {
  return (
    <section className="section">
      <Container display="grid" media="grid sm:grid-cols-3">
        <div className="sm:justfy-self-start">
          <h2 className="font-bold text-lg text-orange-500 leading-none">Our Address</h2>
          <ul className="mt-6 text-gray-400">
            <li className="text-sm leading-none">80 Bar/A, water street</li>
            <li className="mt-4 text-sm leading-none">Behind Z-Block</li>
            <li className="mt-4 text-sm leading-none">Stone Park</li>
          </ul>
        </div>
        <div className="mt-10 sm:mt-0 sm:justify-self-center">
          <h2 className="font-bold text-lg text-orange-500 leading-none">Contact Us</h2>
          <ul className="mt-6 text-gray-400">
            <li className="text-sm leading-none">(+1) 765-302-2878</li>
            <li className="mt-4 text-sm leading-none">(+1) 903-765-9242</li>
          </ul>
        </div>
        <div className="mt-10 sm:mt-0 sm:justify-self-end">
          <h2 className="font-bold text-lg text-orange-500 leading-none">Schedules</h2>
          <ul className="mt-6 text-gray-400">
            <li className="text-sm leading-none">(+1) 765-302-2878</li>
            <li className="mt-4 text-sm leading-none">(+1) 903-765-9242</li>
          </ul>
        </div>
      </Container>      
    </section>
  )
}

export default OurContacts