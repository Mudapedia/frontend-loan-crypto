import { useState } from 'react'
import Home from './pages/Home'

function App() {

  return (
    <>
      <section className='flex justify-center h-[100vh] w-[100vw] bg-black'>
        <section className='relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 items-center mx-auto max-h-screen overflow-x-auto no-scrollbar'>
          <Home/>
        </section>
      </section>
    </>
  )
}

export default App
