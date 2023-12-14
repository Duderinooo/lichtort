import { Price } from '../price/price';

export const IndividuellerText = () => {
  return (
    <div className="flex flex-col gap-4" style={{ textWrap: 'balance' }}>
      <p className="text-2xl text-primary-400 lg:text-4xl">
        Individueller Termin,
      </p>
      <p className="lg:text-lg">
        Hast du bisher nicht das Passende für dich gefunden? Kein Problem! Ich
        lade dich herzlich ein, auf mich zuzukommen, damit wir gemeinsam ein
        individuelles Programm gestalten können, das vollständig auf deine
        Bedürfnisse und Wünsche zugeschnitten ist. Ob es um Yoga, traditionelle
        chinesische Medizin (TCM), gezielte Knie- oder Rückenmassagen,
        Fußreflexzonenbehandlungen oder andere Aspekte geht – wir können
        gemeinsam eine maßgeschneiderte Behandlung planen, die deinen
        persönlichen Zielen und Anforderungen entspricht.
      </p>
      <p className="lg:text-lg">
        Deine Zufriedenheit und dein Wohlbefinden stehen im Mittelpunkt, und ich
        freue mich darauf, mit dir zusammen eine einzigartige und effektive
        Lösung zu finden.
      </p>
      <p className="lg:text-lg">
        Nimm Kontakt auf, und lass uns gemeinsam den Weg zu deinem individuellen
        Wohlbefinden gestalten.
      </p>
      <Price image="/images/red_bg.jpg" length={'Indiv.'} price={'Indiv.'} />
    </div>
  );
};
