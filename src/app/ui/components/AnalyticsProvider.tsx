// providers/AnalyticsProvider.tsx
'use client'; // This is a client component

import React, { useEffect } from 'react';
import Script from 'next/script';
import { trackLink } from '@/app/tracking';

interface AnalyticsProviderProps {
    gtagId: string;
    children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ gtagId, children }) => {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        // @ts-expect-error
        gtag('js', new Date());
        // @ts-expect-error
        gtag('config', gtagId);



        // @ts-expect-error type error type error
        const handleOutboundLinkClick = (event) => {
            const link = event.target.closest('a');
            if (link && link.href && !link.href.includes(window.location.hostname)) {
                trackLink(link);
            }
        };

        document.addEventListener('click', handleOutboundLinkClick);
        return () => {
            document.removeEventListener('click', handleOutboundLinkClick);
        };
    }, [gtagId]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            />
            {children}
        </>
    );
};

export default AnalyticsProvider;