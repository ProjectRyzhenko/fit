import React, { useEffect } from "react"

// COMPONENTS
import SectionHeader from "./SectionHeader"
import Container from "./Container"

function OurTrainers() {
  
  // TRAINERS
  const trainers = [
    { id: 1, name: 'Maikol Hernández', avatar: 'trainer-1.jpeg' },
    { id: 2, name: 'Jaimer Martinez', avatar: 'trainer-2.jpeg' },
    { id: 3, name: 'Jhon Doe', avatar: 'trainer-3.jpeg' },
  ]

  // TRAINER
  function Trainer({ trainer, index }) {
    return (
      <div className={`flex flex-col rounded overflow-hidden ${index == 1 ? 'xl:flex-col-reverse' : ''}`}>
        <div className="h-[50vw] max-h-[450px]">
          <img className="w-full h-full object-cover" src={`https://ik.imagekit.io/of8sk3s88sie/landingpage/${trainer.avatar}`} alt={trainer.name} />
        </div>
        <div className={"p-5 flex flex-col justify-center sm:h-[50vw] sm:max-h-[450px] " + (index == trainers.length - 1 ? 'pb-0' : '')}>
          <h2 className="font-semibold text-xl text-gray-600 leading-none">{trainer.name}</h2>
          <p className="mt-5 text-sm text-gray-400 leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi itaque assumenda amet vel! Odio ad quam praesentium doloremque, necessitatibus libero nostrum fugit veritatis facilis at, veniam delectus quibusdam? Cumque, quam?</p>
          <div className="flex mt-4">
            <a href="#" className="inline-block w-10 h-10 text-lg text-orange-600 text-center leading-10"><i className="fab fa-facebook"></i></a>
            <a href="#" className="inline-block w-10 h-10 ml-1 text-lg text-orange-600 text-center leading-10"><i className="fab fa-twitter"></i></a>
            <a href="#" className="inline-block w-10 h-10 ml-1 text-lg text-orange-600 text-center leading-10"><i className="fab fa-instagram"></i></a>
            <a href="#" className="inline-block w-10 h-10 ml-1 text-lg text-orange-600 text-center leading-10"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="section">
      <SectionHeader name="Trainers" />
      <Container display="grid" media="gap-0 lg:grid-cols-2 lg:gap-2 xl:grid-cols-3 xl:gap-0">
        {trainers.map((trainer, i) => <Trainer key={trainer.id} trainer={trainer} index={i} />)}
      </Container>
    </section>
  )
}

export default OurTrainers
