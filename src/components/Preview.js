import React from 'react';
import marked from 'marked'

const Preview = (props) => {
  return ( 
    <div>
    <h2 className="title">Preview component</h2>
    <div dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
    </div>

   );
}
 
export default Preview;