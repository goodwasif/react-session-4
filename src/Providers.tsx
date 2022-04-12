import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ModalProvider } from 'widgets/Modal'

const Providers: React.FC = ({ children }) => {
  return (
          <HelmetProvider>
            <ThemeContextProvider>
                <RefreshContextProvider>
                  <ModalProvider>                    
                      {children}
                  </ModalProvider>
                </RefreshContextProvider>
            </ThemeContextProvider>
          </HelmetProvider>
  )
}

export default Providers
