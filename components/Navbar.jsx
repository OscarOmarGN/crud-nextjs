'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {

  const router = useRouter()
  const ruta = globalThis.window.location.href.split('/').slice(-1)[0]
  
  return (
    <header>
      <Link href='/'>
        <h1>Aplicación de tareas con NextJS</h1>
      </Link>
      <div>
        <button className='boton-añadir' onClick={(e) => {router.push('/new')}}>Añadir tarea</button>
      </div>      
    </header>
  )
}

export default Navbar