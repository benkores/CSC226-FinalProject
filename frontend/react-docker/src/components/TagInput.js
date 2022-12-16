import React from "react";
import '../App.css';
import { useState } from 'react';

function TagInput(){
    const [tags, setTags] = useState([]);

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }


    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    
    return (
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input style={{ fontSize: "20px" }} onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Enter tags separated by Enter key" />
        </div>
    )
}

export default TagInput;
