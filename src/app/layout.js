"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
