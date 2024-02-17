import UseCallback from "./components/UseCallback"
import Usestate from "./components/Usestate"

function App() {
  return (
    <>
        <h1 className="text-2xl text-medium text-center">useSate</h1>
        <Usestate/>
        <h1  className="text-2xl text-medium text-center">UseCallback</h1>
        <UseCallback/>
    </>
  )
}

export default App
