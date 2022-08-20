import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPacientes}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">    
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        <p className="text-lg mt-1 text-center mb-10">
            Adminitra tus {''}
            <span className="font-bold text-indigo-600">pacientes y citas</span>
        </p>
        {pacientes.map(paciente => (
        <Paciente 
          key={paciente.id} 
          paciente = {paciente} 
          setPaciente = {setPaciente}
          eliminarPacientes = {eliminarPacientes}
        />
        ))}  
    </div>    
      )
}

export default ListadoPacientes