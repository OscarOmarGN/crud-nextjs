import React from 'react';
import { useRouter } from 'next/navigation';
import { useTareas } from './Contexto';

const TareaIndividual = ({tarea}) => {

  const router = useRouter();
  const {eliminarTarea} = useTareas();

  const eliminar = () => {
    const confirmar = confirm(`Seguro que deceas eliminar la tarea '${tarea.titulo}'?`)
    confirmar && eliminarTarea(tarea.id);
  }

  return (
    <div className='tarea'>
      <div className="tarea-content">
        <h2>{tarea.titulo}</h2>
        <p>{tarea.descripcion}</p>
      </div>
      <div className="botonesTarea">
        <button className='boton-editar' onClick={() => router.push(`/edit/${tarea.id}`)}>Editar</button>
        <button className='boton-eliminar' onClick={() => eliminar()}>Eliminar</button>
      </div>
    </div>
  )
}

export default TareaIndividual