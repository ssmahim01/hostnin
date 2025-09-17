export const TurboCreateFeatures = (
  storage: string,
  websites: string,
  cpu: string,
  ram: string,
  ioSpeed: string,
  processes: string
) => [
  {
    text: `${storage} NVMe Storage`,
    tooltip:
      "Supercharge your website with NVMe storage, delivering ultra-fast data access and superior performance. Ideal for high-traffic sites, NVMe ensures swift load times and enhances user experience with its cutting-edge technology.",
  },
  {
    text: `${websites} Websites`,
    tooltip:
      "Host multiple websites on a single hosting account. Each website can have its own domain and content.",
  },
  {
    text: `${cpu} Core CPU`,
    tooltip:
      "Dedicated CPU cores for your hosting account, providing the processing power needed for your applications.",
  },
  {
    text: `${ram} GB RAM`,
    tooltip:
      "Allocated RAM for your hosting environment, ensuring smooth performance for your websites and applications.",
  },
  {
    text: `${ioSpeed} MB I/O Speed`,
    tooltip:
      "Input/Output speed for data transfer, affecting how quickly your website can serve content to visitors.",
  },
  {
    text: `${processes} Number of Process`,
    tooltip:
      "Entry processes for handling concurrent requests, determining how many simultaneous visitors your site can handle.",
  },
];