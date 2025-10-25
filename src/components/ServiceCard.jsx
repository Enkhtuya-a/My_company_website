// src/components/ServiceCard.jsx
import React from "react";
export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="border rounded p-4 text-center shadow hover:shadow-lg transition">
      {icon && <div className="text-4xl mb-2">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
