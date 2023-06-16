import React from 'react';
import Quiz from './components/Quiz/Quiz';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Quiz/>
    </div>
  );
};

export default App;