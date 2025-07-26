import Description from "@/components/molecules/Description/Description";

export default function Home() {
  return (
    <div>
      <Description
      boldText="Zenlook helps beauty professionals manage appointments, send automated reminders, and grow their business effortlessly."
        description="From setup to daily use — discover how easy it is to run your beauty business smarter"
       button={{
        isLink: true,
        href: '/',
        children: 'Try for Free',
        variant: 'secondary',
        size:'small',
        className: 'w-max'
       }}
        
      />
    </div>
  );
}
