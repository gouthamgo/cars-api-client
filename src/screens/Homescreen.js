import React, {useState, useEffect}from 'react'
import axios from 'axios'

export default function Homescreen() {

    const[cars, setCars] = useState([])
    const[query,setQuery] = useState(" ")

    useEffect(()=>{

        try{
        async function fetchMyAPI() {
            //  fetching the data from the backend
            let data = (await axios.get("/api/cars/getallcars")).data;
            console.log(data)
            setCars(data)
        }

        fetchMyAPI()
    }
    catch(error){
        console.log(error)
    }

    },[]);




    

    
  return (
    <div>

        <h1>Serach for the CARS</h1>

        <input placeholder='Enter the Name' onChange={e => setQuery(e.target.value)}/>

        {
            cars.filter(item=>{
                if(query === ''){
                    return item;
                }
                else if(
                    item.Name.toLowerCase().includes(query.toLowerCase())
                ){
                    return item;
                }
            }).map((item, index)=> (
                <div className = "box" key={index} >
                    <p>{item.Name}</p>
                    <p>{item.Miles_per_Gallon}</p>
                    <p>{item.Cyclinders}</p>
                    <p>{item.Displacement}</p>
                    <p>{item.Horespower}</p>
                    <p>{item.Weight_in_lbs}</p>
                    <p>{item.Acceleration}</p>
                    <p>{item.Year}</p>
                    <p>{item.Origin}</p>
                </div>
            ))
        }

    </div>
  )
}
