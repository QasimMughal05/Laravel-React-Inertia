import './bootstrap';
import '../css/app.css';

 
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/layout';

createInertiaApp({
  title: title => title ? `${title} -Laravel React Inertia` : 'Laravel React Inertia',
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout =
    page.default.layout || ((page) => <Layout children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    color: '#fff',
    showSpinner: true
  }
  
})