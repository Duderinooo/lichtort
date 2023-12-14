import { Price } from '../price/price';

export const Fußreflexzonenmassage = () => {
  return (
    <div className="flex flex-col gap-4" style={{ textWrap: 'balance' }}>
      <p className="text-2xl text-primary-400 lg:text-4xl">
        Fußreflexzonenmassage,
      </p>
      <p className="lg:text-lg">
        Willkommen zu einer Reise der Entspannung und Heilung für Körper und
        Geist!
      </p>
      <p className="lg:text-lg">
        Gemeinsam erkunden wir die Reflexzonen deiner Füße, um das Gleichgewicht
        in deinem gesamten Körper wiederherzustellen. Jede Berührung ist sorgsam
        und liebevoll, während wir behutsam Blockaden lösen und dein inneres
        Wohlbefinden fördern.
      </p>
      <p className="lg:text-lg">
        Tauche ein in diese heilende Reise und erlebe, wie eine
        Fußreflexzonenmassage nicht nur deine Füße, sondern deinen gesamten
        Körper revitalisieren kann.
      </p>
      <p className="lg:text-lg">
        Ich freue mich darauf, dich auf dieser Reise zur Entspannung und
        Erneuerung zu begleiten.
      </p>
      <Price
        image="/images/yellow_bg.jpg"
        length={'60 Minuten'}
        price={'75€'}
      />
    </div>
  );
};
