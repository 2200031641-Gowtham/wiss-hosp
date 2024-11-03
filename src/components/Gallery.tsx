"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function GallerySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  const images = [
    "/i1.jpg",
    "/i2.jpg",
    "/i3.jpg",
    "/i4.jpg",
    "/i5.jpg",
    "/i6.jpg",
    "/i7.jpg",
    "/i8.jpg",
    "/i9.jpg",
  ];

  const videos = [
    "/interior-video.mp4",
    "/interior-video2.mp4",
    "/interior-video3.mp4",
    "/interior-video4.mp4",
  ];

  return (
    <div className="container h-screen mx-auto p-6 bg-white">
      <Tabs
        defaultValue="images"
        className="w-full"
        onValueChange={(value) => setActiveTab(value as "images" | "videos")}
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger
            value="images"
            className={`transition-colors ${
              activeTab === "images"
                ? "text-[#E84B1C] font-bold"
                : "text-gray-600 hover:text-[#E84B1C]"
            }`}
          >
            Images ({images.length})
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className={`transition-colors ${
              activeTab === "videos"
                ? "text-[#E84B1C] font-bold"
                : "text-gray-600 hover:text-[#E84B1C]"
            }`}
          >
            Videos ({videos.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images">
          <ScrollArea className="h-screen w-full rounded-md border border-gray-300 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <Card
                  key={image}
                  className="overflow-hidden border border-gray-300"
                >
                  <CardContent className="p-2">
                    <div className="relative aspect-video">
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="videos">
          <ScrollArea className="h-screen w-full rounded-md border border-gray-300 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video) => (
                <Card
                  key={video}
                  className="overflow-hidden border border-gray-300"
                >
                  <CardContent className="p-2">
                    <video
                      className="w-full rounded-md"
                      controls
                      onPlay={() => setActiveVideo(video)}
                      onPause={() => setActiveVideo(null)}
                      preload="metadata"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {activeVideo === video && ( // Display video title when active
                      <p className="mt-2 text-sm text-gray-600">
                        Now Playing: {video}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
