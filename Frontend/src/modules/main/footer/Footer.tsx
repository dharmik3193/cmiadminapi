import React from 'react';
import {useTranslation} from 'react-i18next';
import {DateTime} from 'luxon';
import packageJSON from '../../../../package.json';

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer className="main-footer">
      <strong>
        <span>Copyright © {DateTime.now().toFormat('y')} </span>
        <a href="https://codesignmultimedia.com" target="_blank" rel="noopener noreferrer">
          Codesign Multimedia Institute
        </a>
        <span>.</span>
      </strong>
    </footer>
  );
};

export default Footer;
