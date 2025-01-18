import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props
  return (
    <SectionWrapper id={'workout'} header={'Your path to'} title=
    {["BE","LEGAN","DARY"]}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise,i) => {
          return (
            <ExerciseCard exercise={exercise} key={i} index={i} />
          )
        })}

      </div>
      </SectionWrapper>
  )
}
