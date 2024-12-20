import React from "react";

const WavingHand: React.FC = () => {
    return (
        <span
            role="img"
            aria-label="Waving Hand"
            className="inline-block text-2xl md:text-4xl xl:text-6xl  animate-wave" // Sesuaikan ukuran sesuai kebutuhan
        >
            👋
        </span>
    );
};

export default WavingHand;
