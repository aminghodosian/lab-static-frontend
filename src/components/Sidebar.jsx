import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.list}>
          <li style={styles.listItem}><a href="#home" style={styles.link}>Home</a></li>
          <li style={styles.listItem}><a href="#dashboard" style={styles.link}>Dashboard</a></li>
          <li style={styles.listItem}><a href="#settings" style={styles.link}>Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    height: '100vh',
    boxSizing: 'border-box'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    marginBottom: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#333'
  }
};

export default Sidebar;
