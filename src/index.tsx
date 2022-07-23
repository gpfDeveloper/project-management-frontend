import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeModeProvider } from 'contexts/theme-mode-context';
import { AuthProvider } from 'contexts/auth-context';
import { ProjectProvider } from 'contexts/project-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// comment StrictMode due to double toolbar header rendered, see this post for detial: https://github.com/zenoamaro/react-quill/issues/784
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeModeProvider>
      <AuthProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
        j
      </AuthProvider>
    </ThemeModeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
