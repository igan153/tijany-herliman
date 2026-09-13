import Image from 'next/image'

export default function Project() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">Projects</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Projects
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              alt="Project 1"
              src="/img/project.webp"
              width={800}
              height={640}
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              alt="Project 2"
              src="/img/2.png"
              width={800}
              height={640}
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              alt="Project 3"
              src="/img/3.jpg"
              width={800}
              height={640}
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
