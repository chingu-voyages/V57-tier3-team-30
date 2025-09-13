import { PageWrapper } from "@/app/components/layouts/PageWrapper";
import Swatch from "@/app/design-system/components/Swatch";
import { Button } from "@/components/ui/button";
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
import {
  GitCommitIcon,
  GitMerge,
  GitPullRequestClosedIcon,
  GitPullRequestIcon,
  MergeIcon,
  Smile,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
                <Swatch color="bg-primary-black-100" value="#010409" />
                <Swatch color="bg-primary-black-200" value="#0D1117" />
                <Swatch color="bg-primary-white-50" value="#ffffff" />
                <Swatch color="bg-primary-white-100" value="#fafbfc" />
              </div>
            </div>
            <div className="mb-6">
              <Body1 className="mb-3 font-bold">Secondary</Body1>
              <div className="flex gap-4 flex-wrap">
                <Swatch color="bg-secondary-green-300" value="#5fed83" />
                <Swatch color="bg-secondary-green-700" value="#08872b" />
                <Swatch color="bg-secondary-green-900" value="#104C35" />
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
          <section>
            <Subheading2 className="mt-8 mb-3 pb-3 border-b-2 border-neutral-400">
              Components
            </Subheading2>
            <Body1 className="mb-3 font-bold">Buttons</Body1>
            <div className="flex gap-4 flex-wrap mb-3">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
              <Button disabled>Disabled Button</Button>
              <Button variant={"destructive"}>Destructive Button</Button>
              <Button size={"sm"}>Small Button</Button>
              <Button size={"lg"}>Large Button</Button>
              <Button size={"icon"} variant={"secondary"}>
                <GitMerge />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <MergeIcon />
              </Button>
              <Button className="bg-teal-500 rounded-none text-black hover:bg-teal-600">
                Custom <Smile />
              </Button>
            </div>
            <Body1 className="mb-3 font-bold">Badges</Body1>
            <div className="mt-3 flex gap-4">
              <Badge className="bg-primary [&>svg]:size-5 rounded-3xl px-4 py-1">
                <GitPullRequestIcon />
                <Body2>Open</Body2>
              </Badge>
              <Badge
                variant="destructive"
                className="[&>svg]:size-5 rounded-3xl px-4 py-1"
              >
                <GitPullRequestClosedIcon />
                <Body2>Closed</Body2>
              </Badge>
            </div>
          </section>
        </section>
      </main>
    </PageWrapper>
  );
}
