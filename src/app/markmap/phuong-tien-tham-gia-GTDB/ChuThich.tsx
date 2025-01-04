import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import './ChuThich.css'

export default function ChuThich() {
  return (
    <div className="absolute bottom-1 left-1">
      <Dialog>
        <DialogTrigger>
          <div className="border-2 hover:border-gray-500 rounded-md p-2 shadow-sm">
            <b>Chú thích</b>: * ** †
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chú thích</DialogTitle>
            <DialogDescription>
              <div className="flex">
                <div className="w-8">
                  <div className="font-bold">*</div>
                </div>
                <div className="text-left">
                  Trong tổ chức giao thông, <b>xe bán tải</b>, <b>xe tải van</b>
                  <div className="ml-4">
                    • ≥ <ins>950 kg</ins> được xem là xe ôtô tải.
                  </div>
                  <div className="ml-4">
                    • {'<'} <ins>950 kg</ins> được xem là xe ôtô con.
                  </div>
                  <div>
                    (khối lượng <ins>hàng chuyên chở</ins> cho phép tham gia
                    giao thông)
                  </div>
                </div>
              </div>
              <br />
              <div className="flex">
                <div className="w-8">
                  <div className="font-bold">**</div>
                </div>
                <div className="text-left">
                  Trong tổ chức giao thông, <b>xe (môtô) 3 bánh</b>
                  <div className="ml-4">
                    • {'>'} <ins>400 kg</ins> được xem là xe ôtô con.
                  </div>
                  <div className="ml-4">
                    • {'≤'} từ <ins>400 kg</ins> trở xuống được xem là xe môtô.
                  </div>
                  <div>
                    {' '}
                    (khối lượng <ins>bản thân</ins>)
                  </div>
                </div>
              </div>
              <br />
              <div className="flex">
                <div className="w-8">
                  <div className="font-bold">†</div>
                </div>
                <div className="text-left">
                  3 loại xe có từ <i>máy</i>:
                  <div className="ml-4">
                    • xe <i>máy</i> chuyên dùng
                  </div>
                  <div className="ml-4">
                    • xe <i>máy</i> (hay xe môtô)
                  </div>
                  <div className="ml-4">
                    • xe gắn <i>máy</i> (gồm xe <i>máy</i> điện)
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
