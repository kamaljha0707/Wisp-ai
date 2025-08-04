import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1F2937] text-white h-full w-full z-10'>
     <div className="mx-auto pt-32 md:pt-48 lg:pt-96 px-4 sm:px-6 lg:px-8 pb-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
    {/* Logo/Brand - Now spans full width on mobile */}
    <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start justify-center py-3 leading-none">
      <span className="text-4xl sm:text-5xl md:text-5xl cursor-pointer font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#35465d] drop-shadow-md">
        Wisp.ai
      </span>
    </div>

    {/* Footer Columns */}
 <div className="space-y-3 sm:space-y-4">
  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">PRODUCT</h3>
  <ul className="space-y-1 sm:space-y-2">
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Smart Inbox</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Voice-Based Replies</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Auto Summaries</a></li>
  </ul>
</div>

<div className="space-y-3 sm:space-y-4">
  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Integrations</h3>
  <ul className="space-y-1 sm:space-y-2">
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Google Meet & Zoom</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Gmail & Outlook</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Notion & Slack</a></li>
  </ul>
</div>

<div className="space-y-3 sm:space-y-4">
  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Features</h3>
  <ul className="space-y-1 sm:space-y-2">
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Meeting Recorder</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Multilingual Support</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Custom AI Voice</a></li>
  </ul>
</div>

<div className="space-y-3 sm:space-y-4">
  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Success stories</h3>
  <ul className="space-y-1 sm:space-y-2">
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Productivity Wins</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">User Testimonials</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Growth with AI</a></li>
  </ul>
</div>

<div className="space-y-3 sm:space-y-4">
  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Pricing</h3>
  <ul className="space-y-1 sm:space-y-2">
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Free Plan</a></li>
    <li><a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Premium Features</a></li>
  </ul>
</div>

  </div>

  {/* Bottom section */}
  <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
    <div className="text-xs sm:text-sm text-gray-500">
      Copyright © Wispai 2025
    </div>

    <div className="mt-3 sm:mt-4 md:mt-0 grid grid-cols-2 md:flex gap-3 sm:gap-4 md:gap-6 lg:gap-8">
      <a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Documentation</a>
      <a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">FAQ</a>
      <a href="#" className="text-xs sm:text-sm hover:text-[#C084FC]">Disclaimer</a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer