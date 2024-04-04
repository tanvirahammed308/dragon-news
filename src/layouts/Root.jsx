import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-Poppins my-5">
     
        <Outlet/>
    </div>
  )
}

export default Root