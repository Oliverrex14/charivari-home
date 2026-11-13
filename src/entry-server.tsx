import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { SEO_ROUTES } from './data/siteData';

export { SEO_ROUTES };

export function renderRoute(path: string): string {
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>
  );
}
