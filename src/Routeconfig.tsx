import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import MusicUploadForm from "./components/MusicUploadForm";
import Layout from "./components/Layout";

const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>}>
                    <Route path = "" element={<Home/>}/>
                    <Route path = "/addSong" element={<MusicUploadForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteConfig;