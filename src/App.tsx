import React from 'react';
import './app.less';
import Router from './routers';
import AuthRouter from './routers/utils/authRouter';

// 使用import语法配合react的Lazy动态引入资源
// const LazyDemo = lazy(() => import('@/components/LazyDemo'));
// prefetch
// const PreFetchDemo = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "PreFetchDemo" */
//       /* webpackPrefetch: true*/
//       '@/components/PreFetchDemo'
//     ),
// );
// preload
// const PreloadDemo = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "PreloadDemo" */
//       /* webpackPreload: true*/
//       '@/components/PreloadDemo'
//     ),
// );

const App: React.FC = () => {
  return (
    <AuthRouter>
      <Router />
    </AuthRouter>
  );
};

export default App;
