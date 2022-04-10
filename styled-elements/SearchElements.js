import tw from 'twin.macro'
import {MdOutlineShortText} from 'react-icons/md'
export const SearchBar = tw.div`
rounded-full
overflow-hidden
border-2
border-[#333333]
p-1.5
max-w-[1154px]
bg-[#1a1a1a]
px-5
pr-8
flex
items-center

`
export const SearchBox = tw.div`
h-4
w-4
rounded-full
border-2
flex-shrink-0
animate-pulse
`
export const SearchInput = tw.input`
bg-[#1a1a1a]
ml-3
text-white
border-none
lg:w-full
focus:ring-0
outline-none
placeholder-[#fafafa]
`

export const Buttons = tw.div`
flex
space-x-2 
pr-5
`
export const ButtonContainer = tw.div`
flex
items-center
justify-center
divide-dotted
divide-x-2
divide-[#333]
ml-auto
`


export const TagButton = tw.button`
py-1.5
px-3
text-[#cecece]
rounded-xl
text-xs
font-bold
border-2
border-[#484848]
`

export const OutLineShortText = tw(MdOutlineShortText)`
text-2xl
animate-pulse
`

export const FiltersContainer = tw.div`
flex
items-center
space-x-1.5
text-[#cecece]
pl-4

`
export const FilterSpan  = tw.span`
font-medium
text-sm
`