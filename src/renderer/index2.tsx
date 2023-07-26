import { createRoot } from 'react-dom/client';
import CountdownApp from './CountdownApp';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<CountdownApp />);
