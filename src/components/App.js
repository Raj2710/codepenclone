import React, {useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./editor";
import "../index.css";
function App() {
  let [html,setHtml]=useLocalStorage("html","");
  let [css,setCss]=useLocalStorage("css","");
  let [js,setJs]=useLocalStorage("js","");
  let [srcDoc,setSrcDoc]=useLocalStorage("");
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
    },250)
    return ()=>clearTimeout(timeout);
  }, [html,css,js,setSrcDoc])
  return (
    <>
      <div className="pane top-pane"> 
          <Editor 
            language="xml" 
            displayName="HTML" 
            value={html} 
            onChange={setHtml}/>
            <Editor 
            language="css" 
            displayName="CSS" 
            value={css} 
            onChange={setCss}/>
            <Editor 
            language="javascript" 
            displayName="JS" 
            value={js} 
            onChange={setJs}/>
        </div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc} 
          title="output" 
          sandbox="allow-scripts" 
          frameBorder="0" 
          width="100%" 
          height="100%"/>
      </div>
    </>
  );
}

export default App;
