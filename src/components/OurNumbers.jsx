import React, { useEffect } from "react"

function OurNumbers() {

  function Element(props) {
    return (
      <div className="flex flex-1 items-center py-10">
        <span className="block w-[60px] h-[60px] text-5xl text-gray-200 text-center leading-[60px]">
          <i className={"fas fa-" + (props.icon)}></i>
        </span>
        <div className="pl-5 text-white">
          <h2 className="text-2xl font-semibold leading-none">+{props.number}</h2>
          <p className="mt-4 text-sm font-bold leading-none">{props.text}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="section bg-orange-600 grid md:grid-cols-2 lg:grid-cols-4">
      <Element icon="clock" number="10" text="Year Experience" />
      <Element icon="dumbbell" number="250" text="Excercises Equipements" />
      <Element icon="users" number="12K" text="Happy Customers" />
      <Element icon="user" number="20" text="Personal Trainers" />
    </section>
  )
}

export default OurNumbers