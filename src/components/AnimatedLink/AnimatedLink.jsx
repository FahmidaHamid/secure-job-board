import React from "react";
import { Link } from "react-router"; // Or your preferred Link component
import "./AnimatedLink.css"; // Import your CSS file

import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block; /* Important for transform to work correctly */
  &:hover {
    animation: shakeLinks 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite
      both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

const AnimatedLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default AnimatedLink;
