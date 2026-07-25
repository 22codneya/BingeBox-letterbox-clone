import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import movieDetails from "./pages/movieDetails"
import profile from "./pages/profile"

const App =() =>{

return(
<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="/movieDetails" element={<movieDetails/>}/>
<Route path="/profile" element={<profile/>}/>
</Route>
</Routes>


)

}
export default App