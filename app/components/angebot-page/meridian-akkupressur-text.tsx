import { Price } from '../price/price';

export const MeridianAkkupressurText = () => {
  return (
    <div className="flex flex-col gap-4" style={{ textWrap: 'balance' }}>
      <p className="text-2xl text-primary-400 lg:text-4xl">
        Akkupressur und Meridianmassage,
      </p>
      <p className="lg:text-lg">
        In meinen Akkupressur- und Meridianmassage-Sitzungen entdecken wir
        gemeinsam die kraftvollen Wege der traditionellen chinesischen Medizin.
        Durch präzisen Druck auf bestimmte Akupunkturpunkte und das Folgen der
        Energielinien der Meridiane unterstützen wir den Fluss deiner
        Lebensenergie, auch Qi genannt.
      </p>
      <p className="lg:text-lg">
        Meine Sitzungen sind sorgfältig darauf ausgerichtet, die subtilen
        Nuancen der Akupressur und Meridianmassage zu erkunden und dein
        energetisches Wohlbefinden zu fördern.
      </p>
      <p className="lg:text-lg">
        Tauche ein in die heilende Welt der Akupressur und Meridianmassage, in
        der dein Wohlbefinden im Mittelpunkt steht.
      </p>
      <Price
        image="/images/purple_bg.jpg"
        length={'90 Minuten'}
        price={'100€'}
      />
    </div>
  );
};
