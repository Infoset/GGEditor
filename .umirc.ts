import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  logo: 'https://img.alicdn.com/tfs/TB1FFA1CFP7gK0jSZFjXXc5aXXa-214-200.png',
  title: 'GGEditor',
  favicon: 'https://img.alicdn.com/tfs/TB1Des3CNn1gK0jSZKPXXXvUXXa-16-16.ico',
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/Infoset/GGEditor',
      },
      {
        title: 'Changelog',
        path: 'https://github.com/Infoset/GGEditor/blob/master/CHANGELOG.md',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/Infoset/GGEditor',
      },
      {
        title: '更新日志',
        path: 'https://github.com/Infoset/GGEditor/blob/master/CHANGELOG.md',
      },
    ],
  },
  exportStatic: {},
  styles: ['https://g.alicdn.com/code/lib/antd/4.16.7/antd.min.css'],
  scripts: [
    'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/17.0.2/umd/react-dom.production.min.js',
    'https://g.alicdn.com/code/lib/moment.js/2.29.1/moment.min.js',
    'https://g.alicdn.com/code/lib/antd/4.16.7/antd.min.js',
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
  },
});
