const VideoType = {
	Youtube: 1,
	Vimeo: 2
};

const videos = [
  {
    // worlds 2022
    type: VideoType.Youtube,
    id: 'SzroZ78NKQs',
    //start: 15,
    class: "hero-video_worlds2022"
  },
  {
    // krystof maler slowmo
    type: VideoType.Youtube,
    id: "WUbrFjdPE6c",
    start: 6
  },
  {
    // worlds 2019 "last shred"
    type: VideoType.Youtube,
    id: "Igp9-OZ8HPQ",
    class: "hero-video_last-shred"
  }
]

export { VideoType, videos };
