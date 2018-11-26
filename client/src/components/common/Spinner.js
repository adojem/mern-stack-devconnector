import React from 'react';
import spinner from './spinner.gif';

export default () => (
   <div>
      <img
         src={spinner}
         alt="Loading..."
         style={{
            display: 'block',
            width: '200px',
            margin: 'auto',
         }}
      />
   </div>
);
