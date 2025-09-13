import { PageWrapper } from "@/app/components/layouts/PageWrapper";
import Swatch from "@/app/design-system/components/Swatch";
import {
  Body1,
  Body2,
  Caption,
  Headline,
  HeadlineXL,
  Label,
  Subheading1,
  Subheading2,
} from "../components/typography";

export default function Page() {
  return (
    <PageWrapper>
      <main className="ds-container">
        <Headline className="mb-6">Design system</Headline>
        <section className="mb-8">
          <Subheading2 className="mb-3 pb-3 border-b-2 border-neutral-400">
            Colors
          </Subheading2>
          <div className="max-w-3xl">
            <div className="mb-6">
              <Body1 className="mb-3 font-bold">Primary</Body1>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-primary-green-100" value="#2dba4e" />
                <Swatch color="bg-primary-black-100" value="#2dba4e" />
                <Swatch color="bg-primary-black-200" value="#2dba4e" />
                <Swatch color="bg-primary-white-50  " value="#2dba4e" />
                <Swatch color="bg-primary-white-100" value="#2dba4e" />
              </div>
            </div>
            <div className="mb-6">
              <Body1 className="mb-3 font-bold">Secondary</Body1>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-secondary-green-300" value="#e6f4ea" />
                <Swatch color="bg-secondary-green-700" value="#e6f4ea" />
                <Swatch color="bg-secondary-green-900" value="#e6f4ea" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Subheading2 className="mb-3 pb-3 border-b-2 border-neutral-400">
            Typography
          </Subheading2>
          <div className="max-w-3xl flex flex-col gap-4">
            <HeadlineXL>Headline XL</HeadlineXL>
            <Headline>Headline</Headline>
            <Subheading1>Subheading 1</Subheading1>
            <Subheading2>Subheading 2</Subheading2>
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
