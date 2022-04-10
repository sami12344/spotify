import tw from 'twin.macro'

export const BodySection = tw.section`
font-body
bg-black
ml-24
py-4
space-y-8
md:max-w-6xl
flex-grow
md:mr-2.5
`

export const PlaylistContainer = tw.div`
grid
overflow-y-scroll
scrollbar-hide
h-96
py-4
grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-x-4
gap-y-8
p-4
`

