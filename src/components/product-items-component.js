export default function ProductItemsComponent(item) {
  const { images = [], name = "", price, originalPrice, rate, promotion } = item;
  return (
    <div className="flex">
      <img src={images} className="border" />
      <div>
        <div>{name}</div>
        <div>{rate}</div>
        <div className="flex">
          <div>{price}</div>
          <div>{originalPrice}</div>
        </div>
        <div>ƯU ĐÃI</div>
        <div>{promotion}</div>
        <div>
          ÁP DỤNG CHO ĐƠN HÀNG ĐẶT TRƯỚC. GỌI NGAY: <div>0848911111</div>
        </div>
      </div>
    </div>
  );
}
