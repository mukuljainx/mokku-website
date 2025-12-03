import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Mock API Calls",
    description:
      "Specify JSON body, HTTP status, time delay, and headers. Supports GraphQL and dynamic responses.",
  },
  {
    title: "Modify Headers",
    description:
      "Easily modify request headers—globally for all requests or specifically for individual URLs.",
  },
  {
    title: "Projects",
    description:
      "Group and organize your mocks and headers by Project for simplified management.",
  },
  {
    title: "Import / Export",
    description:
      "Keep your mocks & headers by exporting by project basis and import them back as well.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Features
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
