import React from 'react';

export const Loading = () => {
  return(
    <div className="col-12 offset:6">
    	<span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
    	<br />
    	<p>Loading . . .</p>
    </div>
  );
};