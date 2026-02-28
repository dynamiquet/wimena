import { useState } from 'react'
import Header from "./Components/Header"
import Layout from "./Layouts/MainLayout"
import HomePage  from './pages/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Header />
        <HomePage/>
      </Layout>
    </>
  )
}

export default App;
