import { Fußreflexzonenmassage } from '../components/angebot-page/fußreflexzonenmassage-text';
import { IndividuellerText } from '../components/angebot-page/individuell-text';
import { MeridianAkkupressurText } from '../components/angebot-page/meridian-akkupressur-text';
import { YogaText } from '../components/angebot-page/yoga-text';
import { DownloadSection } from '../components/download-section/download-section';
import { FiftyFiftySection } from '../components/fifty-fifty-secion/fifty-fifty-section';
import { LotusLine } from '../components/lotus_line/lotus_line';

export default function Page() {
  return (
    <main
      id="start"
      className="flex min-h-screen flex-col justify-between px-4 py-20 sm:px-10 sm:py-28 lg:px-24 lg:py-32 xl:px-56 xl:py-36"
    >
      {pageData.map((data, index) => (
        <>
          <FiftyFiftySection
            alt={data.alt}
            key={index}
            left={data.left}
            image={data.image}
            text={data.text}
          />
          <LotusLine />
        </>
      ))}
      <DownloadSection />
    </main>
  );
}

type PageDataType = {
  alt: string;
  image: string;
  left: boolean;
  text: JSX.Element;
}[];

const pageData: PageDataType = [
  {
    alt: 'Lichtort indoor yoga room. Bright and warm welcoming athmospehre',
    image: '/images/lichtort_yoga.webp',
    left: false,
    text: <YogaText />,
  },
  {
    alt: 'Feetreflexmassage in pratice',
    left: true,
    image: '/images/placeholder_fuß.jpg',
    text: <Fußreflexzonenmassage />,
  },
  {
    alt: 'Meridian tcm massage in practice',
    left: false,
    image: '/images/placeholder_tcm.jpg',
    text: <MeridianAkkupressurText />,
  },
  {
    alt: 'Tina ollmann scheduling an appointment',
    left: true,
    image: '/images/behandlungsraum.webp',
    text: <IndividuellerText />,
  },
];
