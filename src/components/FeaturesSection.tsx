import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Palette,
  Download,
  Shield,
  Infinity,
  Brush,
  Image,
  Settings,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate high-quality images in seconds, not minutes. Our optimized AI models deliver results at unprecedented speed.",
    badge: "Speed",
    color: "yellow",
  },
  {
    icon: Palette,
    title: "Multiple Art Styles",
    description:
      "From photorealistic to anime, abstract to vintage - choose from a wide variety of artistic styles.",
    badge: "Variety",
    color: "purple",
  },
  {
    icon: Settings,
    title: "Advanced Controls",
    description:
      "Fine-tune your creations with aspect ratio, quality settings, and style parameters for perfect results.",
    badge: "Control",
    color: "blue",
  },
  {
    icon: Download,
    title: "High Resolution",
    description:
      "Download your images in high resolution suitable for print, web, or professional use.",
    badge: "Quality",
    color: "green",
  },
  {
    icon: Shield,
    title: "Commercial License",
    description:
      "Use your generated images for commercial purposes with our flexible licensing options.",
    badge: "Legal",
    color: "red",
  },
  {
    icon: Infinity,
    title: "Unlimited Creativity",
    description:
      "No limits on your imagination. Generate as many variations as you need to perfect your vision.",
    badge: "Freedom",
    color: "indigo",
  },
];

const additionalFeatures = [
  {
    icon: Image,
    title: "Gallery Management",
    description:
      "Organize and manage your creations with our built-in gallery system.",
  },
  {
    icon: Globe,
    title: "Cloud Storage",
    description: "Access your images from anywhere with secure cloud storage.",
  },
  {
    icon: Brush,
    title: "Style Transfer",
    description:
      "Apply artistic styles to existing images for unique transformations.",
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.purple;
};

export const FeaturesSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Create
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional-grade AI image generation with powerful features
            designed for creators, designers, and businesses.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-violet-600" />
                    </div>
                    <Badge className={getColorClasses(feature.color)}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Plus Many More Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
