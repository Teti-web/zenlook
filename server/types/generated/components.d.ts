import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsAnagraph extends Struct.ComponentSchema {
  collectionName: 'components_atoms_anagraphs';
  info: {
    displayName: 'anagraph';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    children: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'medium'>;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'decorative']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface AtomsImage extends Struct.ComponentSchema {
  collectionName: 'components_atoms_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    desktopSrc: Schema.Attribute.Media<'images'>;
    height: Schema.Attribute.BigInteger;
    mobileSrc: Schema.Attribute.Media<'images'>;
    src: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tableSrc: Schema.Attribute.Media<'images', true>;
    width: Schema.Attribute.BigInteger;
  };
}

export interface AtomsLink extends Struct.ComponentSchema {
  collectionName: 'components_atoms_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    children: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'underline', 'notice']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.anagraph': AtomsAnagraph;
      'atoms.button': AtomsButton;
      'atoms.image': AtomsImage;
      'atoms.link': AtomsLink;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
