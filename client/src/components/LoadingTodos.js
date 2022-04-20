import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

// Props
// shape: 'rect' | 'circle'
// width: number
// height: number
// colorStart?: string
// colorEnd?: string

const LoadingTodos = () => (
  <PlaceholderLoading margin={20} shape="rect" width={300} height={60} colorStart={'red'} colorEnd={'green'} />
);

export default LoadingTodos;
