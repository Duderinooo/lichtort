import Image from 'next/image';

export const DownloadSection = () => {
  return (
    <div className="gap-10 text-center">
      <p className=" mb-4 text-4xl">Infomaterialien</p>
      <p className="mb-8 lg:text-lg" style={{ textWrap: 'balance' }}>
        Tauche ein in unsere liebevoll zusammengestellten Broschüren zu den
        Themen Seminare, Yoga-Kurse und Behandlungen. Entdecke mehr über meine
        Angebote und finde heraus, wie ich dich auf deiner Reise zu Wohlbefinden
        und innerer Harmonie begleiten und unterstützen kann.
      </p>
      <div className="grid grid-rows-1 gap-4 overflow-hidden md:grid-cols-3 md:gap-0">
        {downloadSectionData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 md:gap-4"
          >
            <p className="text-2xl">{data.text}</p>
            <div className="relative flex h-40 w-[228px] items-center overflow-hidden rounded">
              <Image src={data.image} fill alt={''} />
            </div>
            {data.disabled ? (
              <p
                className="text-center lg:text-lg"
                style={{ textWrap: 'balance' }}
              >
                Aktuell werden leider keine {data.text} angebote.
              </p>
            ) : (
              <button className="group relative transform overflow-hidden rounded bg-gradient-to-l from-tertiary-400 to-primary-400 px-4 py-1 text-white transition-transform">
                <p className="relative z-10 font-bold lg:text-lg">
                  Herunterladen
                </p>
                <p className="absolute right-0 top-0 h-full w-full origin-right bg-gradient-to-r from-tertiary-400 to-primary-400 transition-transform group-hover:scale-x-0" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

type DownloadSectionDataType = {
  disabled?: boolean;
  image: string;
  text: JSX.Element | string;
}[];

const downloadSectionData: DownloadSectionDataType = [
  {
    disabled: true,
    image: '/images/lichtort_yoga.webp',
    text: 'Seminare',
  },
  {
    image: '/images/placeholder_tina.jpg',
    text: 'Yoga Kurse',
  },
  {
    image: '/images/behandlungsraum.webp',
    text: 'Behandlungen',
  },
];
