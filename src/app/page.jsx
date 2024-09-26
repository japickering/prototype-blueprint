import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
// import { CssVarsProvider } from '@mui/joy/styles';
import { Button, List, ListItem, Tab, Tabs } from '@mui/joy';

export default function App() {
  return (
    <div className="grid-container container-fluid">
      <header className={styles.header}>
        <a href="#content" className="skip">
          skip to content
        </a>
        <div className={styles.grid}>
          <Tabs>
            <ListItem>ListItem</ListItem>
          </Tabs>
        </div>
      </header>
      <main id="content" className={styles.main} role="landmark" tabIndex="-1">
        <div className={styles.grid}>
          <h1>Site title</h1>
        </div>
      </main>
      <footer>
        <h4>Site title</h4>
        <Tabs>
          <ListItem>ListItem</ListItem>
        </Tabs>
      </footer>
    </div>
  );
}
