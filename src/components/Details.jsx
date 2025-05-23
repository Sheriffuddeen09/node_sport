
export default function SidebarDetails({handleView, view}) {
  
  return (
    <div className="w-full text-sm text-gray-800 flex justify-between items-center">
      {/* Tabs */}
      <div className="flex translate-y-3 mb-0.5">
        <div onClick={() => handleView(1)} className={`inline-flex items-center gap-2 px-3 py-1 font-medium text-gray-500 cursor-pointer z-10  ${view === 1 ? 'text-blue-600 border-b-2 z-10 border-blue-600' : 'hover:bg-gray-200'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 font-bold text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

            <p>Copilot</p>
        </div>
        <div onClick={() => handleView(2)}  className={`px-3 py-1 font-medium text-gray-500 cursor-pointer  z-10 ${view === 2 ? 'text-blue-600 border-b-2 z-10  border-blue-600' : 'hover:bg-gray-200'}`}>
          Details
        </div>
      </div>
    <div className="inline-flex items-center md:-translate-x-10 lg:translate-x-0 -translate-x-10 gap-4 mt-5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 rounded rotate-90 hover:bg-gray-200 p-1 ${view ===2 ? 'block' : 'hidden'}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 rounded rotate-90 hover:bg-gray-200 p-1 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
</svg>
</div>
    </div>
  );
}
