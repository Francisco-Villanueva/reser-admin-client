"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Settings() {
  const [qr, setQr] = useState();
  useEffect(() => {
    axios.get(`http://localhost:4000/api/wp/qr`).then((res) => {
      setQr(res.data);
    });
  }, []);

  return (
    <div>
      <h1>WhatsApp Web QR Code</h1>
      {qr ? (
        <img src={qr} alt="WhatsApp Web QR Code" />
      ) : (
        <p>Obteniendo el código QR...</p>
      )}
    </div>
  );
}
