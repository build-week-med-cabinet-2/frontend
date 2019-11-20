import React from "react";
import Strain from './Strain';

export default function Strains() {

  const tempStrains = [
    {
      name: 'OG Kush',
      type: 'hybrid',
      description: 'mild stuff',
      benefit: 'helps with pain',
      dosageRec: '5mg',
      rating: 4,
      comments: ['helped relieve my pain', 'would recommend']
    },
    {
      name: 'Tangie',
      type: 'sativa',
      description: 'strong stuff',
      benefit: 'helps with pain a lot',
      dosageRec: '3mg',
      rating: 3,
      comments: ['helped with stuff', 'good, would recommend']
    },
    {
      name: 'Bubba Kush',
      type: 'indica',
      description: 'pretty mild stuff',
      benefit: 'helps with anxiety',
      dosageRec: '8mg',
      rating: 5,
      comments: ['helped with my anxiety', 'pretty nice, recommend']
    }
  ]

  return (
    <div>
      {tempStrains.map((item, index) => (
         <Strain data={item} key={index}/>
      ))}
    </div>
  )
}
