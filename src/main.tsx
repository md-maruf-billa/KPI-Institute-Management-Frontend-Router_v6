import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={Router} />
      </PersistGate>
    </Provider>
  </StrictMode>
)
