import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-4">Бидний тухай</h2>
      <p className="mb-6">
        Манай компани 2010 оноос хойш барилгын зураг төсөл, инженерийн шийдлүүдийг боловсруулж байна. 
        Бид мэргэжлийн баг, чанартай үйлчилгээ, найдвартай шийдлүүдийг санал болгодог.
      </p>

      <h3 className="text-xl font-semibold mb-2">Бидний давуу талууд</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Мэргэжлийн туршлагатай инженерүүд</li>
        <li>Олон улсын стандартын дагуу зураг төсөл</li>
        <li>Захиалагчийн шаардлагад нийцсэн уян хатан шийдлүүд</li>
        <li>Хугацаанд нь багтаасан гүйцэтгэл</li>
        <li>Техникийн зөвлөгөө, дэмжлэг үзүүлэх үйлчилгээ</li>
      </ul>
    </div>
  );
}

export default About;