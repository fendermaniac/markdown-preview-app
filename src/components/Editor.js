import React from 'react';

const Editor = (props) => {
  return ( 
    <div>
      <h2 className="title">Editor component</h2>
      <textarea rows={30} cols={75} onChange={props.onChange}>{props.markdown}</textarea>
    </div>
    
   );
}
 
export default Editor;