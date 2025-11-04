import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <RouterProvider router={router}></RouterProvider>
    </SmoothScroll>
  </StrictMode>,
)
