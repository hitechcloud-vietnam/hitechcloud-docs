# HiTechCloud Docs — Developer README

Kho tài liệu này dùng để xây dựng website **docs.hitechcloud.dev** bằng **Docusaurus**.

## 1) Mục tiêu dự án

- Quản lý tài liệu kỹ thuật cho hệ sinh thái HiTechCloud.
- Cung cấp nhiều bộ tài liệu theo từng mảng (API, AI/LLM, Cloud Instance, Tools, Brandname).
- Xuất bản thành static site và triển khai trên hạ tầng web.

## 2) Tech stack

- Node.js `>= 18`
- Docusaurus `3.8.1`
- React `19`
- Algolia search
- Docker / Docker Compose (tuỳ chọn)

## 3) Yêu cầu môi trường

- Node.js 18+ (khuyến nghị Node.js 20)
- npm (repo hiện có `package-lock.json`, nên ưu tiên npm để đồng bộ)

Kiểm tra nhanh:

```bash
node -v
npm -v
```

## 4) Cài đặt và chạy local

### Cài dependencies

```bash
npm ci
```

### Chạy môi trường dev

```bash
npm run start
```

Mặc định site chạy ở `http://localhost:3000`.

## 5) Các script chính

```bash
npm run start                # Chạy local dev server (hot reload)
npm run build                # Build static site vào thư mục build/
npm run serve                # Serve nội dung đã build
npm run clear                # Xoá cache Docusaurus
npm run write-translations   # Sinh file i18n
npm run write-heading-ids    # Sinh heading ids
```

## 6) Cấu trúc tài liệu trong repo

Các khu vực docs chính:

- `docs/` → route `/docs` (HiTechCloud API)
- `docs-install/` → route `/install` (AI & LLM)
- `docs-vps/` → route `/vps` (Cloud Instance)
- `docs-tools/` → route `/tools` (Tool - Chia sẻ)
- `docs-brandname/` → route `/brandname` (Domains BrandName)

Sidebar tương ứng:

- `sidebars.js`
- `sidebars-install.js`
- `sidebars-vps.js`
- `sidebars-tools.js`
- `sidebars-brandname.js`

Các file cấu hình chính:

- `docusaurus.config.js`
- `babel.config.js`
- `Dockerfile`
- `docker-compose.yml`

## 7) Quy trình thêm/chỉnh sửa tài liệu

1. Chọn đúng nhóm tài liệu (`docs`, `docs-install`, `docs-vps`, `docs-tools`, `docs-brandname`).
2. Tạo/cập nhật file `.md` hoặc `.mdx`.
3. Khai báo item mới trong file sidebar tương ứng.
4. Nếu cần ảnh/tài nguyên tĩnh, đặt trong `static/img/`.
5. Chạy kiểm tra trước khi commit:

```bash
npm run build
```

Lưu ý: cấu hình hiện tại để `onBrokenLinks: 'throw'`, nên build sẽ fail nếu link hỏng.

## 8) Chạy bằng Docker

Repo đã có `Dockerfile` và `docker-compose.yml`.

```bash
docker compose up --build
```

Sau khi chạy, truy cập:

- `http://localhost:3056`

Mapping mặc định: host `3056` → container `3000`.

## 9) Build & deploy

Build production:

```bash
npm run build
```

Preview bản build local:

```bash
npm run serve
```

Script deploy GitHub Pages vẫn có sẵn trong project, nhưng deployment thực tế cần theo pipeline/hạ tầng của team.

## 10) Checklist trước khi tạo PR

- [ ] `npm run build` pass
- [ ] Không có link hỏng
- [ ] Sidebar cập nhật đúng
- [ ] Route truy cập đúng
- [ ] Nội dung/định dạng markdown hiển thị ổn

---

Nếu cần hỗ trợ nội dung hoặc cấu trúc tài liệu, cập nhật trực tiếp trong nhánh feature và tạo PR để review.
