import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '../src/constants/index';
import Side from '../components/side';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-color: white;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: white;
    font-color: white;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    font-color: white;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;