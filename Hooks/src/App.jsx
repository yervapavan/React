import CreateContext from "./components/CreateContext"
import UseCallback from "./components/UseCallback"
import UseContext from "./components/UseContext"
import UseEffect from "./components/UseEffect"
import Usestate from "./components/Usestate"

function App() {
  return (
    <>
        <h1 className="text-2xl text-medium text-center">useSate</h1>
        <Usestate/>
        <h1  className="text-2xl text-medium text-center">UseCallback</h1>
        <UseCallback/>
        <h1  className="text-2xl text-medium text-center">Context</h1>
        <UseContext/>
        <CreateContext/>
        <h1  className="text-2xl text-medium text-center">UseEffect</h1>
        <UseEffect/>
    </>
  )
}

export default App
