import React from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

export const App = () => {
  return ( 
    <div>
      <Spinner/>
      <ErrorIndicator/>
    </div>
   );
}
 