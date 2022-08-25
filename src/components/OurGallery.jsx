import React, { useEffect } from "react"

// COMPONENTS
import SectionHeader from "./SectionHeader"
import Container from "./Container"

function OurGallery() {
  
  // GALLERY
  const gallery = [
    { id: 1, src: 'gallery-img-1.jpg', alt: 'Image alt' },
    { id: 2, src: 'gallery-img-2.jpg', alt: 'Image alt' },
    { id: 3, src: 'gallery-img-3.jpg', alt: 'Image alt' },
    { id: 4, src: 'gallery-img-4.jpg', alt: 'Image alt' },
    { id: 5, src: 'gallery-img-5.jpg', alt: 'Image alt' },
    { id: 6, src: 'gallery-img-6.jpg', alt: 'Image alt' },
    { id: 7, src: 'gallery-img-7.jpg', alt: 'Image alt' },
    { id: 8, src: 'gallery-img-7.jpg', alt: 'Image alt' },
  ]

  // ELEMENT
  function Image({ image }) {
    return (
      <div className="gallery-img rounded-sm overflow-hidden">
        <img className="w-full h-full object-cover" src={`https://ik.imagekit.io/of8sk3s88sie/landingpage/${image.src}`} alt={image.alt} />
      </div>
    )
  }

  return (
    <section className="section">
      <SectionHeader name="Gallery" />
      <Container display="grid" media="grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
        {gallery.map(image => <Image key={image.id} image={image} />)}
      </Container>     
    </section>
  )
}

export default OurGallery
