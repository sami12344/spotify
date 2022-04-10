import Image from 'next/image'
import {
  ChartBarButton,
  ClockButton,
  CompassFillButton,
  DotsHorizontalButton,
  HomeButton,
  Icons,
  MicrophoneButton,
  SidebarSection,
} from '../styled-elements/SidebarElement'

const Sidebar = () => {
  return (
    <SidebarSection>
      <Image
        src='/spotify-logo.png'
        width={56}
        height={56}
        objectFit='contain'
      />
      <Icons>
        <HomeButton />
        <CompassFillButton />
        <MicrophoneButton />
        <ChartBarButton />
        <ClockButton/>
        <DotsHorizontalButton/>
      </Icons>
    </SidebarSection>
  )
}

export default Sidebar
