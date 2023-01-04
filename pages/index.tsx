import PageTransition from "../components/PageTransition";
import Title from "../components/Title";
import { pathPalette } from "./_app";

export default function Home() {
  return (
    <PageTransition bg={pathPalette.default.bg}>
      <main className="max-w-6xl mx-auto pb-12">
        <div className="h-screen flex items-center">
          <Title>Happy Pickle</Title>
        </div>

        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2023</h2>
          </div>
          <div>
            <h3>This pickle gonna make you smile.</h3>
            <h3>Scottish designs to make you happy.</h3>
            <h3>Click contact for cool transition.</h3>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
