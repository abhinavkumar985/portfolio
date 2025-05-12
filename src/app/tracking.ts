
/**
 * Track link click
 * @param link 
 */

export const trackLink = (link: HTMLAnchorElement) => {
    if (!window.gtag) return;
    gtag('event', 'click', {
        event_category: 'outbound',
        event_label: link.href,
        event_value: link.text || link.getAttribute('aria-label') || link.getAttribute('title'), // Add link text as event_value
        transport_type: 'beacon',
    });
}

export const trackContentView = (content: string) => {
    if (!window.gtag) return;
    gtag('event', 'view_content', {
        item_name: content.split(" ").join("_"), // Name of the important information
    });
}