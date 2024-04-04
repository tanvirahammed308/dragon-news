import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    fetch('category.json')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCategories(data)
    })
  },[])
  return (
    <div className="space-y-5">
      <h3 className="capitalize text-2xl ">all categories</h3>
      <div className="space-y-5">
        {
          categories.map((category)=><Link key={category.id} className="block text-xl ml-4 font-semibold" to={`/category/${category.id}`}>{category.name}</Link>)
        }
      </div>
    </div>
  )
}

export default LeftSideNav