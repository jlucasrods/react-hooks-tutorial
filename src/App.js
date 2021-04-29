import { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watch = navigator.geolocation.watchPosition(handlePosition);

    return () => navigator.geolocation.clearWatch(watch);
  }, []);

  function handlePosition({ coords: {latitude, longitude} }) {
    setLocation({ latitude, longitude });
  }

  return (
    <>
      <h1>Location:</h1>
      <h2>Latitude {location.latitude}</h2>
      <h2>longitude {location.longitude}</h2>
    </>
  );
}