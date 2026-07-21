type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

// Ensure dataLayer exists
window.dataLayer = window.dataLayer || [];

let timeoutId: ReturnType<typeof setTimeout> | null = null;
const DEBOUNCE_TIME = 300; // ms

// Implementação de Data Layer com Deduplicação (Debounce)
export const trackEvent = (eventData: DataLayerEvent) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    window.dataLayer.push(eventData);
    console.log('DataLayer Event Logged:', eventData);
  }, DEBOUNCE_TIME);
};
