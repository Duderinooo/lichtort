import Image from 'next/image';

export const GreetingText = () => {
  return (
    <div className="flex flex-col gap-4" style={{ textWrap: 'balance' }}>
      <p className="text-4xl text-primary-400">Namaste,</p>
      <p className="lg:text-lg">
        und herzlich willkommen im LichtOrt. Einem Ort für Yoga, Heilung und
        Meditation in wohlwollender und entspannter Atmosphäre. Einem Ort der
        Achtsamkeit und Ruhe, frei von Hektik und den Ansprüchen unseres
        modernen Alltags.
      </p>
      <p className="lg:text-lg">
        Yoga bedeuted für mich Achtsamkeit in Aktion. Dabei liegt mir vor allem
        der ganzheitliche Apsekt der Harmonie von Körper, Geist und Seele am
        Herzen.
      </p>
      <p className="lg:text-lg">
        Mit meinem Angebot möchte ich dir helfen, dich durch sanfte Körper- und
        Atemübungen von äußeren Einflüssen zu lösen und in ungestörten Kontakt
        zu dir selbst zu kommen. Das Ergebnis? Ein Zuwachs an Wohlbefinden,
        Entspannung, Energie und langfristig gesteigerter Lebensfreude.
      </p>
      <p className="lg:text-lg">Ich freue mich schon auf dich!</p>
      <Image
        className="ml-14"
        src={'/images/signature.svg'}
        alt={'Signature of tina ollmann'}
        width={120}
        height={40}
      />
    </div>
  );
};
