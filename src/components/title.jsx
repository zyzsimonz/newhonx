import '../style/title.css'
import { Card } from "primereact/card";
import React from "react";


export default function Title () {
    return (
        <div className='card'>
           <label className='left'>欢迎光临新NewHonX</label> 
           <label className="right"><a href="#" >联系我们</a></label>
        </div>
    );
}