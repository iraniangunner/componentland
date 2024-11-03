"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Search,
  X,
  ChevronRight,
  Box,
  Link2,
  BarChart3,
  ShoppingCart,
  MessageSquare,
  Cookie,
  Divide,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Category {
  name: string;
  icon: React.ElementType;
  subcategories: Subcategory[];
}

interface Subcategory {
  title: string;
  components: Component[];
}

interface Component {
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  isNew?: boolean;
  image?: string;
}

export function SearchElements() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("Application");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  const categories: Category[] = [
    {
      name: "Application",
      icon: Box,
      subcategories: [
        {
          title: "Command Menu",
          components: [
            {
              title: "Command Menu With Categories",
              description: "Advanced command menu with category filtering",
              path: "/components/command-menu",
              icon: Box,
              isNew: true,
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Data Table",
              description: "Interactive data table with sorting and filtering",
              path: "/components/data-table",
              icon: Box,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
        {
          title: "Cards",
          components: [
            {
              title: "Basic Card",
              description: "Reusable basic card component",
              path: "/components/basic-card",
              icon: Box,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
      ],
    },
    {
      name: "AI",
      icon: Link2,
      subcategories: [
        {
          title: "Playground",
          components: [
            {
              title: "Interactive Playground",
              description: "Interactive playground for testing AI models",
              path: "/components/playground",
              icon: MessageSquare,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
        {
          title: "Prompt Inputs",
          components: [
            {
              title: "Basic Prompt Input",
              description: "Input component for AI prompts",
              path: "/components/prompt-input",
              icon: MessageSquare,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
      ],
    },
    {
      name: "Marketing",
      icon: BarChart3,
      subcategories: [
        {
          title: "Hero Sections",
          components: [
            {
              title: "Marketing Hero Section",
              description: "Hero section for landing pages",
              path: "/components/hero-section",
              icon: Cookie,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
        {
          title: "FAQs",
          components: [
            {
              title: "FAQ Component",
              description: "Frequently asked questions component",
              path: "/components/faq-section",
              icon: Cookie,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
      ],
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      subcategories: [
        {
          title: "Product List",
          components: [
            {
              title: "Product List Component",
              description: "List of products with details",
              path: "/components/product-list",
              icon: ShoppingCart,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
        {
          title: "Checkout",
          components: [
            {
              title: "Checkout Process",
              description: "E-commerce checkout component",
              path: "/components/checkout",
              icon: ShoppingCart,
              image: "/placeholder.svg?height=200&width=300",
            },
          ],
        },
      ],
    },
  ];

  const componentsArray: Component[] = categories.reduce((acc, category) => {
    category.subcategories.forEach((subcategory) => {
      acc.push(...subcategory.components);
    });
    return acc;
  }, [] as Component[]);
  const filteredComponents = search
    ? componentsArray.filter(
        (component) =>
          component.title.toLowerCase().includes(search.toLowerCase()) ||
          component.path.toLowerCase().includes(search.toLowerCase()) ||
          component.description.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <Button
        variant="outline"
        className="w-9 p-0 dark:bg-accent dark:hover:bg-background"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search components</span>
      </Button>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            setSearch("");
            setSelectedTab("Application");
          } // Clear search when closing the modal
        }}
      >
        <DialogContent
          className={cn(
            "max-w-3xl p-0 gap-0"
            // search ? "max-h-[400px]" : "max-h-[80vh]"
          )}
        >
          <div className="flex items-center border-b px-4 py-2">
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی کامپوننت ..."
              className="flex h-11 w-full rounded-md bg-transparent shadow-none py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0"
            />
            {search && (
              <Button
                variant="ghost"
                onClick={() => {
                  //   setSelectedTab("Application");
                  setSearch("");
                }}
                className="h-6 w-6 px-0 ml-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
            <div className="mr-2 bg-muted text-muted-foreground text-xs px-1.5 py-0.5 rounded">
              ESC
            </div>
          </div>

          {search ? (
            <ScrollArea className="h-[150px] md:h-[350px]">
              {filteredComponents.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  No components found.
                </div>
              ) : (
                <div className="p-2">
                  {filteredComponents.map((component) => (
                    <button
                      key={component.path}
                      className="w-full text-left px-2 py-2 hover:bg-accent rounded-lg group"
                      onClick={() => {
                        // Add navigation logic here
                        setOpen(false);
                      }}
                    >
                      <div className="flex items-center text-xs text-muted-foreground mb-0.5">
                        <component.icon className="h-3 w-3 mr-1.5" />
                        {component.path}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {component.title}
                        </span>
                        <div className="flex items-center gap-2">
                          {component.isNew && (
                            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                              New
                            </span>
                          )}
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </ScrollArea>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr]">
              <div className="border-l p-4">
                <h2 className="mb-4 text-sm text-muted-foreground font-medium">
                  دسته بندی ها
                </h2>
                <div className="space-y-2 flex items-center overflow-auto md:block">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      onClick={() => setSelectedTab(category.name)}
                      variant="ghost"
                      className={`w-full justify-start gap-2  ${
                        selectedTab === category.name ? "bg-accent" : ""
                      } hover:text-foreground text-muted-foreground`}
                    >
                      <category.icon className="h-4 w-4" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <ScrollArea className="h-[150px] md:h-[350px]" dir="rtl">
                <div className="p-4 grid gap-8">
                  {categories
                    .find((category) => category.name === selectedTab)
                    ?.subcategories.map((item) => (
                      <div key={item.title}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground font-regular"
                          >
                            مشاهده همه
                          </Button>
                        </div>
                        <div
                          className="grid grid-cols-2 lg:grid-cols-3 gap-4"
                          dir="rtl"
                        >
                          {item.components.map((item) => (
                            <div
                              key={item.title}
                              className="group rounded-lg border bg-card hover:bg-accent transition-colors"
                            >
                              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  {/* <h4 className="font-medium">{item.title}</h4> */}
                                  {item.isNew && (
                                    <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                                      New
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {/* {item.description} */}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
