import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
export default function Editor(props) {
    const{
        language,displayName,value,onChange
    }=props;
    const [open,setOpen]=useState(true);
    function handleChange(editor,data,value){
        onChange(value);
    }
    let compress=<i className="fas fa-compress-alt"></i>
    let expand= <i className="fas fa-expand-alt"></i>
    return (
        <div className={`editor-container ${open?'':'collapsed'}`}>
            <div className="editor-title">{displayName} <button onClick={()=>setOpen(prevOpen=>!prevOpen)} className="expand-collapse-btn">{open?compress:expand}</button></div>
            <ControlledEditor
                onBeforeChange={handleChange} 
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:'material',
                    lineNumbers:true
                }}
            />
        </div>
    )
}
