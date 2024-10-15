"use client"
import '../app/globals.css'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HandymanIcon from "@mui/icons-material/Handyman";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function HeaderComponent() {
 /* const [search, setSearch] = useState('');
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(search.toLowerCase())
); */
  return (
    <div className="flex items-center justify-between w-full px-16">
      <img src="/logo.png" className="col-span-4 w-[280px] h-[80px]"/>
      <div className="span-8">
        <div className="flex">
          <div className="flex">
            <SupportAgentIcon sx={{ fontSize: 40, color: "#99FF00" }} />
            <div className="ml-1">
              <div className="font-bold">Tư vấn chuyên sâu:</div>
              <div className="flex text-sm">
                Hotline: 
                <div className="text-[#03BE1CFF] font-bold ml-1">0848911111</div>
              </div>
            </div>
          </div>
          <div className="flex ml-4">
            <HandymanIcon sx={{ fontSize: 40, color: "#99FF00" }} />
            <div className="ml-1">
              <div className="font-bold">Sản phẩm chính hãng:</div>
              <div className="text-sm">Bảo hành điện tử, chống hàng giả</div>
            </div>
          </div>
          <div className="flex ml-4">
            <WorkspacePremiumIcon sx={{ fontSize: 40, color: "#99FF00" }} />
            <div className="ml-1">
              <div className="font-bold">Hệ thống cửa hàng lớn:</div>
              <div className="text-sm">Giá tốt, dịch vụ đảm bảo</div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
            <input
              id="default-input"
              className="w-[700px] h-[40px] p-2 pl-4 forcus:bg-gray-50 border"
              placeholder="Tìm mọi thứ ở đây..."
            />
            <SearchIcon sx={{ fontSize: 39, color: "#FFFFFF" }} className="bg-[#03BE1CFF]" />
          </div>
      </div>
      <button className="flex justify-content-center">
        <ShoppingCartIcon sx={{ fontSize: 40, color: "#99FF00" }} />
        <div className="ml-1">
          <div className="font-bold">Giỏ hàng:</div>
          <div>Sản phẩm</div>
        </div>
      </button>
    </div>
  );
}
