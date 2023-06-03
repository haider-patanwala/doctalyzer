import React from "react";
import Hero from "./Hero"
import Card from "./Card"


export default function Homepage() {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Card />
      </div>
    </main>
  )
}
