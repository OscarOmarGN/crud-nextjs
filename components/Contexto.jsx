'use client'

import React, {createContext, useContext, useEffect, useState} from 'react'
import { v4 as uuid } from 'uuid';

export const Contexto = createContext();

export const useTareas = () => {
  const context = useContext(Contexto);
  if(!context) throw new Error('Error')
  return context;
} 

export const Provider = ({children}) => {
  const [tareas, setTareas] = useState([])
  
  
  useEffect(() => {
    const item = localStorage.getItem('tareas')
    const tareas = JSON.parse(item)
    console.log(tareas)
    tareas.length > 0 && setTareas(tareas)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])
  


const crearTarea = (titulo, descripcion) => {
  setTareas([{
    id: uuid(),
    titulo, 
    descripcion
  }, ...tareas, 
  ])
}

const eliminarTarea = (id) => {
  setTareas([...tareas.filter(tarea => tarea.id !== id)]);
}

const actualizarTarea = (id, tareaActualizada) => {
  setTareas([...tareas.map(tarea => tarea.id === id && {...tarea, ...tareaActualizada})]);
}

  return (
    <Contexto.Provider
      value={{
        tareas,
        crearTarea,
        eliminarTarea,
        actualizarTarea
      }}
    >
      {children}
    </Contexto.Provider>
  )
}