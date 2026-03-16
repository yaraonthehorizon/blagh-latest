interface VideoViewerProps {
  key: number;
  title: string;
  item: {
    order: number;
    size: string;
    extension_type: string;
    description: string;
    url: string;
  };
}

export function VideoViewer({ key, item, title }: VideoViewerProps) {
  return (
    <div className="border border-primary/50 rounded-xl">
      <video
        key={key}
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
