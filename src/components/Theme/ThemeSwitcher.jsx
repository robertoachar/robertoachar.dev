/* eslint no-underscore-dangle: 0 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 0;
  visibility: hidden;
  width: 0;

  &:checked + label {
    background: var(--text);
  }

  &:checked + label:after {
    background: var(--background);
    left: 2.75rem;
  }
`;

const Label = styled.label`
  background: var(--background);
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.shadow['shadow-200']};
  cursor: pointer;
  display: block;
  height: 2.5rem;
  position: relative;
  width: 5rem;

  &::after {
    background: var(--text);
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow['shadow-200']};
    content: '';
    height: 2rem;
    left: 0.25rem;
    position: absolute;
    top: 0.25rem;
    transition: 0.3s;
    width: 2rem;
  }
`;

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    console.log(
      'TODO: ThemeSwitcher > useEffect running on every route change. Bug?'
    );
    setTheme(window.__theme);

    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  const toggleTheme = (e) => {
    const preferredTheme = e.target.checked ? 'dark' : 'light';

    window.__setPreferredTheme(preferredTheme);
  };

  return (
    <>
      <Input
        id="theme-toggler"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <Label htmlFor="theme-toggler" />
    </>
  );
};

export default ThemeSwitcher;
