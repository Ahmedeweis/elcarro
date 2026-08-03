import { socialConfig } from './socialConfig';

export function useSocialLink() {
  const openSocialLink = (platform) => {
    const config = socialConfig[platform];
    if (!config) return;

    const now = Date.now();
    
    // Try deep link first (app)
    if (config.deepLink) {
      window.location.href = config.deepLink;
    }

    // Fallback to web URL after 1 second if app isn't installed
    setTimeout(() => {
      if (Date.now() - now < 1500) {
        window.open(config.webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 1000);
  };

  return { openSocialLink };
}
