import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureTabsProps {
  badge?: string;
  heading: string;
  description: string;
  tabs: Tab[];
}

const FeatureTabs = ({ badge, heading, description, tabs }: FeatureTabsProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {badge && (
            <Badge variant="outline" className="mb-4">
              {badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
        </div>

        <TabsPrimitive.Root defaultValue={tabs[0]?.value}>
          <TabsPrimitive.List className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <TabsPrimitive.Trigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  "data-[state=active]:gradient-cta data-[state=active]:text-primary-foreground data-[state=active]:shadow-md",
                  "data-[state=inactive]:bg-secondary data-[state=inactive]:text-foreground data-[state=inactive]:hover:bg-muted"
                )}
              >
                {tab.icon} {tab.label}
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          <div className="mt-4">
            {tabs.map((tab) => (
              <TabsPrimitive.Content
                key={tab.value}
                value={tab.value}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-card"
              >
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <Badge variant="outline" className="mb-4 w-fit">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {tab.content.description}
                    </p>
                    <Button asChild className="w-fit gradient-cta border-0 text-primary-foreground hover:opacity-90">
                      <a href={tab.content.buttonHref || "/booking"}>
                        {tab.content.buttonText}
                      </a>
                    </Button>
                  </div>
                  <div className="relative min-h-[280px] md:min-h-[360px]">
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </TabsPrimitive.Content>
            ))}
          </div>
        </TabsPrimitive.Root>
      </div>
    </section>
  );
};

export { FeatureTabs };
export type { Tab, FeatureTabsProps };
