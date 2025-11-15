import React from 'react';

interface LoveMessageProps {
  show: boolean;
}

const LoveMessage = ({ show }: LoveMessageProps) => {
  return (
    <section className="bg-rose-50/50 p-6 rounded-lg shadow-inner w-full flex flex-col justify-center transition-all duration-500">
      {show ? (
        <>
          <h1 className="font-dancing text-3xl sm:text-4xl font-bold text-rose-800 tracking-wide text-center animate-reveal-text">
            Chúc Mừng Sinh Nhật, Tình Yêu Ơi
          </h1>
          <div className="text-gray-700 max-w-none font-dancing text-lg md:text-xl space-y-4 leading-relaxed mt-4">
            <p className="animate-reveal-text" style={{ animationDelay: '0.5s' }}>
              Gửi người thương dấu yêu,
            </p>
            <p className="animate-reveal-text" style={{ animationDelay: '1.5s' }}>
              Vào ngày đặc biệt này, thế giới tỏa sáng hơn vì có bạn. Mỗi khoảnh khắc bên nhau là một giấc mơ tuyệt đẹp.
            </p>
            <p className="animate-reveal-text" style={{ animationDelay: '2.5s' }}>
              Chúc mừng sinh nhật người bạn tri kỷ tuyệt vời của tôi. Yêu bạn nhiều hơn lời nói có thể diễn tả.
            </p>
            <p className="text-right animate-reveal-text" style={{ animationDelay: '3.5s' }}>
              Mãi mãi về sau, <br/>
              Người tri kỷ yêu thương của bạn.
            </p>
          </div>
        </>
      ) : (
        <div className="text-center animate-fade-in-up">
          <h1 className="font-dancing text-3xl sm:text-4xl font-bold text-rose-800 tracking-wide">
            Lời Chúc Đặc Biệt Gửi Tình Yêu
          </h1>
        </div>
      )}
    </section>
  );
};

export default LoveMessage;