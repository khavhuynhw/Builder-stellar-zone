import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Palette, Users } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-violet-100 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-200 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Advanced AI
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Transform Words
              </span>
              <br />
              <span className="text-slate-900">into Stunning Art</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Create breathtaking images from simple text descriptions. Our
              AI-powered platform brings your imagination to life with
              professional-quality results in seconds.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="h-14 px-8 text-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
            >
              <Palette className="h-5 w-5 mr-2" />
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-100 mx-auto mb-3">
                <Zap className="h-6 w-6 text-violet-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">2.3M+</div>
              <div className="text-sm text-slate-600">Images Generated</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">150K+</div>
              <div className="text-sm text-slate-600">Happy Creators</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mx-auto mb-3">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
