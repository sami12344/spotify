import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from '@heroicons/react/solid'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { RiCompassFill } from 'react-icons/ri'
import tw from 'twin.macro'

export const SidebarSection = tw.section`
fixed
top-0
z-40
flex-col
p-4
items-center
bg-black
w-[90px]
h-screen
space-y-8
`
export const Icons = tw.div`
flex
flex-col
items-center
justify-center
space-y-8

`
export const HomeButton = tw(HomeIcon)`

opacity-[0.85]
h-6
text-[#808080]
cursor-pointer
`
export const DotsHorizontalButton = tw(DotsHorizontalIcon)`

h-6
text-[#808080]
cursor-pointer
`
export const ClockButton = tw(ClockIcon)`

h-6
text-[#808080]
cursor-pointer
`
export const ChartBarButton = tw(ChartBarIcon)`

h-6
text-[#808080]
cursor-pointer
`
export const MicrophoneButton = tw(FaMicrophoneAlt)`

h-6
text-[#808080]
cursor-pointer

`
export const CompassFillButton = tw(RiCompassFill)`
text-2xl
h-6
text-[#808080]
cursor-pointer
`
