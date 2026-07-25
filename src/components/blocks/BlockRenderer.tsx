/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { CardBeautyProps, Variants } from '../molecules/CardBeauty/CardBeauty.type';
import { ReviewCardProps } from '../molecules/ReviewCard/ReviewCard.types';
import { ImageProps } from '../atoms/Image/Image.type';
import { getStrapiBaseUrl, getStrapiUrl } from '@/helpers/getStrapiUrl';
import type { CmsBlock } from './BlockRender.types';
import Reviews from '../organisms/Reviews/Reviews';
import dynamic from 'next/dynamic';

const Anagraph = dynamic(() => import('@/components/molecules/Anagraph/Anagraph'), { ssr: false });
const FeaturesBlock = dynamic(() => import('@/components/organisms/FeaturesBlock/FeaturesBlock'), { ssr: false });
const AutoSlider = dynamic(() => import('@/components/molecules/AutoSlider/AutoSlider'), { ssr: false });
const Appointment = dynamic(() => import('@/components/organisms/Appointment/Appointment'), { ssr: false });
const BagFeatures = dynamic(() => import('@/components/organisms/BagFeatures/BagFeatures'), { ssr: false });
const BeautyManage = dynamic(() => import('@/components/organisms/BeautyManage/BeautyManage'), { ssr: false });

export default function BlockRenderer({ blocks }: { blocks: CmsBlock[] }) {
  if (!blocks?.length) return null;

  const baseUrl = getStrapiBaseUrl();
  const isImageProps = (v: unknown): v is ImageProps => !!v && typeof v === 'object' && 'src' in (v as any);
  const isCardBeauty = (v: unknown): v is CardBeautyProps =>
    !!v && typeof v === 'object' && 'variant' in (v as any) && 'image' in (v as any);
  const isReviewCard = (v: unknown): v is ReviewCardProps =>
    !!v && typeof v === 'object' && 'text' in (v as any) && 'author' in (v as any) && 'image' in (v as any);

  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case 'ComponentAtomsAnagraph':
            return (
              <Anagraph
                key={`${block.id}-anagraph`}
                title={block.anagrahpTitle}
                description={block.anagrahpDescription}
              />
            );
          case 'ComponentMainFeatures':
            return (
              <FeaturesBlock
                key={`${block.id}-features`}
                label={{ text: block.label }}
                title={block.title}
                features={block.featuresCards.map((feature) => ({
                  ...feature,
                  image: {
                    ...feature.image,
                    src: getStrapiUrl(feature.image?.src, baseUrl),
                    alt: feature.image.alt,
                    width: feature.image.width,
                    height: feature.image.height,
                    className: feature.image.className,
                  },
                  decoratorsImage: feature.decoratorsImage?.map((image) => ({
                    ...image,
                    src: getStrapiUrl(image?.src, baseUrl),
                  })),
                }))}
              />
            );
          case 'ComponentMoleculesAutoSlider':
            return (
              <AutoSlider
                key={`${block.id}-auto-slider`}
                label={{ text: block.label }}
                items={block.items?.map((item) => ({
                  ...item,
                  src: getStrapiUrl(item?.src, baseUrl),
                }))}
              />
            );

          case 'ComponentMainAppointment':
            return (
              <Appointment
                key={`${block.id}-appointment`}
                title={block.title}
                description={block.description}
                label={{ text: block.label }}
                slider={{
                  ...block.slider,
                  items: block.slider.items.filter(isCardBeauty).map((item) => ({
                    variant: (item?.variant as string).replace('_', '-') as Variants,
                    title: item.title ?? '',
                    description: item.description ?? '',
                    personalInfo: item.personalInfo
                      ? {
                          name: item.personalInfo.name ?? '',
                          profesional: item.personalInfo.profesional ?? '',
                          description: item.personalInfo.description ?? '',
                          rating: item.personalInfo.rating ?? '',
                          progress: item.personalInfo.progress ?? '',
                        }
                      : undefined,
                    image: {
                      ...item.image,
                      src: getStrapiUrl(item.image?.src, baseUrl),
                      mobileSrc: getStrapiUrl(item.image?.mobileSrc, baseUrl),
                      desktopSrc: getStrapiUrl(item.image?.desktopSrc, baseUrl),
                      tabletSrc: getStrapiUrl(item.image?.tabletSrc, baseUrl),
                    },
                  })),
                }}
              />
            );
          case 'ComponentMainBagFeatures':
            return (
              <BagFeatures
                key={`${block.id}-bag-features`}
                label={{ text: block.label }}
                title={block.title}
                image={{
                  ...block.image,
                  src: getStrapiUrl(block.image?.src, baseUrl),
                  mobileSrc: getStrapiUrl(block.image?.mobileSrc, baseUrl ?? ''),
                  tabletSrc: getStrapiUrl(block.image?.tabletSrc, baseUrl ?? ''),
                  desktopSrc: getStrapiUrl(block.image?.desktopSrc, baseUrl ?? ''),
                }}
                features={block.features.map((feature) => ({
                  ...feature,
                }))}
              />
            );
          case 'ComponentMainBeautyManage':
            return (
              <BeautyManage
                key={`${block.id}-beauty-manage`}
                title={block.title}
                description={block.description}
                tabs={block.tabs.map((tab) => {
                  const img = isImageProps(tab.content) ? tab.content : null;
                  return {
                    ...tab,
                    content: img ? { ...img, src: getStrapiUrl(img.src, baseUrl) } : tab.content,
                  };
                })}
                button={block.button ? { ...block.button, href: getStrapiUrl(block.button.href, baseUrl) } : undefined}
                label={block.label ? { text: block.label } : undefined}
              />
            );
          case 'ComponentMainReviews':
            return (
              <Reviews
                key={`${block.id}-reviews`}
                label={block.label ? { text: block.label } : undefined}
                title={block.title}
                reviews={block.reviews.filter(isReviewCard).map((review) => ({
                  ...review,
                  image: {
                    ...review.image,
                    src: getStrapiUrl(review.image?.src, baseUrl),
                    mobileSrc: getStrapiUrl(review.image?.mobileSrc, baseUrl),
                    tabletSrc: getStrapiUrl(review.image?.tabletSrc, baseUrl),
                    desktopSrc: getStrapiUrl(review.image?.desktopSrc, baseUrl),
                  },
                }))}
                button={block.button ? { ...block.button, href: getStrapiUrl(block.button.href, baseUrl) } : undefined}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
