import { PageWrapper } from "../components/PageWrapper";
import Swatch from "../components/Swatch";

export default function Page() {
  return (
    <PageWrapper>
      <main className="ds-container">
        <h1 className="text-4xl font-bold mb-5">Design system</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Color palette</h2>
          <div className="max-w-3xl">
            <div className="p-4">
              <h3 className="font-semibold mb-3 border-b-2">Primary</h3>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-primary-green-100" value="#2dba4e" />
                <Swatch color="bg-primary-black-100" value="#2dba4e" />
                <Swatch color="bg-primary-black-200" value="#2dba4e" />
                <Swatch color="bg-primary-white-50  " value="#2dba4e" />
                <Swatch color="bg-primary-white-100" value="#2dba4e" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-3 border-b-2">Secondary</h3>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-secondary-green-300" value="#e6f4ea" />
                <Swatch color="bg-secondary-green-700" value="#e6f4ea" />
                <Swatch color="bg-secondary-green-900" value="#e6f4ea" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
