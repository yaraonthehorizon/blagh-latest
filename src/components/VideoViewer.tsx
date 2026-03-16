export function VideoViewer(props: {
  key: number;
  title: string;
  item: { url: string };
}) {
  return (
    <div className="border border-primary/50 rounded-xl">
      <video
        key={props.key}
        controls
        className="w-full rounded-lg mb-2"
        preload="none"
      >
        <source src={props.item.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
