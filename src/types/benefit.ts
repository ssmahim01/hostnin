export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export interface BenefitsSectionProps {
  mainTitle: string;
  mainDescription: string;
  mainCard: BenefitCard;
  sideCards: BenefitCard[];
}
