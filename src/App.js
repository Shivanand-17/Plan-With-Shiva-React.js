import React, { useState } from "react";
import data from "./data"
import Tours from "./components/Tours"

const App = () =>{
const [tours, setTours] = useState(data);

function removeTour(id){
    const newTours = tours.filter(tour=> tour.id !== id);
    setTours(newTours);

    if(tours.lenght === 0){
        return (
            <div className="refresh">
                <h2 >No Tours Left</h2>
                <button className='btn-white '  onClick={()=>setTours(data)}>
                    Refresh
                </button>
            </div>
        );
    }

}

    return (
        <div className="App">
            {/* <h2>Plan With Shiva</h2> */}
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    )
    

};
export default App;