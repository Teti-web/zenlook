import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Name: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Private;
    Size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'medium'>;
    Variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'decorative']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface AtomsHeading extends Struct.ComponentSchema {
  collectionName: 'components_atoms_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Private;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    Variant: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> & Schema.Attribute.DefaultTo<'h2'>;
  };
}

export interface AtomsImage extends Struct.ComponentSchema {
  collectionName: 'components_atoms_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    altText: Schema.Attribute.Text & Schema.Attribute.Required;
    desktopSrc: Schema.Attribute.Media<'images' | 'files'>;
    mobileSrc: Schema.Attribute.Media<'images' | 'files'>;
    Name: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Private;
    src: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    tableSrc: Schema.Attribute.Media<'images' | 'files'>;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.button': AtomsButton;
      'atoms.heading': AtomsHeading;
      'atoms.image': AtomsImage;
      'atoms.link': AtomsLink;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
