"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Lock,
  MessageSquare,
  Box,
  Link2,
  BarChart3,
  ShoppingCart,
  Cookie,
} from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

const tabSections = ["Application", "AI", "Marketing", "E-commerce"];

interface Category {
  name: string;
  icon: React.ElementType;
  description: string;
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

export default function Elements() {
  const [activeTab, setActiveTab] = useState("Application");
  const [tabIsClicked, setTabIsClicked] = useState(false);
  const categories: Category[] = [
    {
      name: "Application",
      icon: Box,
      description: "Advanced command menu with category filtering",
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
              image: "../app/images/card.webp",
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
        {
          title: "Cards new",
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
        {
          title: "Cards new1",
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
        {
          title: "Cards new2",
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
        {
          title: "Cards new3",
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
        {
          title: "Cards new4",
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
        {
          title: "Cards new5",
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
        {
          title: "Cards new6",
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
      description: "Advanced command menu with category filtering",
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
        {
          title: "Prompt Inputs new",
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
        {
          title: "Prompt Inputs new 1",
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
        {
          title: "Prompt Inputs new2",
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
        {
          title: "Prompt Inputs new3",
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
        {
          title: "Prompt Inputs new4",
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
        {
          title: "Prompt Inputs new5",
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
        {
          title: "Prompt Inputs new6",
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
      description: "Advanced command menu with category filtering",
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
        {
          title: "FAQs new",
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
        {
          title: "FAQs new1",
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
        {
          title: "FAQs new2",
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
      description: "Advanced command menu with category filtering",
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
        {
          title: "Checkout new",
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
        {
          title: "Checkout new1",
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
        {
          title: "Checkout new2",
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

  return (
    <div className="flex justify-center">
      <main className="py-12 md:pt-[5.75rem] md:max-w-[1500px]">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold sm:text-5xl">کامپوننت ها</h1>
          <p className="mt-8 mx-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="sticky flex justify-center top-14 z-40 py-4 dark:bg-[#030711]/80 backdrop-blur-sm">
          <Tabs value={activeTab}>
            <TabsList className="dark:bg-gray-800/50 px-1 lg:px-2 py-6 rounded-full">
              {tabSections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-140}
                  // onSetActive={() => setActiveTab(section)}
                  onSetActive={() => {
                    if (tabIsClicked) {
                      setActiveTab(section);
                    }
                  }}
                >
                  <TabsTrigger
                    value={section}
                    className="test-sm lg:text-lg rounded-full"
                    onClick={() => setTabIsClicked(true)}
                  >
                    {section}
                  </TabsTrigger>
                </ScrollLink>
              ))}
            </TabsList>
          </Tabs>
        </div>
        {categories.map((item, index) => (
          <Element name={item.name} key={index}>
            <div className="mt-12 px-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="flex items-center text-xl font-semibold capitalize">
                    {item.name}
                    <Lock className="mr-2 h-4 w-4 text-gray-400" />
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Beautifully crafted {item.name} components, including
                    various UI elements and functionalities.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {item.subcategories.map((item, index) => (
                  <Link key={index} href="#" className="group">
                    <Card className="transition-colors relative h-[200px] border-slate-600 dark:border-slate-400">
                      <CardContent className="p-6 ">
                        <div className="flex flex-col justify-between absolute right-[10px] bottom-[10px]">
                          <div className="flex items-center space-x-2">
                            {/* <item.icon className="h-5 w-5 text-gray-400" /> */}
                            <span className="font-medium">{item.title}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-400">
                            {item.components.length} کامپوننت
                          </p>
                          {/* {item.isNew && (
                            <Badge
                              variant="secondary"
                              className="bg-blue-600 text-white"
                            >
                              جدید
                            </Badge>
                          )} */}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Element>
        ))}
      </main>
    </div>
  );
}
