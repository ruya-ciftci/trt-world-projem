Bu proje, React ile geliştirdiğim bir haber sitesi uygulamasıdır. 

🚀 
Gereksinimler
Node.js 
npm 
JSON Server

Bağımlılıkları yükleyin:
npm install  
db.json dosyası içinde veriler yüklü.


Çalıştırma
React uygulamasını başlatın:
npm run dev  
JSON Server'ı çalıştırın:
json-server --watch db.json  

Tarayıcıdan uygulamayı açın:
React uygulaması için:http://localhost:5173
JSON Server için: http://localhost:3000
📂 Proje Yapısı
├── src/  
│   ├── components/  
│   │   ├── Header.js  
│   │   ├── Footer.js  
│   │   └── ....
│   ├── pages/  
│   │   ├── Home.js  
│   │   └── Detay.js  
│   ├── App.js  
│   ├── index.js  
├── public/  
├── db.json  
├── package.json  
├── README.md  
└── ... (diğer dosyalar)  

Özellikler
Haber listeleme
JSON Server entegrasyonu
Responsive tasarım

Kullanılan Teknolojiler
React
JSON Server
Tailwind CSS
