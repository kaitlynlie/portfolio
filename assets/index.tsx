import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from './github';
import IconLinkedin from './linkedin';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;