import { LotusLine } from './components/lotus_line/lotus_line';
import { FiftyFiftySection } from './components/fifty-fifty-secion/fifty-fifty-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 py-10 sm:px-10 sm:py-14 md:py-20 lg:p-24 lg:pl-24 lg:pr-24 xl:pl-56 xl:pr-56">
      <FiftyFiftySection image="/images/yellow_bg.jpg" text={dummyText} />
      <LotusLine />
      <FiftyFiftySection image="/images/red_bg.jpg" text={dummyText} />
      <LotusLine />
      <FiftyFiftySection image="/images/green_bg.jpg" text={dummyText} left />
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
