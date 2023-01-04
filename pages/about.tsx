import PageTransition from "../components/PageTransition";
import Title from "../components/Title";

export default function Abount() {
  return (
    <PageTransition bg="bg-blue-500">
      <main className="max-w-6xl mx-auto pb-12">
        <div className="h-screen flex items-center">
          <Title>About Us</Title>
        </div>
      </main>
    </PageTransition>
  );
}
