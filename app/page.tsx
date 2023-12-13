import Image from 'next/image';
import { FiftyFiftySection } from './components/fifty-fifty-secion/fifty-fifty-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 pl-56 pr-56">
      <FiftyFiftySection image="./images/tina.jpg" text={dummyText} />
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
