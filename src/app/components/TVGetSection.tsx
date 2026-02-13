"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import type { Video } from "@/app/types/video";

type TVGetSectionProps = {
  videos: Video[];
};

export default function TVGetSection({ videos }: TVGetSectionProps) {
  const [mainVideo, ...secondaryVideos] = videos;
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const playVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  const VideoThumbnail = ({
    video,
    size = "large",
  }: {
    video: Video;
    size?: "large" | "small";
  }) => {
    const isPlaying = playingVideoId === video.id;
    const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

    if (isPlaying) {
      return (
        <div
          className={`relative w-full ${
            size === "large" ? "aspect-video" : "h-32 md:h-52"
          } rounded-xl overflow-hidden bg-black`}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      );
    }

    return (
      <div
        onClick={() => playVideo(video.id)}
        className={`relative w-full ${
          size === "large" ? "aspect-video" : "h-32 md:h-52"
        } rounded-xl overflow-hidden cursor-pointer group`}
      >
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-white absolute left-6 bottom-6 w-8 md:w-10 h-8 md:h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
        </div>

        {size === "small" && (
          <div className="absolute bottom-2 right-5 bg-linear-to-t from-black/80 via-black/50 to-transparent p-3">
            <h4 className="text-white font-bold text-xs md:text-sm drop-shadow-md line-clamp-1">
              {video.title}
            </h4>
            <p className="text-white/90 text-[10px] md:text-xs drop-shadow">
              {video.author}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full py-12 md:py-16 my-8 bg-linear-to-b from-[#cdaa80] via-[#cdaa80] to-[#b89968]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <span className="text-white text-2xl md:text-4xl font-bold tracking-wide">
            TVGet
          </span>
          <Link
            href="/videos"
            className="text-white text-xs md:text-base font-medium flex items-center gap-1 hover:underline"
          >
            VER TODOS <FiArrowUpRight className="text-lg font-bold" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Vídeo Principal */}
          <div className="w-full md:w-8/12 flex flex-col gap-4">
            <VideoThumbnail video={mainVideo} size="large" />

            <div className="text-white space-y-2">
              <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-2">
                <h3 className="font-bold uppercase tracking-wide text-lg md:text-xl drop-shadow-md">
                  {mainVideo.title}
                </h3>
                <time className="text-xs md:text-sm text-white/90">
                  {mainVideo.date}
                </time>
              </div>
              <p className="text-sm font-medium text-white/95">
                {mainVideo.author}
              </p>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {mainVideo.description}
              </p>
            </div>
          </div>

          {/* Vídeos Secundários */}
          <div className="flex flex-col gap-4 w-full md:w-4/12">
            {secondaryVideos.slice(0, 2).map((video) => (
              <VideoThumbnail key={video.id} video={video} size="small" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
