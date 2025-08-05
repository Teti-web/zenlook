export type BoxFeaturePosition = {
  top: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  left: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export type BoxFeatureProps = {
  title: string;
  description: string;
  position: BoxFeaturePosition;
  index?: number;
  allItems?: number;
};
