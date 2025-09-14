export interface JobApply {
  left: {
    title: string;
    description: string;
    perks: string[];
  };
  right: {
    title: string;
    description: string;
    email: string;
    buttonText: string;
  };
}
