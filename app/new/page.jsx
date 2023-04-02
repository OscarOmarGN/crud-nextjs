'use client'

import React, { useEffect, useState } from 'react'
import { useTareas } from '@/components/Contexto'
import { useRouter } from 'next/navigation'

const NuevaTarea = ({params}) => {
  const [tarea, setTarea] = useState([])
  const {tareas, crearTarea, actualizarTarea} = useTareas()
  const router = useRouter();

  const handleChange = (e) => {
    setTarea({...tarea, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    params.id ? actualizarTarea(params.id, tarea) :
    crearTarea(tarea.titulo, tarea.descripcion)
    router.push('/')
  }

  useEffect(() => {
    if(params.id){
      console.log(tareas)
      console.log(params.id)
      const tareaEncontrada = tareas.find(item => item.id === params.id)
      if(tareaEncontrada){
        setTarea({titulo: tareaEncontrada.titulo, descripcion: tareaEncontrada.descripcion})
      }
    }
  }, [params.id, tareas])

  
  return (
    <form className='tarea-form' onSubmit={handleSubmit}>
      <input autoComplete='off' onChange={handleChange} defaultValue={tarea.titulo} type="text" name='titulo' placeholder='Ingresa el título' required />
      <input autoComplete='off' onChange={handleChange} defaultValue={tarea.descripcion} type='text' name='descripcion' placeholder='Descripción de la tarea' required />
      <button>Guardar</button>
    </form>
  )
}

export default NuevaTarea