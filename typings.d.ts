declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare const BREAKPOINT: number;
declare const ECHARTS_COUNT: number;
declare const PADDING: number;
declare const ECHARTS_DEFAULT_HEIGHT: number;
