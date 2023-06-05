import React from 'react'
import CodeView from '../Components/Common/CodeView'

function AbsolutePath() {
  return (
    <>
      <div>AbsolutePath</div>
      {/* CODE VIEW */}
      <CodeView code={`
      // filename - jsconfig.json
      {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }
`} />
    </>
  )
}

export default AbsolutePath