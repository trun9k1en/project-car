import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const arrayServices = [
  {
    name: "Căn chỉnh thước lái",
    icon: "/image_service1.webp",
    hrl: "/",
  },
  {
    name: "Dán phim cách nhiệt",
    icon: "/image_service2.webp",
    hrl: "/",
  },
  {
    name: "Vệ sinh nội ngoại thất",
    icon: "/image_service3.webp",
    hrl: "/",
  },
  {
    name: "Bảo hiểm TNDS ô tô",
    icon: "/image_service4.webp",
    hrl: "/",
  },
  {
    name: "Dán thẻ, thu phí VETC",
    icon: "/image_service5.webp",
    hrl: "/",
  },
  {
    name: "Ép biển số tại nhà",
    icon: "/image_service6.webp",
    hrl: "/",
  },
];
export default function ServicesComponent() {
  return (
    <div className="grid grid-rows-2 grid-flow-col justify-center">
      {arrayServices.map((m) => (
        <div className="border w-[400px] h-[220px] grid pt-8">
          <img src={m.icon} className="justify-self-center" />
          <div className="text-lg font-bold text-white text-center">{m.name}</div>
          <div className="flex justify-center ">
            <div className="text-white hover:text-[#03BE1CFF]">Xem thêm</div>
            <ArrowForwardIcon sx={{ color: "#FFFFFF" }} />
          </div>
          
        </div>
      ))}
    </div>
  );
}
