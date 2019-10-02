import React from 'react';

const LineBreak = ({ location }) => {
  return (
    <div className={`line-break ${location || ''}`}>
      <span className="line-break__line" />
      <span className="line-break__line" />
      <span className="line-break__line" />
    </div>
  );
};

export default LineBreak;
