import React ,{useState } from  "react";


export default function FavoriteColor() {
  const [color,setcolor]= useState("red") ;
   return (
    <div>
      <h1> My Favorite color is  yu {color} !</h1>

      <button type="button" onClick={() => setcolor("blue")}> Blue</button>    </div>
  )
}




