import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '大屏模板',
  define: {
    BREAKPOINT: 1280, // 在小于这个值的时候，采用移动端的布局
    ECHARTS_DEFAULT_HEIGHT: 324, // echarts默认的高度，在移动端布局的情况下有效
    ECHARTS_COUNT: 3, // 左右展示的echarts图表数量
    PADDING: 16, // 左右两边的padding
  },
  outputPath: 'build',
  hash: true,
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack(config) {
    config.module
      .rule('otf')
      .test(/.otf$/)
      .use('file-loader')
      .loader('file-loader');

    config.module
      .rule('ttf')
      .test(/.ttf$/)
      .use('file-loader')
      .loader('file-loader');
  },
});
