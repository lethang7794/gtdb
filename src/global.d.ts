/// <reference types="node" />

declare module '*.yaml' {
  const content: { [key: string]: any }
  export default content
}
