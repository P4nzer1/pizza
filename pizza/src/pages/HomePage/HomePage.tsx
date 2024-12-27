import React from 'react';
import styles from './HomePage.module.scss';

interface HomePageProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const HomePage = ({ title, description = 'Описание по умолчанию', onClick }: HomePageProps) => {
  return (
    <div className={styles.content}>
    </div>
  );
};

export default HomePage;