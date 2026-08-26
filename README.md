# TTS — 3D Mobile RPG

Prototype เกม RPG 3D สำหรับมือถือ เล่นผ่านเว็บเบราว์เซอร์ และเตรียมเชื่อมกับ Cloudflare Worker `mmo-wom`.

## Prototype ที่ทำแล้ว
- 3D scene ด้วย Three.js
- Hero 3D แบบ procedural
- โลก 3D และต้นไม้
- Virtual joystick สำหรับมือถือ
- Attack / Skill
- Damage display
- Monster HP / Victory / Respawn
- Level / EXP / Gold
- Character Stats
- Inventory เบื้องต้น
- Local Save
- Cloud Save API client: `/api/save` และ `/api/load`
- Cloudflare Worker API ต้นแบบใน `worker.js`
- รองรับ keyboard W/A/S/D + Space สำหรับทดสอบบน desktop

## Cloudflare
Worker API ต้นแบบใช้ binding ชื่อ `GAME_SAVE` (KV) สำหรับเก็บข้อมูลผู้เล่น

เมื่อเชื่อม `worker.js` เข้ากับ Worker `mmo-wom` แล้วเกมจะพยายามใช้ Cloud Save อัตโนมัติ และ fallback เป็น Local Save หาก API ยังไม่พร้อม

## Roadmap
1. Character / Inventory / Equipment แบบเต็ม
2. Stats และ Damage Calculation
3. Monster AI
4. Loot / Item Drop
5. Weapon Upgrade
6. Weapon Gacha
7. Quest / Dungeon / Boss
8. Cloud Save แยกผู้เล่นด้วย authentication
9. Auto Deploy GitHub → Cloudflare
10. เพิ่มโมเดล 3D และ animation จริง
