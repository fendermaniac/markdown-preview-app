import React from 'react';

const Editor = (props) => {
  return ( 
    <div>
      <p>Editor component</p>
      <textarea>{props.markdown}</textarea>
    </div>
    
   );
}
 
export default Editor;