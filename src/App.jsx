import React from "react";
import ReactDOM  from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import example from "./example";

function App(){
    return (
        <div>
          <Header />
          {example.map(noteItem=>(<Note key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content} />
          ))}
          <Footer />
        </div>
      );
    
}

export default App;