import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Tour from './pages/Tour.tsx'
import Tours from './pages/Tours.tsx'
import { ThemeProvider } from '@mui/material'
import { MuiTheme } from './utils/MuiTheme.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Tours />} />
      <Route path="tour">
        <Route path=":id" element={<Tour />} />
      </Route>

      {/* <Route path="trends" element={<Home type="trend" />} /> */}
      {/* <Route path="tour">
        <Route path=":id" element={<Tour />} />
      </Route> */}
      {/* <Route path="*" element={<Page404 />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
