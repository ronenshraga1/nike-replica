import React, { useState } from 'react';
import './filter.css';
interface Props {
    id:string,
    name:string,
    isCheckBox?:boolean,// is element a checkbox item
    query:string,
    isChooseItem?:boolean;// is element a chooseable item(shoe size choose example)
    currentFetchUrl:string;
    isSelectedItem:string,
    setSelected:Function;
}
interface ItemData{
    id:string,
    name:string,
    query:string,
    isSelectedItem:string,
    setSelected:Function;
}
function ListItem({id,name,query,isSelectedItem,setSelected}:ItemData){// regular list item
    return (
        <p className={isSelectedItem===id ?'listItem selected':'listItem'} onClick={(e)=>setSelected(id)}>{name}</p>
    )
}
function SelectButton({id,name,query,isSelectedItem,setSelected}:ItemData){// select item like shoe size
    return (
        <button className={isSelectedItem === id ?'selectbutton isSelected':'selectbutton'} onClick={(e)=>setSelected(id)}>{name}</button>
    )
}
function Filter({id,name,isCheckBox,query,isChooseItem,currentFetchUrl,isSelectedItem,setSelected}:Props) {
    if(isCheckBox){//checkbox item
        return (
            <div className="checkBoxContainer">
                <input type="checkbox" checked={isSelectedItem === id} onChange={(e)=>setSelected(id)} className={isSelectedItem === id  ? 'checkboxChecked':'checkbox'}/>
                <label className='label'>{name}</label>
            </div>
        )
    } else if(isChooseItem){
        return <SelectButton id={id} name={name} query={query} isSelectedItem={isSelectedItem} setSelected={setSelected}/>
    }
  return (
    <ListItem name={name} query='' isSelectedItem={isSelectedItem} id={id} setSelected={setSelected}/>
  )
}

export default Filter;