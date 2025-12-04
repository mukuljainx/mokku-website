import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Where is my data?",
        answer: "Your data remains local in Chrome only. We store data in Chrome's IndexedDB. Earlier, we were using Chrome storage, which is an object storage and not as efficient.",
    },
    {
        question: "But I am seeing a website (mokku.app)?",
        answer: "It's just a UI that talks to the extension and exchanges data. There is no server. You can check the network logs.",
    },
    {
        question: "Will there be a cloud version?",
        answer: "Yes, but you will choose what you want to use.",
    },
    {
        question: "Why a website?",
        answer: "A web app makes a lot of things easier to develop. Also, there is no review process, so faster updates.",
    },
];

const Faq = () => {
    return (
        <div className="container mx-auto max-w-4xl py-12">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Frequently Asked Questions
            </h1>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Faq;
