/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
export { routes, resolve, SITE, allWork } from './site'
export { services, homeFaqs } from './data/services'

export function render(path) {
  return renderToString(<StrictMode><App path={path} /></StrictMode>)
}
