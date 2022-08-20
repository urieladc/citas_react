const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white w-full rounded-lg font-bold uppercase p-5 mb-10 text-center transition-transform">
        {children}
    </div> 
  )
}

export default Error
