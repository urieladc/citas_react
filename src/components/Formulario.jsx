import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const handleSubmit = (e) => {
        e.preventDefault()
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)
            return
        } 

        setError(false)

        const objPaciente = {nombre, propietario, email, alta, sintomas};

        if(paciente.id){
            objPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
            
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente]) 
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">    
        <h2 className="font-black text-3xl text-center">Seguimineto pacientes</h2>
        <p className="text-lg mt-1 text-center mb-10">
            Añade pacientes y {''}
            <span className="font-bold text-indigo-600">Administrarlos</span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
            {error && <Error>Todos los campos son obligatorios</Error> }
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                    Nombre mascota
                </label>
                <input 
                    id="mascota"
                    className="border-2 w-full placeholder:text-gray-400 p-2 mt-2 rounded-md" 
                    type="text" 
                    placeholder="Nombre de la mascota"
                    value={nombre}
                    onChange={(e) => {setNombre(e.target.value)}}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                    Nombre del propietario
                </label>
                <input 
                    id="propietario"
                    className="border-2 w-full placeholder:text-gray-400 p-2 mt-2 rounded-md" 
                    type="text" 
                    placeholder="Nombre del propietario"
                    value={propietario}
                    onChange={(e) => {setPropietario(e.target.value)}}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                    Email
                </label>
                <input 
                    id="email"
                    className="border-2 w-full placeholder:text-gray-400 p-2 mt-2 rounded-md" 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                    Alta
                </label>
                <input 
                    id="alta"
                    className="border-2 w-full placeholder:text-gray-400 p-2 mt-2 rounded-md" 
                    type="date" 
                    value={alta}
                    onChange={(e) => {setAlta(e.target.value)}}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                    Sintomas
                </label>
                <textarea
                    className="border-2 w-full placeholder:text-gray-400 p-2 mt-2 rounded-md" 
                    placeholder="Sintomas de la mascota"
                    value={sintomas}
                    onChange={(e) => {setSintomas(e.target.value)}}
                />
            </div>
            <input 
                type="submit"
                className="bg-indigo-600 w-full font-bold text-white p-3 uppercase hover:bg-indigo-700 transition-all cursor-pointer" 
                value = {paciente.id ? 'Editar paciente' : 'Crear paciente'}
            />
        </form>
    </div>
  )
}

export default Formulario