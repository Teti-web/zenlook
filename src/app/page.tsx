import DecorativeContainer from '@/components/molecules/DecorativeContainer/DecorativeContainer';
import FeaturesBlock from '@/components/organisms/FeaturesBlock/FeaturesBlock';
import Description from '@/components/molecules/Description/Description';
import Anagraph from '@/components/molecules/Anagraph/Anagraph';
import Intro from '@/components/organisms/Intro/Intro';

export default function Home() {
  return (
    <>
      <Intro
        label="№1 CRM FOR BEAUTY MASTERS"
        description={{
          title: {
            text: 'Boss Your Beauty Biz Like a Pro',
            variant: 'h1',
            className: 'text-center',
          },
          description:
            'Zenlook helps beauty professionals manage appointments, send automated reminders, and grow their business effortlessly.',
          button: {
            isLink: true,
            href: '/',
            children: 'Try for Free',
            variant: 'primary',
            size: 'medium',
            className: 'w-max',
          },
        }}
      />
      <Description
        boldText="Zenlook helps beauty professionals manage appointments, send automated reminders, and grow their business effortlessly."
        description="From setup to daily use — discover how easy it is to run your beauty business smarter"
        button={{
          isLink: true,
          href: '/',
          children: 'Try for Free',
          variant: 'secondary',
          size: 'small',
          className: 'w-max',
        }}
      />
      <DecorativeContainer>
        <FeaturesBlock
          label={{
            text: 'NO FLUFF. JUST ESSENTIALS.',
          }}
          title={{
            text: 'Manage your beauty business like a dream',
            variant: 'h2',
          }}
          features={[
            {
              translate: 'top',
              className: 'z-2',
              decorativeNumber: '01',
              title: {
                text: 'Track your performance',
                variant: 'h3',
              },
              description: 'Track your progress and performance easily & growth here',
              image: {
                src: '/images/reports.png',
                alt: 'Reports',
                width: 391,
                height: 280,
              },
            },
            {
              className: 'z-3',
              decorativeNumber: '02',
              title: {
                text: 'Zenlook Sends Reminders',
                variant: 'h3',
              },
              description: 'Reduce no-shows and keep your schedule full',
              image: {
                src: '/images/meetings.png',
                alt: 'Meetings',
                width: 391,
                height: 280,
              },
            },
            {
              translate: 'middle',
              className: 'z-[-1]',
              decorativeNumber: '03',
              title: {
                text: 'Set Up Your Schedule ',
                variant: 'h3',
              },
              description: 'Add services, pricing, and availability',
              image: {
                src: '/images/calendar.png',
                mobileSrc: '/images/calendar-mobile.png',
                alt: 'Calendar',
                width: 391,
                height: 280,
              },
              decoratorsImage: [
                {
                  src: '/images/calendar-client.png',
                  alt: 'Calendar Client',
                  width: 125,
                  height: 69,
                  className: 'top-9 -left-6',
                },
                {
                  src: '/images/calendar-client2.png',
                  alt: 'Calendar Client 2',
                  width: 125,
                  height: 69,
                  className: 'top-31 -left-10',
                },
              ],
            },
          ]}
        />
        <Anagraph
          title="Contact us"
          description={'Curious to streamline you workflow, boost your brand or start glowing today?'}
        />
      </DecorativeContainer>
    </>
  );
}
