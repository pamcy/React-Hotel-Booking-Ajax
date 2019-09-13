import React from 'react';
import PropTypes from 'prop-types';

const LineBreak = ({ location }) => {
  return (
    <div className={`line-break ${location || ''}`}>
      <span className="line-break__line" />
      <span className="line-break__line" />
      <span className="line-break__line" />
    </div>
  );
};

LineBreak.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LineBreak;
