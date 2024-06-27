import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='hero min-h-screen bg-base-200 flex items-center justify-center text-center'>
      <div className='hero-content '>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-blue-500'>GPTGenius</h1>
          <p className='py-6 text-lg leading-loose'>
            GPTGenius: Your AI language companion, Powered by OpenAI, it enhances your 
            coinversatino, content creations and more!
          </p>
          <Link href="/chat" className='p-4 bg-purple-700 rounded-md text-white'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home


