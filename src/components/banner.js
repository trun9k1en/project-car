
export default function Banner()  {
    return(
        <div className="flex w-full bg-[url('/slider_1.webp')] bg-cover h-[500px] relative">
            <div className="w-[500px] h-[345px] backdrop-brightness-75 text-center absolute left-20 top-20">
                <div className="text-white text-3xl font-bold py-8">ẮC QUY & LỐP CHO XẾ YÊU</div>
                <div className="flex justify-center">
                    <div className="font-bold text-xl text-white w-[220px] text-center py-2 bg-[#00783A]">Ắc quy</div>
                    <div className="bg-[#FFFFFF] font-bold text-xl w-[220px] text-center py-2">Lốp</div>
                </div>
            </div>
        </div>
    )
}