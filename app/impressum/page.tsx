'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <main
      id="impressum"
      className="flex min-h-screen flex-col justify-between px-4 py-10 sm:px-10 sm:py-14 md:py-20 lg:p-24 lg:pl-24 lg:pr-24 xl:pl-56 xl:pr-56"
    >
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <ArrowLeftIcon
            className="h-12 w-12 cursor-pointer"
            onClick={() => router.back()}
          />
          <p className=" text-4xl font-bold" style={{ textWrap: 'balance' }}>
            Impressum
          </p>
        </div>
        <div className="flex flex-col gap-4" style={{ textWrap: 'balance' }}>
          <p className="text-2xl font-bold font-bold">Angaben gemäß § 5 TMG</p>
          <p>Tina Ollmann</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold" style={{ textWrap: 'balance' }}>
            Kontakt
          </p>
          <p>impressum@lichtOrt.de</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold" style={{ textWrap: 'balance' }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV{' '}
          </p>
          <p>Tina Ollmann</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold" style={{ textWrap: 'balance' }}>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold" style={{ textWrap: 'balance' }}>
            Haftung für Inhalte
          </p>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold" style={{ textWrap: 'balance' }}>
            Haftung für Links
          </p>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold" style={{ textWrap: 'balance' }}>
            Urheberrecht
          </p>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </main>
  );
}
