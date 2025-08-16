import React from "react"

interface IPhoneFrameProps {
  children: React.ReactNode
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="hidden md:block mx-auto max-w-sm">
      <div className="relative mx-auto">
        {/* Top Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>

        {/* Main Frame */}
        <div className="relative bg-black rounded-[3rem] p-1.5 shadow-2xl">
          {/* Screen */}
          <div className="bg-background rounded-[2.5rem] overflow-hidden h-[812px]">
            <div className="h-full overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
