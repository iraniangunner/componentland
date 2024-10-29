"use client";
import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const frameworks = ["React", "Next.js", "Vue", "Angular"];
const uiFrameworks = ["Material UI", "Tailwind CSS", "Bootstrap", "Chakra UI"];
const categories = ["Admin & Dashboard", "Landing & Corporate", "E-commerce"];

// Mock data for templates
const mockTemplates = [
  {
    id: 1,
    name: "Admin Dashboard",
    category: "Admin & Dashboard",
    price: 69,
    framework: "React",
    uiFramework: "Material UI",
  },
  {
    id: 2,
    name: "E-commerce Platform",
    category: "E-commerce",
    price: 89,
    framework: "Next.js",
    uiFramework: "Tailwind CSS",
  },
  {
    id: 3,
    name: "Corporate Landing",
    category: "Landing & Corporate",
    price: 59,
    framework: "Vue",
    uiFramework: "Bootstrap",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    category: "Admin & Dashboard",
    price: 79,
    framework: "Angular",
    uiFramework: "Chakra UI",
  },
  {
    id: 5,
    name: "Product Showcase",
    category: "E-commerce",
    price: 49,
    framework: "React",
    uiFramework: "Tailwind CSS",
  },
  {
    id: 6,
    name: "Company Portfolio",
    category: "Landing & Corporate",
    price: 69,
    framework: "Next.js",
    uiFramework: "Material UI",
  },
  // Add more mock templates to test infinite scroll
  ...Array.from({ length: 50 }, (_, i) => ({
    id: i + 7,
    name: `Template ${i + 7}`,
    category: categories[i % categories.length],
    price: 50 + i,
    framework: frameworks[i % frameworks.length],
    uiFramework: uiFrameworks[i % uiFrameworks.length],
  })),
];

const ITEMS_PER_LOAD = 6;

export default function TemplateStore() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>(
    []
  );
  const [selectedUIFrameworks, setSelectedUIFrameworks] = React.useState<
    string[]
  >([]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const [filteredTemplates, setFilteredTemplates] =
    React.useState(mockTemplates);
  const [displayedTemplates, setDisplayedTemplates] = React.useState<
    typeof mockTemplates
  >([]);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const observerTarget = React.useRef(null);

  const handleFrameworkChange = (framework: string) => {
    setSelectedFrameworks((prev) =>
      prev.includes(framework)
        ? prev.filter((f) => f !== framework)
        : [...prev, framework]
    );
  };

  const handleUIFrameworkChange = (uiFramework: string) => {
    setSelectedUIFrameworks((prev) =>
      prev.includes(uiFramework)
        ? prev.filter((f) => f !== uiFramework)
        : [...prev, uiFramework]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case "framework":
        setSelectedFrameworks((prev) => prev.filter((f) => f !== value));
        break;
      case "uiFramework":
        setSelectedUIFrameworks((prev) => prev.filter((f) => f !== value));
        break;
      case "category":
        setSelectedCategories((prev) => prev.filter((c) => c !== value));
        break;
    }
  };

  const applyFilters = React.useCallback(() => {
    const filtered = mockTemplates.filter(
      (template) =>
        (selectedFrameworks.length === 0 ||
          selectedFrameworks.includes(template.framework)) &&
        (selectedUIFrameworks.length === 0 ||
          selectedUIFrameworks.includes(template.uiFramework)) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(template.category)) &&
        (searchQuery === "" ||
          template.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredTemplates(filtered);
    setDisplayedTemplates(filtered.slice(0, ITEMS_PER_LOAD));
    setHasMore(filtered.length > ITEMS_PER_LOAD);
  }, [
    selectedFrameworks,
    selectedUIFrameworks,
    selectedCategories,
    searchQuery,
  ]);

  React.useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const loadMoreTemplates = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const nextTemplates = filteredTemplates.slice(
        displayedTemplates.length,
        displayedTemplates.length + ITEMS_PER_LOAD
      );
      setDisplayedTemplates((prev) => [...prev, ...nextTemplates]);
      setHasMore(
        displayedTemplates.length + nextTemplates.length <
          filteredTemplates.length
      );
      setLoading(false);
    }, 500); // Simulate network delay
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreTemplates();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [displayedTemplates, filteredTemplates]);

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Templates</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {selectedFrameworks.map((framework) => (
                <Badge
                  key={framework}
                  variant="secondary"
                  className="px-2 py-1"
                >
                  {framework}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-auto p-0"
                    onClick={() => removeFilter("framework", framework)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              {selectedUIFrameworks.map((uiFramework) => (
                <Badge
                  key={uiFramework}
                  variant="secondary"
                  className="px-2 py-1"
                >
                  {uiFramework}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-auto p-0"
                    onClick={() => removeFilter("uiFramework", uiFramework)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="px-2 py-1">
                  {category}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 h-auto p-0"
                    onClick={() => removeFilter("category", category)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="frameworks">
                <AccordionTrigger>Frameworks</AccordionTrigger>
                <AccordionContent>
                  {frameworks.map((framework) => (
                    <div
                      key={framework}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <Checkbox
                        id={framework}
                        checked={selectedFrameworks.includes(framework)}
                        onCheckedChange={() => handleFrameworkChange(framework)}
                      />
                      <label htmlFor={framework}>{framework}</label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ui-frameworks">
                <AccordionTrigger>UI Frameworks</AccordionTrigger>
                <AccordionContent>
                  {uiFrameworks.map((uiFramework) => (
                    <div
                      key={uiFramework}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <Checkbox
                        id={uiFramework}
                        checked={selectedUIFrameworks.includes(uiFramework)}
                        onCheckedChange={() =>
                          handleUIFrameworkChange(uiFramework)
                        }
                      />
                      <label htmlFor={uiFramework}>{uiFramework}</label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {displayedTemplates.length} of{" "}
                {filteredTemplates.length} templates
              </p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="transition-all duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-800"
                >
                  <CardHeader>
                    <CardTitle>{template.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {template.category}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {template.framework} | {template.uiFramework}
                    </p>
                    <p className="font-bold mt-2">${template.price}</p>
                  </CardContent>
                 
                  <CardFooter className="flex justify-between">
                   
                    <Button variant="outline">Live Preview</Button>
                    <Button variant="outline">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {hasMore && (
              <div
                ref={observerTarget}
                className="flex justify-center items-center p-4"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
