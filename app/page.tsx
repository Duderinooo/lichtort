import { LotusLine } from './components/lotus_line/lotus_line';
import { FiftyFiftySection } from './components/fifty-fifty-secion/fifty-fifty-section';
import Image from 'next/image';
import { GreetingText } from './components/main-page/greeting-text';
import { PresentationText } from './components/main-page/presentation-text';

export default function Home() {
  return (
    <main
      id="start"
      className="flex min-h-screen flex-col justify-between px-4 py-20 sm:px-10 sm:py-28 lg:px-24 lg:py-32 xl:px-56 xl:py-36"
    >
      <FiftyFiftySection
        alt="Lichtort entrance room with bright sunny light"
        image="/images/original.webp"
        text={<GreetingText />}
      />
      <LotusLine />
      <FiftyFiftySection alt={''} image="/images/red_bg.jpg" text={dummyText} />
      <LotusLine />
      <FiftyFiftySection
        alt={'Tina ollmann yoga teacher and healer founder of lichtort'}
        image="/images/placeholder_tina.jpg"
        text={<PresentationText />}
        left
      />
    </main>
  );
}

const dummyText = (
  <p className="flex flex-wrap">
    xLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </p>
);
