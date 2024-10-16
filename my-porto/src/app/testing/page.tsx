import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function IDCardWithString() {
  // Motion value untuk posisi ID card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Menghubungkan tali dengan posisi ID card
  const stringX = useTransform(x, (value) => `${value + 100}px`); // Ubah posisi tali sesuai drag
  const stringY = useTransform(y, (value) => `${value + 50}px`); // Ubah posisi tali sesuai drag

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      {/* Tali yang mengikuti ID card */}
      <motion.div
        style={{
          position: "absolute",
          width: "2px", // Ketebalan tali
          height: "300px", // Panjang tali
          backgroundColor: "pink",
          top: 0,
          left: "50%", // Mulai dari tengah layar (bisa diubah)
          transformOrigin: "top", // Ujung atas tali
          transform: `translateX(-50%)`, // Agar tali di tengah layar
        }}
      />
      
      {/* ID Card bisa di-drag */}
      <motion.div
        drag
        style={{
          x: x,
          y: y,
          width: "150px",
          height: "200px",
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          position: "absolute",
          top: "100px", // Posisi awal
          left: "calc(50% - 75px)", // Agar ID card ada di tengah awalnya
        }}
      >
        <div>
          {/* Isi ID Card */}
          <p style={{ textAlign: "center" }}>Frisqia Fatmalaningsih</p>
        </div>
      </motion.div>
    </div>
  );
}
