import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, Heart, Share2, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
  liked: boolean;
}

export const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [settings, setSettings] = useState({
    style: "realistic",
    aspectRatio: "square",
    quality: [80],
  });

  // Simulate image generation
  const generateImage = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Generate a placeholder image with a unique color/pattern
    const newImage: GeneratedImage = {
      id: Date.now().toString(),
      url: `https://picsum.photos/512/512?random=${Date.now()}`,
      prompt: prompt,
      timestamp: new Date(),
      liked: false,
    };

    setGeneratedImages((prev) => [newImage, ...prev]);
    setIsGenerating(false);
    setPrompt("");
  };

  const toggleLike = (id: string) => {
    setGeneratedImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, liked: !img.liked } : img)),
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      generateImage();
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Main Generation Card */}
      <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Wand2 className="h-6 w-6 text-violet-600" />
            Create Your Vision
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt" className="text-base font-medium">
              Describe what you want to create
            </Label>
            <Textarea
              id="prompt"
              placeholder="A serene landscape with mountains and a lake at sunset, digital art style..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
              className="min-h-[120px] text-base resize-none focus:ring-violet-500 focus:border-violet-500"
            />
            <p className="text-sm text-muted-foreground">
              Press Ctrl+Enter to generate, or click the button below
            </p>
          </div>

          {/* Settings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Style</Label>
              <Select
                value={settings.style}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, style: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realistic">Realistic</SelectItem>
                  <SelectItem value="artistic">Artistic</SelectItem>
                  <SelectItem value="anime">Anime</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="vintage">Vintage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Aspect Ratio</Label>
              <Select
                value={settings.aspectRatio}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, aspectRatio: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square (1:1)</SelectItem>
                  <SelectItem value="landscape">Landscape (16:9)</SelectItem>
                  <SelectItem value="portrait">Portrait (9:16)</SelectItem>
                  <SelectItem value="wide">Wide (21:9)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Quality: {settings.quality[0]}%</Label>
              <Slider
                value={settings.quality}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, quality: value }))
                }
                max={100}
                min={20}
                step={10}
                className="w-full"
              />
            </div>
          </div>

          <Button
            onClick={generateImage}
            disabled={!prompt.trim() || isGenerating}
            className="w-full h-12 text-base bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Generating your image...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5 mr-2" />
                Generate Image
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Images Gallery */}
      {generatedImages.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden">
                <div className="relative aspect-square">
                  <img
                    src={image.url}
                    alt={image.prompt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors">
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/90 hover:bg-white"
                        onClick={() => toggleLike(image.id)}
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4",
                            image.liked && "fill-red-500 text-red-500",
                          )}
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/90 hover:bg-white"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/90 hover:bg-white"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {image.prompt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {settings.style}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {image.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
