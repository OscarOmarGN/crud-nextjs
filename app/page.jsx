'use client'

import { useTareas } from "@/components/Contexto"
import TareaIndividual from "@/components/TareaIndividual";

export default function Home() {
  
  const {tareas} = useTareas();

  return (
    <main>
      <div className="tareas-content">
        {tareas.map(tarea => {
          return (  
            <TareaIndividual key={tarea.id} tarea={tarea} />
          )
        })}
      </div>
    </main>
  )
}
