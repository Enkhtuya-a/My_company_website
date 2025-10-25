// src/components/ProjectCard.jsx
import React from "react";
export default function ProjectCard({ project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.desc}</p>
    </div>
  );
}
