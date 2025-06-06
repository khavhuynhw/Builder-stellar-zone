import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImageGenerator } from "@/components/ImageGenerator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Twitter,
  Mail,
  Star,
  Quote,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    content:
      "This AI tool has revolutionized my creative process. I can now explore ideas faster than ever before.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    content:
      "Perfect for creating unique visuals for our campaigns. The quality is consistently impressive.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Content Creator",
    content:
      "Easy to use, fast results, and endless possibilities. It's become an essential part of my toolkit.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    rating: 5,
  },
];

const samplePrompts = [
  "A majestic dragon soaring through a starlit sky, digital fantasy art",
  "Minimalist modern kitchen with natural light, architectural photography",
  "Vibrant street art mural on a brick wall, urban photography",
  "Serene Japanese garden in autumn, traditional watercolor style",
  "Futuristic cityscape at sunset, cyberpunk aesthetic",
  "Cozy coffee shop interior with vintage decor, warm lighting",
];

const Index = () => {
  const generatorRef = useRef<HTMLDivElement>(null);

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">ImageAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#generator"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Generator
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" onClick={scrollToGenerator}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onGetStarted={scrollToGenerator} />

      {/* Sample Prompts */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get Inspired by These Prompts
            </h2>
            <p className="text-lg text-slate-600">
              Try these popular prompts or create your own unique descriptions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {samplePrompts.map((prompt, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <p className="text-sm text-slate-700 leading-relaxed group-hover:text-violet-700 transition-colors">
                      "{prompt}"
                    </p>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-violet-500 transition-colors flex-shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* Image Generator */}
      <div id="generator" ref={generatorRef} className="py-20 bg-slate-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Start Creating Now
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform your ideas into stunning visuals with our powerful AI
              image generator
            </p>
          </div>
          <ImageGenerator />
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-slate-600">
              See what our community has to say about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-violet-200 mb-4" />
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Choose the plan that fits your creative needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-slate-900 mb-6">
                  $0
                  <span className="text-lg font-normal text-slate-600">
                    /month
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    10 images per month
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    Basic styles
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    Standard resolution
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-violet-200 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-violet-600 text-white">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-slate-900 mb-6">
                  $19
                  <span className="text-lg font-normal text-slate-600">
                    /month
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    500 images per month
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    All styles & features
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    High resolution
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    Commercial license
                  </li>
                </ul>
                <Button className="w-full bg-violet-600 hover:bg-violet-700">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-slate-900 mb-6">
                  Custom
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    Unlimited images
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    Priority support
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-3"></span>
                    SLA guarantee
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">ImageAI</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transform your imagination into stunning visuals with the power
                of AI.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ImageAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
