'use client';
import { isDiem, isKhoan, isDieu, isChuong, isMuc } from '@/lib/vbpl-explain-section';

export function extractSectionIds(id: string) {
  let firstId: string = '';
  let secondId: string = '';
  let thirdId: string = '';

  if (isDiem(id)) {
    const [dieuId, khoanId] = id.split('.');
    firstId = dieuId;
    secondId = `${dieuId}.${khoanId}`;
    thirdId = id;
  }
  if (isKhoan(id)) {
    const [diemId, khoanId] = id.split('.');
    firstId = diemId;
    secondId = `${diemId}.${khoanId}`;
  }
  if (isDieu(id)) {
    const [dieuId] = id.split('.');
    firstId = dieuId;
  }
  if (isChuong(id)) {
    const [chuongId] = id.split('.');
    firstId = chuongId;
  }
  if (isMuc(id)) {
    const [chuongId, mucId] = id.split('.');
    firstId = chuongId;
    secondId = mucId;
  }

  return { firstId, secondId, thirdId };
}
