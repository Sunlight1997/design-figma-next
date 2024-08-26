import BadgeLayout from './components/BadgeLayout';
import Footer from './components/Footer';
import HeaderNav from './components/HeaderNav';
import LastActivity from './components/LastActivity';
import Preview from './components/Preview';

export default function Home() {
  return (
    <div className="bg-dark">
      <main className="flex justify-center">
        <div className="flex max-w-[1250px] flex-col items-center justify-between">
          <HeaderNav></HeaderNav>
          <LastActivity></LastActivity>
          <Preview></Preview>
          <BadgeLayout></BadgeLayout>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
