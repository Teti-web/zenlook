import DecorativeContainer from '@/components/molecules/DecorativeContainer/DecorativeContainer';

import BlockRenderer from '@/components/blocks/BlockRenderer';
import Intro from '@/components/organisms/Intro/Intro';
import type { CmsBlock } from '@/components/blocks/BlockRender.types';
import type { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import type { ButtonProps } from '@/components/atoms/Button/Button.type';

import Description from '@/components/molecules/Description/Description';
import { GET_HOME_PAGE } from '@/query/HomePageQuery';
import { strapiGraphQL } from '@/lib/strapiFetch';

type HomePageData = {
  intro: {
    label: string;
    introDescription: {
      title: HeadingProps;
      description: string;
      button: ButtonProps;
    };
  };
  description: {
    boldText?: string;
    description: string;
    button: ButtonProps;
  };
  blocks: CmsBlock[];
};

async function fetchData(): Promise<HomePageData | null> {
  const data = await strapiGraphQL<{ global: HomePageData | null }>(GET_HOME_PAGE, {
    revalidate: 60,
    tags: ['global'],
  });
  return data?.global ?? null;
}

export default async function Home() {
  const data = await fetchData();

  if (!data) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center gap-2 text-center">
        <p className="text-lg font-medium">Content is not available yet</p>
        <p className="text-neutral-500">Publish the &quot;Global&quot; entry in Strapi to populate this page.</p>
      </div>
    );
  }

  return (
    <>
      <Intro
        label={data.intro.label}
        description={{
          title: {
            text: data.intro.introDescription.title.text,
            variant: data.intro.introDescription.title.variant,
            className: 'text-center',
          },
          description: data.intro.introDescription.description,
          button: {
            isLink: true,
            href: data.intro.introDescription.button.href,
            children: data.intro.introDescription.button.children,
            variant: data.intro.introDescription.button.variant,
            size: data.intro.introDescription.button.size,
            label: data.intro.introDescription.button.label,
            className: 'w-max',
          },
        }}
      />
      <Description
        boldText={data.description.boldText}
        description={data.description.description}
        button={{
          isLink: true,
          href: data.description.button.href,
          children: data.description.button.children,
          variant: data.description.button.variant,
          size: data.description.button.size,
          label: data.description.button.label,
          className: 'w-max',
        }}
      />

      <DecorativeContainer>
        <BlockRenderer blocks={data.blocks} />
      </DecorativeContainer>
    </>
  );
}
