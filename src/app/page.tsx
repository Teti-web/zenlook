import DecorativeContainer from '@/components/molecules/DecorativeContainer/DecorativeContainer';

import BlockRenderer from '@/components/blocks/BlockRenderer';
import Intro from '@/components/organisms/Intro/Intro';

import Description from '@/components/molecules/Description/Description';
import { GET_HOME_PAGE } from '@/query/HomePageQuery';

async function fetchData() {
  const endpoint = `${(process.env.STRAPI_API_URL || 'http://localhost:1337').replace(/\/$/, '')}/graphql`;
  const token = process.env.STRAPI_API_TOKEN;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ query: GET_HOME_PAGE }),
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json?.data?.global ?? [];
}

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      {/* 
       
        <BeautyManage
          title={{
            text: 'Less hassle, more beauty magic',
            variant: 'h2',
          }}
          label={{
            text: 'Look what have you got',
          }}
          description="Zenlook helps beauty professionals manage appointments, send automated reminders, and grow their business effortlessly. "
          button={{
            isLink: true,
            href: '/',
            children: 'Start Glowing',
            variant: 'primary',
            size: 'medium',
          }}
          tabs={[
            {
              name: 'Dashboard',
              content: {
                src: '/images/manage-dashboard.png',
                alt: 'Dashboard',
                width: 709,
                height: 400,
              },
            },
            {
              name: 'Documentation',
              content: {
                src: '/images/manage-documentation.png',
                alt: 'Documentation',
                width: 709,
                height: 400,
              },
            },
            {
              name: 'Calendar',
              content: {
                src: '/images/manage-calendar.png',
                alt: 'Calendar',
                width: 709,
                height: 400,
              },
            },
          ]}
        /> */}
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
