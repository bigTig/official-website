import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.less';

/** 基本页面布局 */
const BasicLayout: React.FC = () => {
  return (
    <div className={styles['basic-layout']}>
      <Outlet />
    </div>
  );
};

export default BasicLayout;
