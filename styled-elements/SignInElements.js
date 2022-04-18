import tw from "twin.macro";


export const SignInDiv = tw.div`
h-screen
bg-black
flex
justify-center
items-center
flex-col

space-y-8
`

export const SignInButton = tw.div`
text-white
py-4
px-6
rounded-full
bg-[#1db954]
transition-all
duration-300
ease-out
border
border-transparent
uppercase
font-bold
text-xs
md:text-base
tracking-wider
hover:scale-105
hover:bg-[#0db146]
`