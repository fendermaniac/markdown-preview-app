import React from 'react';
import marked from 'marked'

const Preview = (props) => {
  return ( 
    <div>
    <p>Preview component</p>
    {marked(props.markdown)}
    </div>

   );
}
 
export default Preview;