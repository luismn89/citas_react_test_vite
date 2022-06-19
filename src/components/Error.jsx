const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white font-bold mb-3 uppercase p-3 rounded-md">
      { children }
    </div>
  )
}

export default Error