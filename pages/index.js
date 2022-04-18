import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import tw from 'twin.macro'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'
export default function Home() {
  const router = useRouter()
  const { status, data: session } = useSession({
    onUnauthenticated(){
      router.push("/auth/singin")
    }
  })
  if(status === 'loading'){
    return <Loader/>
  }
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
