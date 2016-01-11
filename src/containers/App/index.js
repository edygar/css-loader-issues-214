import React, {Component} from 'react';
import styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sample1}></div>
        <div className={styles.sample2}></div>
        <div className={styles.sample3}></div>
      </div>
    );
  }
}
