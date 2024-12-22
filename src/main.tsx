import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { paths } from './helpers/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={paths}/> {/*senc grenk vor urli hamar ira ejy gna*/}
  
  </StrictMode>,
)
