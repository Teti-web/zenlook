import DecorativeContainer from '@/components/molecules/DecorativeContainer/DecorativeContainer';
import FeaturesBlock from '@/components/organisms/FeaturesBlock/FeaturesBlock';
import BagFeatures from '@/components/organisms/BagFeatures/BagFeatures';
import Appointment from '@/components/organisms/Appointment/Appointment';
import Description from '@/components/molecules/Description/Description';
import AutoSlider from '@/components/molecules/AutoSlider/AutoSlider';
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
              className: 'z-20',
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
                  className: 'top-20 -left-8',
                },
              ],
            },
          ]}
        />
        <AutoSlider
          label={{
            text: 'TRUSTED BY',
          }}
          items={[
            {
              src: '/images/trasted/logo-1.png',
              alt: 'Calendar',
              width: 194,
              height: 58,
            },
            {
              src: '/images/trasted/logo-2.png',
              alt: 'Calendar',
              width: 221,
              height: 40,
            },
            {
              src: '/images/trasted/logo-3.png',
              alt: 'Calendar',
              width: 163,
              height: 40,
            },
            {
              src: '/images/trasted/logo-4.png',
              alt: 'Calendar',
              width: 450,
              height: 54,
            },
          ]}
        />
        <Appointment
          label={{
            text: 'Who is it for?',
          }}
          title={{
            text: 'Built for Every Beauty Professional',
          }}
          description="From setup to daily use — discover how easy it is to run your beauty business smarter"
          slider={{
            items: [
              {
                image: {
                  src: '/images/appointment-1.png',
                  alt: 'Appointment 1',
                  width: 450,
                  height: 512,
                  quality: 80,
                },
                variant: 'beauty-professional',
                personalInfo: {
                  name: 'Amelia Potter',
                  profesional: 'Freelancers',
                  description: 'Customers for nail services',
                  rating: '1,250',
                  progress: '+15.80%',
                },
              },
              {
                image: {
                  src: '/images/appointment-2.png',
                  alt: 'Appointment 2',
                  width: 450,
                  height: 512,
                  quality: 80,
                },
                variant: 'beauty-manage',
                title: 'Salons & Barbershops',
                description: 'Manage teams, track revenue, and simplify appointments',
              },
              {
                image: {
                  src: '/images/appointment-3.png',
                  alt: 'Appointment 3',
                  width: 450,
                  height: 512,
                  quality: 80,
                },
                variant: 'beauty-professional',
                personalInfo: {
                  name: 'Andrew Mac',
                  profesional: 'Barbershop owner',
                  description: 'Followers gained this post',
                  rating: '850',
                  progress: '+65.50%',
                },
              },
              {
                image: {
                  src: '/images/appointment-4.png',
                  alt: 'Appointment 1',
                  width: 450,
                  height: 512,
                  quality: 80,
                },
                variant: 'beauty-benefits',
                title: 'Mobile Professionals',
                description: 'Take bookings anywhere, sync your schedule across multiple locations',
              },
            ],
          }}
        />
        <BagFeatures
          image={{
            src: '/images/bag.png',
            alt: 'Bag',
            width: 1132,
            height: 1092,
          }}
          label={{
            text: 'Key Features',
          }}
          title={{
            text: 'Everything You Need in One Place',
            variant: 'h2',
          }}
          features={[
            {
              title: 'Booking via Instagram & TikTok',
              description: 'Let clients book directly from social media',
              position: {
                top: {
                  mobile: '65%',
                  tablet: '244px',
                  desktop: '278px',
                },
                left: {
                  mobile: '12%',
                  tablet: '-4px',
                  desktop: '117px',
                },
              },
            },
            {
              title: 'Booking via Instagram & TikTok 2',
              description: 'Let clients book directly from social media',
              position: {
                top: {
                  mobile: '78%',
                  tablet: '92%',
                  desktop: '92%',
                },
                left: {
                  mobile: '30%',
                  tablet: '24%',
                  desktop: '24%',
                },
              },
            },
            {
              title: 'Booking via Instagram & TikTok 3',
              description: 'Let clients book directly from social media',
              position: {
                top: {
                  mobile: '58%',
                  tablet: '65%',
                  desktop: '65%',
                },
                left: {
                  mobile: '40%',
                  tablet: '27%',
                  desktop: '27%',
                },
              },
            },
            {
              title: 'Booking via Instagram & TikTok 4',
              description: 'Let clients book directly from social media',
              position: {
                top: {
                  mobile: '40%',
                  tablet: '38%',
                  desktop: '38%',
                },
                left: {
                  mobile: '56%',
                  tablet: '47%',
                  desktop: '47%',
                },
              },
            },
            {
              title: 'Booking via Instagram & TikTok 5',
              description: 'Let clients book directly from social media',
              position: {
                top: {
                  mobile: '26%',
                  tablet: '51%',
                  desktop: '51%',
                },
                left: {
                  mobile: '77%',
                  tablet: '58%',
                  desktop: '58%',
                },
              },
            },
            {
              title: 'Booking via Instagram & TikTok 6',
              description: 'Let clients book directly from social media',
              position: {
                top: {
                  mobile: '45%',
                  tablet: '81%',
                  desktop: '81%',
                },
                left: {
                  mobile: '67%',
                  tablet: '47%',
                  desktop: '47%',
                },
              },
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
