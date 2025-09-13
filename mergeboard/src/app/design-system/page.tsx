import { PageWrapper } from "@/app/components/layouts/PageWrapper";
import Swatch from "@/app/components/Swatch";
import {
  Body1,
  Body2,
  Caption,
  Headline,
  HeadlineXL,
  Label,
  Subheading,
} from "../components/typography";

export default function Page() {
  return (
    <PageWrapper>
      <main className="ds-container">
        <h1 className="text-4xl font-bold mb-8">Design system</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 ">Color palette</h2>
          <div className="max-w-3xl">
            <div className="mb-6">
              <h3 className="font-semibold mb-3 border-b-2">Primary</h3>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-primary-green-100" value="#2dba4e" />
                <Swatch color="bg-primary-black-100" value="#2dba4e" />
                <Swatch color="bg-primary-black-200" value="#2dba4e" />
                <Swatch color="bg-primary-white-50  " value="#2dba4e" />
                <Swatch color="bg-primary-white-100" value="#2dba4e" />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-3 border-b-2">Secondary</h3>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-secondary-green-300" value="#e6f4ea" />
                <Swatch color="bg-secondary-green-700" value="#e6f4ea" />
                <Swatch color="bg-secondary-green-900" value="#e6f4ea" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Typography</h2>
          <div className="max-w-3xl flex flex-col gap-4">
            <HeadlineXL>Headline XL</HeadlineXL>
            <Headline>Headline</Headline>
            <Subheading>Subheading</Subheading>
            <Body1>
              Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Body1>
            <Body2>
              Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Body2>
            <Caption>Caption - Lorem ipsum dolor sit amet.</Caption>
            <Label>Label - Lorem ipsum dolor sit amet.</Label>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
