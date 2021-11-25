import React, { useEffect, useState } from 'react';

const Filters = () => {
    const [selectedTag, setSelectedTag] = useState('All')
    const [inputVal, setInputVal] = useState('')
    let elems= ['All', 'Men', 'Woman', 'Kids'];


    useEffect(()=>{
        console.log('Я срабатываю про каждом изменеении документа');
    })
    useEffect(()=>{
        console.log('Документ загрузился');
    },[])
    useEffect(()=>{
        console.log('При изменении тега');
    },[selectedTag])
    useEffect(()=>{
        console.log('При изменении инпута');
    },[inputVal])
    
    return (
        <div className='container mt-3 mb-3 d-flex justify-content-between'>
           <div>
               {elems.map((elem, index)=>(<span onClick={()=>setSelectedTag(elem)} className={selectedTag==elem ? 'btn btn-dark':'btn btn-light'} key={index}>{elem}</span>))}
            </div> 
            <input value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder='Search'></input>
        </div>
        
    );
};

export default Filters;