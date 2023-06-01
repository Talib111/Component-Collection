import React from 'react'
import CodeView from '../Components/Common/CodeView'

function ScrollHandleCss() {
    return (
        <>
            <div>ScrollHandleCss</div>
            {/* CODE VIEW */}
            <CodeView code={`/*App.css*/

::-webkit-scrollbar {
  width: 8px;
  background: red;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background-color: skyblue;
  /* border: 3px solid transparent; */
  border-radius: 9px;
  background-clip: content-box;
}
`} />
        </>
    )
}

export default ScrollHandleCss