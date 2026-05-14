const MainContent = () => {
  const styles = {
    contentArea: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f4f4f4'
    }
  };

  return (
    <main style={styles.contentArea}>
      <h2>Dashboard Overview</h2>
      <p>This is the main content area.</p>
    </main>
  );
};

export default MainContent;
