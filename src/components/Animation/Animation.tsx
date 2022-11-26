import { useRive } from '@rive-app/react-canvas';
import './style.css';

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: '/loading_circle-2.riv',
    autoplay: true,
  });

  return (
    <RiveComponent
        className={"animation"}
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
    />
  );
}
