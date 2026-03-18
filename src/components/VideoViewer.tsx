interface VideoViewerProps {
  item: {
    order?: number;
    size: string;
    extension_type: string;
    description: string;
    url: string;
  };
}

export function VideoViewer({ item }: VideoViewerProps) {
  return (
    <div className=" border border-primary/50 rounded-xl">
      <video
        key={item.url}
        controls
        className="w-full rounded-lg mb-2"
        preload="none"
      >
        <source src={item.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
