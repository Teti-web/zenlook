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

export interface AtomsFeaturePosition extends Struct.ComponentSchema {
  collectionName: 'components_atoms_feature_positions';
  info: {
    displayName: 'featurePosition';
  };
  attributes: {
    left: Schema.Attribute.Component<'structure.left', false>;
    top: Schema.Attribute.Component<'structure.top', false>;
  };
}

export interface AtomsHeading extends Struct.ComponentSchema {
  collectionName: 'components_atoms_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> & Schema.Attribute.DefaultTo<'h2'>;
  };
}

export interface AtomsImage extends Struct.ComponentSchema {
  collectionName: 'components_atoms_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    className: Schema.Attribute.String;
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

export interface AtomsPersonalInfo extends Struct.ComponentSchema {
  collectionName: 'components_atoms_personal_infos';
  info: {
    displayName: 'personalInfo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profesional: Schema.Attribute.String & Schema.Attribute.Required;
    progress: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MainAppointment extends Struct.ComponentSchema {
  collectionName: 'components_main_appointments';
  info: {
    displayName: 'appointment';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    slider: Schema.Attribute.Component<'molecules.slider', false> & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'atoms.heading', false> & Schema.Attribute.Required;
  };
}

export interface MainBagFeatures extends Struct.ComponentSchema {
  collectionName: 'components_main_bag_features';
  info: {
    displayName: 'bagFeatures';
  };
  attributes: {
    features: Schema.Attribute.Component<'molecules.box-feature', true>;
    image: Schema.Attribute.Component<'atoms.image', false> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    title: Schema.Attribute.Component<'atoms.heading', false> & Schema.Attribute.Required;
  };
}

export interface MainBeautyManage extends Struct.ComponentSchema {
  collectionName: 'components_main_beauty_manages';
  info: {
    displayName: 'beautyManage';
  };
  attributes: {
    button: Schema.Attribute.Component<'atoms.button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'molecules.tab', true> & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'atoms.heading', false> & Schema.Attribute.Required;
  };
}

export interface MainFeatures extends Struct.ComponentSchema {
  collectionName: 'components_main_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    featuresCards: Schema.Attribute.Component<'molecules.card', true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.Component<'atoms.heading', false> & Schema.Attribute.Required;
  };
}

export interface MainIntro extends Struct.ComponentSchema {
  collectionName: 'components_main_intros';
  info: {
    displayName: 'intro';
  };
  attributes: {
    description: Schema.Attribute.Component<'molecules.description', false>;
    label: Schema.Attribute.String;
  };
}

export interface MoleculesAutoSlider extends Struct.ComponentSchema {
  collectionName: 'components_molecules_auto_sliders';
  info: {
    displayName: 'autoSlider';
  };
  attributes: {
    items: Schema.Attribute.Component<'atoms.image', true> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface MoleculesBoxFeature extends Struct.ComponentSchema {
  collectionName: 'components_molecules_box_features';
  info: {
    displayName: 'boxFeature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    position: Schema.Attribute.Component<'atoms.feature-position', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MoleculesCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    className: Schema.Attribute.String;
    decorativeNumber: Schema.Attribute.String & Schema.Attribute.Required;
    decoratorsImage: Schema.Attribute.Component<'atoms.image', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'atoms.image', false> & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'atoms.heading', false> & Schema.Attribute.Required;
    translate: Schema.Attribute.Enumeration<['top', 'middle', 'none']>;
  };
}

export interface MoleculesCardBeauty extends Struct.ComponentSchema {
  collectionName: 'components_molecules_card_beauties';
  info: {
    displayName: 'cardBeauty';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'atoms.image', false>;
    personalInfo: Schema.Attribute.Component<'atoms.personal-info', false>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['beauty-professional', 'beauty-manage', 'beauty-benefits']> &
      Schema.Attribute.Required;
  };
}

export interface MoleculesDescription extends Struct.ComponentSchema {
  collectionName: 'components_molecules_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    boldText: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'atoms.button', false> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isAnimated: Schema.Attribute.Boolean;
    title: Schema.Attribute.Component<'atoms.heading', false>;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']> & Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface MoleculesSlider extends Struct.ComponentSchema {
  collectionName: 'components_molecules_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    className: Schema.Attribute.String;
    items: Schema.Attribute.Component<'molecules.card-beauty', true> & Schema.Attribute.Required;
  };
}

export interface MoleculesTab extends Struct.ComponentSchema {
  collectionName: 'components_molecules_tabs';
  info: {
    displayName: 'tab';
  };
  attributes: {
    content: Schema.Attribute.Component<'atoms.image', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface StructureLeft extends Struct.ComponentSchema {
  collectionName: 'components_structure_lefts';
  info: {
    displayName: 'left';
  };
  attributes: {
    desktop: Schema.Attribute.String & Schema.Attribute.Required;
    mobile: Schema.Attribute.String & Schema.Attribute.Required;
    tablet: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StructureTop extends Struct.ComponentSchema {
  collectionName: 'components_structure_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    desktop: Schema.Attribute.String & Schema.Attribute.Required;
    mobile: Schema.Attribute.String & Schema.Attribute.Required;
    tablet: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.anagraph': AtomsAnagraph;
      'atoms.button': AtomsButton;
      'atoms.feature-position': AtomsFeaturePosition;
      'atoms.heading': AtomsHeading;
      'atoms.image': AtomsImage;
      'atoms.link': AtomsLink;
      'atoms.personal-info': AtomsPersonalInfo;
      'main.appointment': MainAppointment;
      'main.bag-features': MainBagFeatures;
      'main.beauty-manage': MainBeautyManage;
      'main.features': MainFeatures;
      'main.intro': MainIntro;
      'molecules.auto-slider': MoleculesAutoSlider;
      'molecules.box-feature': MoleculesBoxFeature;
      'molecules.card': MoleculesCard;
      'molecules.card-beauty': MoleculesCardBeauty;
      'molecules.description': MoleculesDescription;
      'molecules.slider': MoleculesSlider;
      'molecules.tab': MoleculesTab;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'structure.left': StructureLeft;
      'structure.top': StructureTop;
    }
  }
}
