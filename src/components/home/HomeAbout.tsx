import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import torontoLottie from '../../lottie/toronto-lottie.json';
export default function HomeAbout() {
  const torontoLottieRef = useRef<Player | null>(null);

  return (
    <div>
      <Player
        src={torontoLottie}
        style={{ height: '300px', width: '300px' }}
        ref={torontoLottieRef}
        keepLastFrame={true}
        loop={false}
      />

      <button
        onClick={() => {
          torontoLottieRef.current!.play();
        }}
      >
        Click Me
      </button>
    </div>
  );
}
