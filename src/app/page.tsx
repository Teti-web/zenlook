import Description from '@/components/molecules/Description/Description';
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
    </>
  );
}
