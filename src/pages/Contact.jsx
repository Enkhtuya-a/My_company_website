import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-4">Холбоо барих</h2>

      <p className="mb-4">Та бидэнтэй дараах хаягаар холбогдоно уу:</p>

      <ul className="list-none space-y-2">
        <li><strong>Утас:</strong> 99079419</li>
        <li><strong>Имэйл:</strong> info@energycloud.mn</li>
        <li><strong>Хаяг:</strong> Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, 13-р хороолол/14230/, Нарны зам гудамж 62-р байр, 508 тоот </li>
        <li><strong>Ажлын цаг:</strong> Даваа–Баасан 09:00–18:00</li>
      </ul>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Санал хүсэлт илгээх</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Таны нэр" className="w-full border px-4 py-2" />
          <input type="email" placeholder="Имэйл хаяг" className="w-full border px-4 py-2" />
          <textarea placeholder="Санал хүсэлт" className="w-full border px-4 py-2 h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Илгээх</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;