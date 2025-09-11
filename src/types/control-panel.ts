export interface ControlPanel {
  name: string;
  title: string;
  features: Feature[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Feature {
  title: string;
  description: string;
}
