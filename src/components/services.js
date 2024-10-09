import ServicesComponent from "./services-component";

export default function Services() {
  return (
    <div className="bg-[#000000] w-full">
      <div className="text-white text-center py-8 underline underline-offset-8 decoration-[#03BE1CFF]">Dịch vụ</div>
      <div className="text-white text-center text-4xl font-bold">CÁC DỊCH VỤ TẠI CỬA HÀNG</div>
      <div className="text-white text-center py-4">
        Kính mời quý khách tham khảo một số dịch vụ đang được phục vụ tại hệ
        thống G7AUTO
      </div>
      <ServicesComponent />
    </div>
  );
}
