import { Fußreflexzonenmassage } from '../components/angebot-page/fußreflexzonenmassage-text';
import { IndividuellerText } from '../components/angebot-page/individuell-text';
import { MeridianAkkupressurText } from '../components/angebot-page/meridian-akkupressur-text';
import { YogaText } from '../components/angebot-page/yoga-text';
import { FiftyFiftySection } from '../components/fifty-fifty-secion/fifty-fifty-section';
import { LotusLine } from '../components/lotus_line/lotus_line';
import { GreetingText } from '../components/main-page/greeting-text';
import { PresentationText } from '../components/main-page/presentation-text';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 py-10 sm:px-10 sm:py-14 md:py-20 lg:p-24 lg:pl-24 lg:pr-24 xl:pl-56 xl:pr-56">
      <FiftyFiftySection
        image="/images/lichtort_yoga.webp"
        text={<YogaText />}
      />
      <LotusLine />
      <FiftyFiftySection
        image="/images/placeholder_fuß.jpg"
        text={<Fußreflexzonenmassage />}
        left
      />
      <LotusLine />
      <FiftyFiftySection
        image="/images/placeholder_tcm.jpg"
        text={<MeridianAkkupressurText />}
      />
      <LotusLine />
      <FiftyFiftySection
        image="/images/behandlungsraum.webp"
        text={<IndividuellerText />}
        left
      />
    </main>
  );
}
