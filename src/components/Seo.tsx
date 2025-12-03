import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Mokku: Mock API Calls Seamlessly</title>
                <meta
                    name="description"
                    content="Mokku helps you by mocking API calls and changing their response, response time, and status. Easily test all your use cases like long loading times, error states, or missing/incorrect data."
                />
                <meta
                    name="keywords"
                    content="mokku, mock, api, chrome extension, testing, development, mock apis, chrome, extension"
                />
                <meta
                    property="og:title"
                    content="Mokku: Mock API Calls Seamlessly"
                />
                <meta
                    property="og:description"
                    content="Mokku helps you by mocking API calls and changing their response, response time, and status."
                />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/mukuljainx/mokku/master/docs/store/small-promo.png"
                />
                <meta
                    property="og:url"
                    content="https://chrome.google.com/webstore/detail/mokku-mock-api-calls-seam/llflfcikklhgamfmnjkgpdadpmdplmji"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Mokku: Mock API Calls Seamlessly"
                />
                <meta
                    name="twitter:description"
                    content="Mokku helps you by mocking API calls and changing their response, response time, and status."
                />
                <meta
                    name="twitter:image"
                    content="https://raw.githubusercontent.com/mukuljainx/mokku/master/docs/store/small-promo.png"
                />
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
