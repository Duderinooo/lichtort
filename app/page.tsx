import Image from 'next/image';
import { LotusLine } from './components/lotus_line/lotus_line';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <LotusLine />
    </main>
  );
}
