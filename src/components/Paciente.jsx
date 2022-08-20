const Paciente = ({paciente, setPaciente, eliminarPacientes}) => {
    const {nombre, propietario, email, alta, sintomas, id} = paciente
    const handleEliminar = () => {

        const respuesta = confirm('¿Desea eliminar el paciente?')
        
        if(respuesta) {
            eliminarPacientes(id)
        }

    }

  return (
<div className="bg-white rounded-xl m-3 shadow-md py-10 px-5">
    <p className="font-bold uppercase text-gray-700 mb-3">Nombre mascota: {''}
    <span className="normal-case font-normal">{nombre}</span>
    </p>
    <p className="font-bold uppercase text-gray-700 mb-3">Nombre propietario: {''}
    <span className="normal-case font-normal">{propietario}</span>
    </p>
    <p className="font-bold uppercase text-gray-700 mb-3">Email: {''}
    <span className="normal-case font-normal">{email}</span>
    </p>
    <p className="font-bold uppercase text-gray-700 mb-3">Fecha alta: {''}
    <span className="normal-case font-normal">{alta}</span>
    </p>
    <p className="font-bold uppercase text-gray-700 mb-3">Sintomas: {''}
    <span className="normal-case font-normal">{sintomas}</span>
    </p>
    <div className="flex justify-between mt-10">
        <button
            className="bg-indigo-600 py-2 px-10 hover:bg-indigo-700 rounded-lg text-white font-black"
            onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button
            className="bg-red-600 py-2 px-10 hover:bg-red-700 rounded-lg text-white font-black"
            onClick={handleEliminar}
        >Eliminar</button>
    </div>
</div>
  )
}

export default Paciente
