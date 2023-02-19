import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

// function createUnit (unit){
//     return (
//         <Note 
//             key={unit.key}
//             title={unit.title}
//             content={unit.content}
//         />  
//     );
// }

function App(){
    return (
        <div>
        <Header />
        {/* {notes.map(createUnit)} */}
        {notes.map(unit=>{
    return (
        <Note 
            key={unit.key}
            title={unit.title}
            content={unit.content}
        />  
    );
})}

        <Footer />
    </div>
    )
}
 export default App ;