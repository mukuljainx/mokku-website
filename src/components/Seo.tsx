import { Helmet, HelmetProvider } from "react-helmet-async";

type SEOProps = {
    title?: string;
    description?: string;
    keywords?: string;
};

const SEO = ({
    title = "Mokku: Mock API Calls Seamlessly",
    description = "Mokku helps you by mocking API calls and changing their response, response time, and status. Easily test all your use cases like long loading times, error states, or missing/incorrect data.",
    keywords = "mokku, mock, api, chrome extension, testing, development, mock apis, chrome, extension",
}: SEOProps) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/mukuljainx/mokku/master/docs/store/small-promo.png"
                />
                <meta
                    property="og:url"
                    content="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta
                    name="twitter:image"
                    content="https://raw.githubusercontent.com/mukuljainx/mokku/master/docs/store/small-promo.png"
                />
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
