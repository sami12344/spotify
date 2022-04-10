import Head from 'next/head'
import tw from 'twin.macro'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <Div>
      <Head>
        <title>Spotify - Dashboard</title>
        <link type='ico' about='spotify' rel='icon' href='/spotify-logo.png' />
      </Head>

      <Dashboard />
    </Div>
  )
}

const Div = tw.div`
 min-h-screen  bg-black scrollbar-hide
`
