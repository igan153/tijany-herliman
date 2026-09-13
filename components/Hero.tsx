export default function Hero() {
  return (
    <div className="bg-[#0b0d12] text-white">
      <div className="relative isolate min-h-[70vh] px-6 pt-20 lg:px-8">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(88,90,125,0.20),_transparent_45%)]" />

        <div className="mx-auto max-w-5xl py-10 sm:py-16">
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-[#10141b]/90 px-6 py-10 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative">
                <div className="absolute -top-1 right-0 h-4 w-4 rounded-full border-2 border-[#10141b] bg-[#d7d7d7]" />
                <img
                  src="/img/profile.webp"
                  alt="igan profile"
                  className="h-32 w-32 rounded-full border-4 border-[#d6d8df] object-cover shadow-lg shadow-black/30 sm:h-36 sm:w-36"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-semibold sm:text-4xl">igan1203</h1>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs text-gray-200">◌</span>
                  </div>

                  <div className="text-lg text-gray-300">igan</div>

                  <div className="flex items-center gap-8 text-sm text-gray-300 sm:text-base">
                    <span><strong className="text-white">2</strong> posts</span>
                    <span><strong className="text-white">25</strong> followers</span>
                    <span><strong className="text-white">20</strong> following</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl bg-[#2b2f38] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#343b45]">
                Edit profile
              </button>
              <button className="rounded-xl bg-[#2b2f38] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#343b45]">
                View archive
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111821] p-2">
                <div className="flex h-44 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1d2b43,#151d2a)] text-4xl text-white/80">
                  <img src="/img/profile.webp" alt="volunteer" className="h-full w-full rounded-xl object-cover" />
                </div>
                <div className="mt-3 text-center text-sm text-gray-300">volunteer</div>
              </div>

              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/15 bg-[#111821] p-2 text-white/70">
                <div className="flex h-44 w-full items-center justify-center rounded-xl border border-white/10 bg-[#151b24] text-6xl">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
