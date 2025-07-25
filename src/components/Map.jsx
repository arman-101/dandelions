import { useRef } from 'react';

export default function Map({ selectedLocation }) {
  const imgRef = useRef(null);

  const handleClick = (e) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const xPercent = ((clickX / rect.width) * 100).toFixed(2);
    const yPercent = ((clickY / rect.height) * 100).toFixed(2);

    console.log(`{ x: ${xPercent}, y: ${yPercent} },`);
  };

  const getPinStyle = () => ({
    position: 'absolute',
    left: `${selectedLocation.x}%`,
    top: `${selectedLocation.y}%`,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  });

  return (
    <div
      className="relative flex items-center justify-center flex-grow"
      style={{ width: '80%', margin: 'auto' }}
    >
      <img
        ref={imgRef}
        src="map.jpeg"
        alt="map"
        className="w-full h-auto object-contain rounded-2xl mb-5 mt-5 border-4 border-myDarkGreen"
        onClick={handleClick}
      />
      {selectedLocation && (
        <div className="text-2xl" style={getPinStyle()}>
          📍
        </div>
      )}
    </div>
  );
}
