import { getProviders, signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loader from '../../components/Loader'
import { SignInButton, SignInDiv } from '../../styled-elements/SignInElements'

const Signin = ({providers}) => {
  const {data:session}= useSession()
  const router = useRouter()
  useEffect(()=>{
  if(session){

  router.push('/')
}
if(session) return (<Loader/>)
  },[session])
  return (
    <SignInDiv>
      <Head>
        <title>Login -Spotify</title>
        <link rel='icon' type='png' href='/spotify-logo.png' />
      </Head>
      <Image
        src='/spotify-signin.png'
        height={250}
        width={600}
        objectFit='contain'
        className='animate-pulse'
      />
      {Object.values(providers).map((provider)=>(
        <div key={provider.id}>
<SignInButton onClick={()=>signIn(provider.id)}>Sign in with {provider.name}</SignInButton>
        </div>
      ))}
    </SignInDiv>
  )
}

export default Signin

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
