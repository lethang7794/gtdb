interface HomepageLink {
  name: string
  url: string
  description?: string
  tags?: string[]
}

export const LINKS: HomepageLink[] = [
  {
    name: 'Nghị định 168 (2024)',
    url: '/vbpl/nghi-dinh-168-2024',
    description: 'Xử phạt vi phạm trong giao thông đường bộ',
  },
  {
    name: 'Nghị định 168 (2024) - Tóm tắt',
    url: '/markmaps/nghi-dinh-168-2024',
    tags: ['Tóm tắt'],
  },
  {
    name: 'Nghị định 168 (2024) - Tóm tắt xe môtô',
    url: '/markmaps/nghi-dinh-168-2024-xe-moto',
    tags: ['Tóm tắt'],
  },
  {
    name: 'Luật Trật tự, an toàn giao thông đường bộ (2024)',
    url: '/vbpl/luat-TTATGTDB-2024',
  },
  {
    name: 'Luật Trật tự, an toàn giao thông đường bộ (2024) - Tóm tắt',
    tags: ['Tóm tắt'],
    url: '/markmaps/luat-TTATGTDB-2024',
  },
  {
    name: 'Quy định về tốc độ và khoảng cách an toàn (2023)',
    url: '/vbpl/toc-do-khoang-cach-an-toan',
    description: '',
  },
  {
    name: 'VBPL liên quan đến giao thông đường bộ',
    url: '/vbpl/danh-sach',
    description: 'Tên, số hiệu, ngày ban hành, hiệu lực, nguồn, toàn văn...',
  },
]

export const USEFUL_LINKS: HomepageLink[] = [
  {
    name: 'Biển báo giao thông - Danh sách, Chi tiết',
    url: '/bbgt',
    description: 'Tất cả biển báo giao thông đường bộ theo QCVN 41:2019/BGTVT',
    tags: ['Danh sách', 'Chi tiết'],
  },
  {
    name: 'Biển báo giao thông - So sánh',
    url: '/bbgt-so-sanh',
    description: 'Hiệu lực tác dụng',
    tags: ['So sánh'],
  },
  {
    name: 'Vạch kẻ đường',
    url: '/vach-ke-duong',
    description: 'Theo QCVN 41:2019/BGTVT',
    tags: ['Danh sách', 'Chi tiết'],
  },
  {
    name: 'Phương tiện tham gia giao thông - theo luật 2024',
    url: '/markmaps/PTTGGT-2024',
    description: '',
    tags: ['Tóm tắt'],
  },
  {
    name: 'Giấy phép lái xe (bằng lái xe)',
    url: '/vbpl/giay-phep-lai-xe',
    tags: ['Tổng hợp'],
    description: 'Theo luật 2024 và luật 2008',
  },
  {
    name: 'Thuật ngữ',
    url: '/thuat-ngu',
    description: 'Giải thích các từ ngữ sử dụng trong các VBPL',
  },
  {
    name: 'Luật Giao thông đường bộ (2008)',
    url: '/vbpl/luat-GTDB-2008',
    description: 'Đã hết hiệu lực',
  },
  {
    name: 'Phương tiện tham gia giao thông - theo luật 2008',
    url: '/markmaps/PTTGGT-2008',
    description: '',
    tags: ['Tóm tắt'],
  },
]

export const EXTRA_LINKS: HomepageLink[] = [
  {
    name: 'Dashboard Cục đường bộ Việt Nam',
    url: 'https://ttdh.drvn.gov.vn/#/dashboard',
    description: '',
  },
  { name: 'Bản đồ cầu đường bộ', url: 'http://gis.drvn.vn/', description: '' },
  {
    name: 'Trang thông tin Giấy phép lái xe',
    url: 'https://gplx.gov.vn/',
    description: 'Tra cứu GPLX PET (có thời hạn, không thời hạn), GPLX cũ',
  },
  {
    name: 'Các Bản Đồ Đường Bộ Chuyên Biệt',
    url: 'https://sites.google.com/view/ttcddh-nv/b%E1%BA%A3n-%C4%91%E1%BB%93-s%E1%BB%91',
    description: '',
  },
  {
    name: 'Mạng lưới đường cao tốc và quốc lộ do các Khu quản lý',
    url: 'https://www.google.com/maps/d/viewer?mid=1Rt3-7UEr_p2ALodP9opRKLPeQv4_mjA',
    description: '',
  },
  {
    name: 'Mạng lưới đường cao tốc và tiền cao tốc tính đến 4/2023',
    url: 'https://www.google.com/maps/d/viewer?mid=1ndNjcUwnD7JjmCoOmB8sx6hvPTI5G_Q',
    description: '',
  },
  {
    name: 'Các tuyến quốc lộ do các Khu quản lý',
    url: 'https://www.google.com/maps/d/viewer?mid=1TzOYTUnUwL5D9BtbaGVLFLR_7YAK1xg',
    description: '',
  },
  {
    name: 'Mạng lưới đường bộ quốc tế ở Việt Nam',
    url: 'https://www.google.com/maps/d/viewer?mid=1Y8Kctl-7IvmSRbvGSyHq76BrPe04cx4',
    description: '',
  },
  {
    name: 'Bản đồ quy hoạch hệ thống giao thông Việt Nam đến năm 2050',
    url: 'https://drive.google.com/file/d/1r3wA8PrcDyJ_H0I_dU5jm7x5jVXq4Its/view',
    description: '',
  },
]

export const COMPARE_LINKS: HomepageLink[] = [
  {
    name: '[Bản nháp] So sánh hệ thống biển báo giao thông các nước châu Á',
    url: 'https://en.wikipedia.org/wiki/Draft:Comparison_of_Asian_road_signs',
    description: '',
  },
  {
    name: 'So sánh hệ thống biển báo giao thông các nước ảnh hưởng bởi MUTCD',
    url: 'https://en.wikipedia.org/wiki/Comparison_of_MUTCD-influenced_traffic_signs#',
    description:
      'Manual on Uniform Traffic Control Devices MUTCD (https://mutcd.fhwa.dot.gov/)',
  },
  {
    name: 'So sánh hệ thống biển báo giao thông các nước Châu Âu',
    url: 'https://en.wikipedia.org/wiki/Comparison_of_European_road_signs',
    description: '',
  },
]
