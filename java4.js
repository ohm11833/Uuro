// ... (ข้อมูล contentData เหมือนเดิม ไม่ต้องแก้) ...

// แก้ไขฟังก์ชัน renderGrid
function renderGrid() {
    gridContainer.innerHTML = contentData.map(item => `
        <div class="card" onclick="goToPage(${item.id})"> <img src="${item.img}" class="card-img" alt="${item.title}">
            <div class="card-num">${item.id.toString().padStart(2, '0')}</div>
            <div class="card-overlay">
                <h3>${item.title}</h3>
                <span style="color: var(--accent); font-size: 0.9rem; letter-spacing: 1px;">คลิกเพื่ออ่านต่อ</span>
            </div>
        </div>
    `).join('');
}

// เพิ่มฟังก์ชันใหม่สำหรับการเปลี่ยนหน้า
function goToPage(id) {
    if (id === 1) {
        // ถ้าเลือกอันที่ 1 ให้ไปหน้า page1.html
        window.location.href = 'page1.html';
    } else {
        // อันอื่น (2-10) ยังไม่มีหน้า ให้แจ้งเตือนก่อน หรือใส่ link หน้าอื่นๆ ต่อไปตรงนี้
        alert("กำลังดำเนินการสร้างหน้าสำหรับหัวข้อที่ " + id);
        // ตัวอย่าง: if (id === 2) window.location.href = 'page2.html';
    }
}

// ... (ส่วน Modal Popup ของเดิมลบออกได้ หรือทิ้งไว้เฉยๆ ก็ได้เพราะเราไม่ได้ใช้แล้ว) ...
document.addEventListener('DOMContentLoaded', renderGrid);// JavaScript Document