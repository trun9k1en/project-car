export default function ItemHeader(props) {
  const { title, value ,type} = props;
  return (
    <div className={`flex flex-col px-6 py-2 border rounded h-[80px] justify-center mr-4 ${type == 0 ? "bg-orange-200" :type ==1 ?"bg-amber-200" :"bg-lime-200"}`}>
      <div className="flex flex-row justify-between">
        <div className="font-bold text-base mr-2">{title}</div>
        <div className=" text-lime-600">(30%)</div>
      </div>
      <div className="font-normal text-sm">{value} Sản phẩm</div>
    </div>
  );
}
