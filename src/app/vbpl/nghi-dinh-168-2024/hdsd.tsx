import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CircleHelp } from 'lucide-react'
import Image from 'next/image'

export default function NghiDinh168HDSD() {
  return (
    <div className="fixed bottom-2 right-2 flex z-20">
      <Dialog>
        <DialogTrigger>
          <div className="border-2 bg-white opacity-100 hover:border-gray rounded-md p-2 shadow-sm">
            <CircleHelp color="black" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hướng dẫn sử dụng</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <div className="font-bold">
                    1. Phần tóm tắt (sơ đồ tư duy)
                  </div>
                  <div className="mx-4">
                    <div className="relative aspect-video w-full">
                      <Image
                        fill
                        src="/assets/nghi-dinh-168/nghi-dinh-168-mind-map.png"
                        alt="Tóm tắt - Sơ đồ tư duy"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    - Có thể tương tác: phóng to, thu nhỏ, ẩn/hiện các mục...
                  </div>
                  <div className="ml-4">
                    - Bấm vào Chương/Mục/Điều để đến phần đó.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">
                    2. Đến Chương/Mục/Điều cụ thể:
                  </div>
                  <div className="ml-4">
                    - Bấm vào Chương/Mục/Điều trong sơ đồ tư duy.
                  </div>
                  <div className="ml-7">
                    VD: Chương I, Mục 1 (Chương II), Điều 6
                  </div>
                  <div className="ml-3">- Sử dụng mục lục.</div>
                  <div className="ml-7 mr-4">
                    <div className="relative aspect-[288/97] w-full">
                      <Image
                        fill
                        src="/assets/nghi-dinh-168/nghi-dinh-168-muc-luc.png"
                        className="h-full object-contain object-bottom mb-1"
                        alt="Mục lục"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">
                    3. Chia sẻ link đến Chuơng/mục/Điều/khoản/điểm
                  </div>
                  <div className="ml-4">
                    - Bước 1: Bấm vào nội dung Chuơng/mục/Điều/khoản/điểm cần
                    chia sẻ để hiện biểu tượng chia sẻ.
                  </div>
                  <div className="ml-7 mr-4">
                    <div className="relative aspect-[289/55] w-full">
                      <Image
                        fill
                        src="/assets/nghi-dinh-168/nghi-dinh-168-chia-se.png"
                        className="h-full object-contain object-bottom mb-1"
                        alt="Chia sẻ"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    - Bước 2: Bấm vào biểu tượng chia sẻ để sao chép link đến
                    đó.
                  </div>
                  <div className="ml-7 mr-4">
                    <div className="relative aspect-[289/81] w-full">
                      <Image
                        fill
                        src="/assets/nghi-dinh-168/nghi-dinh-168-chia-se-da-sao-chep.png"
                        alt="Chia sẻ - Đã sao chép"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    - Bước 3: Gửi link cho bạn bè (Trước khi bấm Gửi nhớ chờ một
                    chút để hình ảnh xem trước được tải về)
                  </div>
                  <div className="ml-7 mr-4">
                    <div className="relative aspect-video w-full">
                      <Image
                        fill
                        src="/assets/nghi-dinh-168/nghi-dinh-168-chia-se-preview.png"
                        alt="Chia sẻ - Xem trước"
                      />
                    </div>
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
