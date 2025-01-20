'use client'

import { LawSectionPreview } from '@/components/block/law-section-preview'

export default function Page() {
  // const explain = 'Điểm l, khoản 5, Điều 6'
  // const detail1 =
  //   'Xử phạt, trừ điểm giấy phép lái xe của người điều khiển xe ô tô, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ và các loại xe tương tự xe ô tô vi phạm quy tắc giao thông đường bộ'
  // const detail2 =
  //   'Phạt tiền từ 4.000.000 đồng đến 6.000.000 đồng đối với người điều khiển xe thực hiện một trong các hành vi vi phạm sau đây:'
  // const detail3 =
  //   'Chuyển hướng không nhường quyền đi trước cho: người đi bộ, xe lăn của người khuyết tật qua đường tại nơi có vạch kẻ đường dành cho người đi bộ; xe thô sơ đang đi trên phần đường dành cho xe thô sơ;'

  const explain = 'Điểm a khoản 4 Điều 3'
  const short1 = 'Điều 3'
  const short2 = 'khoản 4'
  const short3 = 'điểm a'
  const detail1 =
    'Điều 3. Hình thức xử phạt vi phạm hành chính, biện pháp khắc phục hậu quả; thu hồi giấy phép, chứng chỉ hành nghề 🚘🏍️🛵'
  const detail2 =
    '4. Thủ tục thi hành biện pháp khắc phục hậu quả buộc nộp lại giấy phép, chứng chỉ hành nghề bị tẩy xóa, sửa chữa làm sai lệch nội dung; thu hồi giấy phép, chứng chỉ hành nghề đã hết giá trị sử dụng hoặc không do cơ quan có thẩm quyền cấp'
  const detail3 = `
a. Cá nhân, tổ chức vi phạm có trách nhiệm thi hành biện pháp khắc phục hậu quả buộc nộp lại giấy phép, chứng chỉ hành nghề bị tẩy xóa, sửa chữa làm sai lệch nội dung gồm: giấy phép lái xe; chứng nhận đăng ký xe; bản sao chứng nhận đăng ký xe có chứng thực kèm theo bản gốc giấy biên nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài trong trường hợp tổ chức tín dụng, chi nhánh ngân hàng nước ngoài giữ bản gốc chứng nhận đăng ký xe; giấy chứng nhận, tem kiểm định an toàn kỹ thuật và bảo vệ môi trường của phương tiện bị tẩy xóa, sửa chữa làm sai lệch nội dung thực hiện theo quy định tại Điều 85 của Luật Xử lý vi phạm hành chính.

Người có thẩm quyền ra quyết định thi hành biện pháp khắc phục hậu quả chuyển giấy phép, chứng chỉ hành nghề bị tẩy xóa, sửa chữa làm sai lệch nội dung cho cơ quan, người có thẩm quyền đã cấp giấy phép, chứng chỉ hành nghề đó;
`

  const law = 'Nghi dinh 168'

  return (
    <div className="w-[1200px] h-[630px]">
      <LawSectionPreview
        short1={short1}
        short2={short2}
        short3={short3}
        detail1={detail1}
        detail2={detail2}
        detail3={detail3}
        highlight={'yellow'}
        law={law}
      />
    </div>
  )
}
