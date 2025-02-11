import React from 'react'
interface props{
    difficulty:string
}
const Difficulty = ({difficulty}:props) => {
  return (
    <div className={`h-full flex justify-center items-center rounded-r-full rounded-l-full ${difficulty == "Easy" ? "bg-[#15B392]/20" : difficulty == "Medium" ? "bg-[#ffb700]/20" : "bg-[#f63737]/20"} px-3 py-1`}>
        <h1 className={`${difficulty == "Easy" ? "text-[#15B392]" : difficulty == "Medium" ? "text-[#ffb700]" : "text-[#f63737]"} text-xs font-bold`}>{difficulty}</h1>
    </div>
  )
}
const DifficultyCircle = ({difficulty}:props) => {
  return(
    <div className={`w-3 h-3 rounded-full ${difficulty == "Easy" ? "bg-[#15B392]" : difficulty == "Medium" ? "bg-[#ffb700]" : "bg-[#f63737]"}`} />
  )
}
export {Difficulty,DifficultyCircle}