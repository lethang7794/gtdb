import type { Metadata } from 'next'
// import { getNghiDinh168MindMap } from '@/service/nghi-dinh-168-mind-map'
import Markmap from '@/components/markmap'

export const metadata: Metadata = {
  title: 'Nghị định 168/2024 - Tóm tắt',
  description:
    'Quy định xử phạt vi phạm hành chính về trật tự, an toàn giao thông trong lĩnh vực giao thông đường bộ; trừ điểm phục hồi điểm giấy phép lái xe',
}

export default async function NghiDinh168Mindmap() {
  // const data = getNghiDinh168MindMap()

  return <Markmap data={nd168MindMap} />
}

// TODO: load from remote location
const nd168MindMap = `
---
markmap:
  color:
    - blue
  maxWidth: 400
---

# [Nghị định 168/2024] <br/>... xử phạt ... giao thông đường bộ ...

## [Chương I]. ... QUY ĐỊNH CHUNG <!-- markmap: fold -->

### [Điều 1]. Phạm vi _điều chỉnh_

### [Điều 2]. _Đối tượng_ áp dụng

### [Điều 3]. _Hình thức xử phạt_ ...

### [Điều 4]. _Thời hiệu xử phạt_ ...

### [Điều 5]. _Tước quyền_ ...

## [Chương II]. ... VI PHẠM ... XỬ PHẠT...

### [Mục 1][2.1]. ... _QUY TẮC GIAO THÔNG_ ...

#### [Điều 6]. ... _xe ô tô_ ...

#### [Điều 7]. ... _xe mô tô, xe gắn máy_...

#### [Điều 8]. ... _xe máy chuyên dùng_ ...

#### [Điều 9]. ... _xe đạp, xe đạp máy_ ...

#### [Điều 10]. ... _người đi bộ_ ...

#### [Điều 11]. ... _dắt vật nuôi_, ... _xe vật nuôi kéo_ ...

#### [Điều 12]. ... _vi phạm khác_ ... _lòng đường, vỉa hè_ ...

### [Mục 2][2.2]. ... _PHƯƠNG TIỆN_ ...

#### [Điều 13]. ... _xe ô tô_ ...

#### [Điều 14]. ... _xe mô tô, xe gắn máy_ ...

#### [Điều 15]. ... _xe thô sơ_ ...

#### [Điều 16]. ... _xe máy chuyên dùng_ ...

#### [Điều 17]. ... _bảo vệ môi trường_ ...

### [Mục 3][2.3]. ... _NGƯỜI ĐIỀU KHIỂN_ ...

#### [Điều 18]. ... _xe cơ giới_

#### [Điều 19]. ... _xe máy chuyên dùng_

### [Mục 4][2.4]. ... _XE Ô TÔ VẬN CHUYỂN HÀNH KHÁCH, HÀNG HÓA_ ... <!-- markmap: fold -->

#### [Điều 20]. ... _xe ô tô chở hành khách_ ...

#### [Điều 21]. ... _xe ô tô tải, máy kéo_ ...

#### [Điều 22]. ... _hàng siêu trường, siêu trọng_

#### [Điều 23]. ... _hàng hóa nguy hiểm_

#### [Điều 24]. ... _động vật sống, thực phẩm tươi sống_

#### [Điều 25]. ... _xe vệ sinh môi trường_ ...

#### [Điều 26]. ... _vận tải đường bộ_...

#### [Điều 27]. ... _đưa đón trẻ em mầm non, học sinh_

#### [Điều 28]. ... _bốn bánh có gắn động cơ_ ...

#### [Điều 29]. ... _xe cứu hộ_ ...

#### [Điều 30]. ... _xe cứu thương_

### [Mục 5][2.5]. ... VI PHẠM KHÁC ...

#### [Điều 31]. ... _sản xuất, lắp ráp_ ... _mua, bán biển số_ ...

#### [Điều 32]. ... _chủ phương tiện_ ...

#### [Điều 33]. ... _hành khách đi xe_ ...

#### [Điều 34]. ... _quá khổ giới hạn, xe quá tải trọng_ ...

#### [Điều 35]. ... _đua xe trái phép_ ... _cổ vũ_ ...

#### [Điều 36]. ... _xe mô tô_ ... _vận chuyển ... khách, hàng hóa_

#### [Điều 37]. ... _biển số nước ngoài_

#### [Điều 38]. ... _Khu kinh tế_ ...

#### [Điều 39]. ... _đào tạo, sát hạch lái xe_

#### [Điều 40]. ... _đăng kiểm_ ...

## [Chương III]. THẨM QUYỀN, THỦ TỤC XỬ PHẠT...

### [Mục 1][3.1]. _THẨM QUYỀN_ XỬ PHẠT <!-- markmap: fold -->

#### [Điều 41]. _Phân định thẩm quyền xử phạt_ ...

#### [Điều 42]. ... _Chủ tịch Ủy ban nhân dân_ ...

#### [Điều 43]. ... _Công an nhân dân_

#### [Điều 44]. ... _Thanh tra chuyên ngành_

#### [Điều 45]. _Nguyên tắc xác định thẩm quyền xử phạt_ ...

#### [Điều 46]. ... _lập biên bản_ ...

### [Mục 2][3.2]. THỦ TỤC _XỬ PHẠT_

#### [Điều 47]. ... _chủ phương tiện, người điều khiển_ ...

#### [Điều 48]. _Tạm giữ phương tiện, giấy tờ_ ...

### [Mục 3][3.3]. ... _TRỪ ĐIỂM, PHỤC HỒI ĐIỂM_

#### [Điều 49]. _Dữ liệu về điểm_ ...

#### [Điều 50]. ... _trừ điểm_ ...

#### [Điều 51]. ... _phục hồi điểm_ ...

## [Chương IV]. ĐIỀU KHOẢN _THI HÀNH_ <!-- markmap: fold -->

### [Điều 52]. _Sửa đổi, bổ sung_ ...

### [Điều 53]. _Hiệu lực_ thi hành

### [Điều 54]. Điều khoản _chuyển tiếp_

### [Điều 55]. _Trách nhiệm_ thi hành

[Nghị định 168/2024]: /vbpl/nghi-dinh-168-2024
[Chương I]: /vbpl/nghi-dinh-168-2024#I
[Điều 1]: /vbpl/nghi-dinh-168-2024#1
[Điều 2]: /vbpl/nghi-dinh-168-2024#2
[Điều 3]: /vbpl/nghi-dinh-168-2024#3
[Điều 4]: /vbpl/nghi-dinh-168-2024#4
[Điều 5]: /vbpl/nghi-dinh-168-2024#5
[Chương II]: /vbpl/nghi-dinh-168-2024#II
[2.1]: /vbpl/nghi-dinh-168-2024#II.1
[Điều 6]: /vbpl/nghi-dinh-168-2024#6
[Điều 7]: /vbpl/nghi-dinh-168-2024#7
[Điều 8]: /vbpl/nghi-dinh-168-2024#8
[Điều 9]: /vbpl/nghi-dinh-168-2024#9
[Điều 10]: /vbpl/nghi-dinh-168-2024#10
[Điều 11]: /vbpl/nghi-dinh-168-2024#11
[Điều 12]: /vbpl/nghi-dinh-168-2024#12
[2.2]: /vbpl/nghi-dinh-168-2024#II.2
[Điều 13]: /vbpl/nghi-dinh-168-2024#13
[Điều 14]: /vbpl/nghi-dinh-168-2024#14
[Điều 15]: /vbpl/nghi-dinh-168-2024#15
[Điều 16]: /vbpl/nghi-dinh-168-2024#16
[Điều 17]: /vbpl/nghi-dinh-168-2024#17
[2.3]: /vbpl/nghi-dinh-168-2024#II.3
[Điều 18]: /vbpl/nghi-dinh-168-2024#18
[Điều 19]: /vbpl/nghi-dinh-168-2024#19
[2.4]: /vbpl/nghi-dinh-168-2024#II.4
[Điều 20]: /vbpl/nghi-dinh-168-2024#20
[Điều 21]: /vbpl/nghi-dinh-168-2024#21
[Điều 22]: /vbpl/nghi-dinh-168-2024#22
[Điều 23]: /vbpl/nghi-dinh-168-2024#23
[Điều 24]: /vbpl/nghi-dinh-168-2024#24
[Điều 25]: /vbpl/nghi-dinh-168-2024#25
[Điều 26]: /vbpl/nghi-dinh-168-2024#26
[Điều 27]: /vbpl/nghi-dinh-168-2024#27
[Điều 28]: /vbpl/nghi-dinh-168-2024#28
[Điều 29]: /vbpl/nghi-dinh-168-2024#29
[Điều 30]: /vbpl/nghi-dinh-168-2024#30
[2.5]: /vbpl/nghi-dinh-168-2024#II.5
[Điều 31]: /vbpl/nghi-dinh-168-2024#31
[Điều 32]: /vbpl/nghi-dinh-168-2024#32
[Điều 33]: /vbpl/nghi-dinh-168-2024#33
[Điều 34]: /vbpl/nghi-dinh-168-2024#34
[Điều 35]: /vbpl/nghi-dinh-168-2024#35
[Điều 36]: /vbpl/nghi-dinh-168-2024#36
[Điều 37]: /vbpl/nghi-dinh-168-2024#37
[Điều 38]: /vbpl/nghi-dinh-168-2024#38
[Điều 39]: /vbpl/nghi-dinh-168-2024#39
[Điều 40]: /vbpl/nghi-dinh-168-2024#40
[Chương III]: /vbpl/nghi-dinh-168-2024#III
[3.1]: /vbpl/nghi-dinh-168-2024#III.1
[Điều 41]: /vbpl/nghi-dinh-168-2024#41
[Điều 42]: /vbpl/nghi-dinh-168-2024#42
[Điều 43]: /vbpl/nghi-dinh-168-2024#43
[Điều 44]: /vbpl/nghi-dinh-168-2024#44
[Điều 45]: /vbpl/nghi-dinh-168-2024#45
[Điều 46]: /vbpl/nghi-dinh-168-2024#46
[3.2]: /vbpl/nghi-dinh-168-2024#III.2
[Điều 47]: /vbpl/nghi-dinh-168-2024#47
[Điều 48]: /vbpl/nghi-dinh-168-2024#48
[3.3]: /vbpl/nghi-dinh-168-2024#III.3
[Điều 49]: /vbpl/nghi-dinh-168-2024#49
[Điều 50]: /vbpl/nghi-dinh-168-2024#50
[Điều 51]: /vbpl/nghi-dinh-168-2024#51
[Chương IV]: /vbpl/nghi-dinh-168-2024#IV
[Điều 52]: /vbpl/nghi-dinh-168-2024#52
[Điều 53]: /vbpl/nghi-dinh-168-2024#53
[Điều 54]: /vbpl/nghi-dinh-168-2024#54
[Điều 55]: /vbpl/nghi-dinh-168-2024#55
`
