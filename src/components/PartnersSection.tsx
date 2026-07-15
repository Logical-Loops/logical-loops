export default function PartnersSection() {
  return (
    <section className="py-24 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 font-extrabold text-4xl sm:text-5xl mb-3 tracking-tight">
            Trusted Partners
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
            Success begins with a single logical step.
          </p>
        </div>

        {/* Logos Row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 mb-12">
          
          {/* MITRA® */}
          <div className="text-gray-400 hover:text-gray-600 transition-colors duration-300 font-black italic text-xl sm:text-2xl tracking-tighter uppercase select-none cursor-default">
            MITRA®
          </div>

          {/* TECHOBITE */}
          <div className="text-gray-400 hover:text-gray-600 transition-colors duration-300 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase select-none cursor-default">
            TECHOBITE
          </div>

          {/* Jeelakarrabellam */}
          <div 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-xl sm:text-2xl select-none cursor-default"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.02em' }}
          >
            Jeelakarrabellam
          </div>

          {/* NATICOCO */}
          <div 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-base sm:text-lg tracking-[0.15em] select-none cursor-default"
            style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 400 }}
          >
            NATICOCO
          </div>

          {/* RiderBro */}
          <div className="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-base sm:text-lg select-none cursor-default tracking-tight">
            <span className="font-extrabold">Rider</span>
            <span className="font-normal text-gray-400">Bro</span>
          </div>

        </div>

        {/* Logos Row 2 */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">

          {/* jamburg */}
          <div 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-xl sm:text-2xl lowercase select-none cursor-default"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 400, letterSpacing: '0.02em' }}
          >
            jamburg
          </div>

          {/* DON COOK */}
          <div className="text-gray-400 hover:text-gray-600 transition-colors duration-300 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase select-none cursor-default">
            DON COOK
          </div>

          {/* MAKSIP */}
          <div className="text-gray-400 hover:text-gray-600 transition-colors duration-300 font-semibold tracking-[0.12em] text-sm sm:text-base uppercase select-none cursor-default">
            MAKSIP
          </div>

          {/* LOOLOCK */}
          <div className="text-gray-400 hover:text-gray-600 transition-colors duration-300 font-extrabold tracking-tighter text-lg sm:text-xl uppercase select-none cursor-default">
            LOOLOCK
          </div>

        </div>
      </div>
    </section>
  );
}