import Image from 'next/image';

export const PresentationText = () => {
  return (
    <div className="flex flex-col gap-4" style={{ textWrap: 'balance' }}>
      <p className="text-2xl text-primary-400 lg:text-4xl">Über mich,</p>
      <p className=" flex font-bold lg:text-lg">
        Namaste, ich bin Tina Ollmann, deine Yogalehrerin im LichtOrt.
      </p>
      <p className="lg:text-lg">
        Seit 1998 begleitet mich die faszinierende Welt des Yoga. In zahlreichen
        Yoga-Kursen und Seminaren habe ich die wohltuenden Effekte dieser Praxis
        selbst erfahren.
      </p>
      <p className="lg:text-lg">
        2013 entschied ich mich für die vierjährige Yogalehrausbildung am
        Himalaya Institut Hamburg, die ich 2017 erfolgreich mit dem offiziell
        anerkannten Abschluss &ldquo;Yogalehrerin BDY/EYU&rdquo; des &ldquo;Bund
        der Yogalehrenden Deutschland&rdquo; und der &ldquo;European Yoga
        Union&rdquo; abschloss.
      </p>
      <p className="lg:text-lg">
        Seit 2014 teile ich meine Liebe und Erfahrung im Yoga-Unterricht und
        habe mich kontinuierlich weitergebildet. Eine besondere Vertiefung fand
        ich in einer zweijährigen Ausbildung in therapeutischem Begleiten.
      </p>
      <p className="lg:text-lg">
        Im LichtOrt, meinem Herzensprojekt, lade ich dich ein, an diesem
        ganzheitlichen Weg teilzuhaben. Lass uns gemeinsam die Freude, die
        Entspannung und die Energie des Yoga erleben!
      </p>
      <div className="flex">
        <p className="my-auto lg:text-lg">Namaste,</p>
        <Image
          className="ml-14"
          src={'/images/signature.svg'}
          alt={'Signature of tina ollmann'}
          width={120}
          height={40}
        />
      </div>
    </div>
  );
};
