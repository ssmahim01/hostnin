export interface Highlight {
  title: string;
  description: string;
  icon: string;
  sideIcon: string;
  iconAlt: string;
}

export interface ManagedTurboHighlightsProps {
  heading: string;
  subheading: string;
  highlights: Highlight[];
}
