import React from 'react'
import { Banner } from "./Banner";

const images = [
    "/assets/freecodecamp.jpg",
    "/assets/cleverprogrammer.jpg",
    "/assets/josh.jpg",
    "/assets/harry.jpg",
    "/assets/jsmastry.jpg",
    "/assets/codergyan.jpg",
    "/assets/netninja.jpg",
    "/assets/apnacollege.jpg",
    "/assets/chaiaurcode.jpg",
    "/assets/anujbhaiya.jpg"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

export default function CommunityExperts() {
  return (
    <div className="banner my-48">
      <h2 className='text-3xl home_text pb-10'>Top Educators from amazing YouTube community</h2>
      <Banner images={images} speed={20000} />
    </div>
  );
}
