/* --- ไฟล์ java3.js ฉบับสมบูรณ์ --- */

// 1. ข้อมูลเนื้อหาทั้ง 10 หัวข้อ 
// (เช็คชื่อรูปภาพให้ตรงกับในโฟลเดอร์ของคุณนะครับ)
const contentData = [
    { id: 1, title: "ประวัติความเป็นมา", img: "n1.jpg" },
    { id: 2, title: "ตำนานพญาคันคาก", img: "ตำนานพญาคันคาก.jpg" },
    { id: 3, title: "ตำนานผาแดงนางไอ่", img: "ตำนานผาแดงนางไอ่.jpg" },
    { id: 4, title: "ประเภทของบั้งไฟ", img: "ประเภทของบั้งไฟ.jpg" },
    { id: 5, title: "การตกแต่งบั้งไฟ", img: "การตกแต่งบั้งไฟ.jpg" },
    { id: 6, title: "ขบวนแห่เซิ้ง", img: "ขบวนแห่เซิ้ง.jpg" },
    { id: 7, title: "กติกาและการแข่งขัน", img: "กติกาและการแข่งขัน.jpg" },
    { id: 8, title: "ความเชื่อเรื่องขอฝน", img: "ความเชื่อเรื่องการขอฝน.jpg" },
    { id: 9, title: "จังหวัดที่จัดงาน", img: "จังหวัดที่จัดงาน.jpg" },
    { id: 10, title: "บั้งไฟยุคปัจจุบัน", img: "บั้งไฟในยุคปัจจุบัน.jpg" }
];

// 2. อ้างอิงกล่องที่จะใส่เนื้อหา (Grid Container)
const gridContainer = document.getElementById('grid-container');

// 3. ฟังก์ชันสร้าง Grid Cards (ทำงานอัตโนมัติ)
function renderGrid() {
    // ถ้าหา div ไม่เจอ ให้จบการทำงาน (กัน Error)
    if (!gridContainer) return;

    gridContainer.innerHTML = contentData.map(item => `
        <div class="card" onclick="goToPage(${item.id})">
            <img src="${item.img}" class="card-img" alt="${item.title}">
            <div class="card-num">${item.id.toString().padStart(2, '0')}</div>
            <div class="card-overlay">
                <h3>${item.title}</h3>
                <span style="color: #ff5e00; font-size: 0.9rem; letter-spacing: 1px;">
                    คลิกเพื่ออ่านต่อ
                </span>
            </div>
        </div>
    `).join('');
}

// 4. ฟังก์ชันเปลี่ยนหน้า (Link ไปยังไฟล์ n1.html - n10.html)
function goToPage(id) {
    // สูตรคือ: 'n' + เลขไอดี + '.html'
    // ตัวอย่าง: 
    // ถ้า id = 1  --> ไปที่ n1.html
    // ถ้า id = 10 --> ไปที่ n10.html
    const fileName = `n${id}.html`;
    
    // สั่งให้เปลี่ยนหน้า
    window.location.href = fileName;
}

// 5. สั่งให้ทำงานเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', renderGrid);