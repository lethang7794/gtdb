'use client'

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
    'Điều 3. Hình thức xử phạt vi phạm hành chính, biện pháp khắc phục hậu quả; thu hồi giấy phép, chứng chỉ hành nghề'
  const detail2 =
    '4. Thủ tục thi hành biện pháp khắc phục hậu quả buộc nộp lại giấy phép, chứng chỉ hành nghề bị tẩy xóa, sửa chữa làm sai lệch nội dung; thu hồi giấy phép, chứng chỉ hành nghề đã hết giá trị sử dụng hoặc không do cơ quan có thẩm quyền cấp'
  const detail3 = `
a. Cá nhân, tổ chức vi phạm có trách nhiệm thi hành biện pháp khắc phục hậu quả buộc nộp lại giấy phép, chứng chỉ hành nghề bị tẩy xóa, sửa chữa làm sai lệch nội dung gồm: giấy phép lái xe; chứng nhận đăng ký xe; bản sao chứng nhận đăng ký xe có chứng thực kèm theo bản gốc giấy biên nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài trong trường hợp tổ chức tín dụng, chi nhánh ngân hàng nước ngoài giữ bản gốc chứng nhận đăng ký xe; giấy chứng nhận, tem kiểm định an toàn kỹ thuật và bảo vệ môi trường của phương tiện bị tẩy xóa, sửa chữa làm sai lệch nội dung thực hiện theo quy định tại Điều 85 của Luật Xử lý vi phạm hành chính.

Người có thẩm quyền ra quyết định thi hành biện pháp khắc phục hậu quả chuyển giấy phép, chứng chỉ hành nghề bị tẩy xóa, sửa chữa làm sai lệch nội dung cho cơ quan, người có thẩm quyền đã cấp giấy phép, chứng chỉ hành nghề đó;
`

  return (
    <div className="w-[1200px] h-[630px]">
      <div
        style={{
          // backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
          backgroundColor: 'rgb(33, 40, 49)',
          height: 630,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 12,
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            color: 'white',
            padding: '48px 60px 0 60px',
            lineHeight: 1.4,
          }}
        >
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(255, 0, 0), rgb(254, 98, 48))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            {short1}
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(270deg, rgb(255, 255, 0), rgb(254, 98, 48))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            {short2}
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(0, 187, 0), rgb(0, 128, 0))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            {short3}
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgb(57, 78, 163), rgb(81, 92, 138))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            Nghị định 168/2024
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            padding: '0 60px 0 60px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '2',
            backgroundImage:
              'linear-gradient(180deg, rgb(255, 0, 0), rgb(254, 98, 48))',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          {detail1}
        </div>
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            padding: '0 60px 0 84px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '1',
            backgroundImage:
              'linear-gradient(0deg, rgb(255, 255, 0), rgb(254, 98, 48))',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          {detail2}
        </div>
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            padding: '0 60px 0 108px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '3',
            backgroundImage:
              'linear-gradient(180deg, rgb(0, 187, 0), rgb(0, 128, 0))',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            border: '1px',
          }}
        >
          {detail3}
        </div>
      </div>
    </div>
  )
}
