import React, { useState } from 'react';
import './filter.css';
interface Props {
    name:string,
    isCheckBox?:boolean,
    query:string,
    isSelect?:boolean
}
function Filter({name,isCheckBox,query,isSelect}:Props) {
    const[ischecked,setChecked] = useState<boolean>(false)
    if(isCheckBox){
        return (
            <div className="checkBoxContainer">
                <input type="checkbox" checked={ischecked} onChange={(e)=>setChecked(!ischecked)} className={ischecked  ? 'checkboxChecked':'checkbox'}/>
                <label>{name}</label>
            </div>
        )
    }
  return (
    <div>filter</div>
  )
}

export default Filter;