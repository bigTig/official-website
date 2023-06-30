import smallImg from '@/assets/images/2021logo.svg';
import bigImg from '@/assets/images/snipaste.jpg';
import { Demo1 } from '@/components';
import React, { Suspense, lazy, useState } from 'react';
import './app.less';

// 使用import语法配合react的Lazy动态引入资源
const LazyDemo = lazy(() => import('@/components/LazyDemo'));
// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /* webpackPrefetch: true*/
      '@/components/PreFetchDemo'
    ),
);
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /* webpackPreload: true*/
      '@/components/PreloadDemo'
    ),
);

const App: React.FC = () => {
  const [count, setCounts] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setCounts(e.target.value);
  };

  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import('./app.css');
    setShow(true);
  };

  return (
    <>
      <h2>修改了吧</h2>
      <p>受控组件</p>
      <Demo1 />
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
      <img src={smallImg} alt="小于50kb的图片" />
      <img src={bigImg} style={{ height: 200 }} alt="大于于10kb的图片" />
      <div className="small-img"></div> {/* 小图片背景容器 */}
      <div className="big-img"></div> {/* 大图片背景容器 */}
      <h2 className="title" onClick={onClick}>
        展示
      </h2>
      {/* show为true时加载LazyDemo组件 */}
      {show && (
        <Suspense fallback={null}>
          <LazyDemo />
        </Suspense>
      )}
      {/* show为true时加载组件 */}
      {show && (
        <>
          <Suspense fallback={null}>
            <PreloadDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
