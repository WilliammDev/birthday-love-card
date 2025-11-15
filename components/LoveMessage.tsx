import React from 'react';

interface LoveMessageProps {
  show: boolean;
}

const LoveMessage = ({ show }: LoveMessageProps) => {
  return (
    <section className="bg-rose-50/50 p-4 rounded-lg shadow-inner w-full flex flex-col justify-center">
      {/* Initial Title State */}
      <div
        className={`text-center overflow-hidden transition-all duration-700 ease-out ${
          show ? 'max-h-0 opacity-0' : 'max-h-[100px] opacity-100'
        }`}
        aria-hidden={show}
      >
        <h1 className="font-dancing text-3xl sm:text-3xl font-bold text-rose-800 tracking-wide">
          Lời Chúc Đặc Biệt Gửi Tình Yêu
        </h1>
      </div>

      {/* Revealed Message State */}
      <div
        className={`overflow-hidden transition-all duration-[1200ms] ease-out ${
          show ? 'max-h-[500px]' : 'max-h-0'
        }`}
        aria-hidden={!show}
      >
        {/* Wrapper to fade in content AFTER container expands */}
        <div className={show ? 'animate-fade-in-content' : 'invisible'}>
          <h1 className="font-dancing text-3xl sm:text-3xl font-bold text-rose-800 tracking-wide text-center animate-reveal-text" style={{ animationDelay: '0.5s' }}>
            Chúc Mừng Sinh Nhật, Tình Yêu Ơi
          </h1>
          <div className="text-gray-700 max-w-none font-dancing text-lg space-y-2 leading-relaxed mt-2">
            <p className="animate-reveal-text" style={{ animationDelay: '1.3s' }}>
              Gửi người thương dấu yêu,
            </p>
            <p className="animate-reveal-text" style={{ animationDelay: '2.1s' }}>
              Vào ngày đặc biệt này, thế giới tỏa sáng hơn vì có bạn. Mỗi khoảnh khắc bên nhau là một giấc mơ tuyệt đẹp.
            </p>
            <p className="animate-reveal-text" style={{ animationDelay: '2.9s' }}>
              Chúc mừng sinh nhật người bạn tri kỷ tuyệt vời của tôi. Yêu bạn nhiều hơn lời nói có thể diễn tả.
            </p>
            <p className="text-right animate-reveal-text" style={{ animationDelay: '3.7s' }}>
              Mãi mãi về sau, <br/>
              Người tri kỷ yêu thương của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;