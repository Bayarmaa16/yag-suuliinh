import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Table_interface() {
  return (
    <div className="">

      <div className='flex justify-between w-full py-4'>
        <form className="max-w-md">
          <label htmlFor="default-search" className="mb-1 text-sm font-medium text-gray-900 sr-only">Хайх</label>
          <div className="relative">
            <input type="search" className="block w-full p-3 ps-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500" placeholder="Хайх ..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-0.5 focus:outline-none font-medium rounded-lg text-sm px-3 py-3">
              <div className="w-full">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </button>
          </div>
        </form>
        <div className="max-w-md">
          <button type="button" className="text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Нэмэх</button>
        </div>
      </div>

      <div className="w-full text-sm text-left rtl:text-right text-gray-500">
        <div className="text-xs text-gray-700 uppercase bg-gray-50">
          <div className='grid grid-cols-13 text-center font-bold'>
            <div className="col-span-1 px-4 py-3">ID</div>
            <div className="col-span-1 px-6 py-3">Ангилал</div>
            <div className="col-span-2 px-6 py-3">Асуудлын нэр</div>
            <div className="col-span-2 px-6 py-3"> Тайлбар </div>
            <div className="col-span-2 px-6 py-3"> Өгөгдөл/Таамаглал </div>
            <div className="col-span-2 px-6 py-3"> Тоон нөлөөлөл</div>
            <div className="col-span-1 px-6 py-3"> Чанарын нөлөөлөл </div>
            <div className="col-span-1 px-6 py-3"> Зэрэглэл </div>
            <div className="col-span-1 px-6 py-3"> Явц </div>
            <div className="col-span-1 px-6 py-3">   </div>
          </div>
        </div>

        <div>
          <div className="bg-white border-b grid grid-cols-13">
            <div className="px-6 py-2 font-medium text-gray-900 col-span-1 whitespace-normal">
              001
            </div>
            <div className="px-6 py-2 font-medium text-gray-900 col-span-1 whitespace-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="px-6 py-2 font-medium text-gray-900 col-span-2 whitespace-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className="px-6 py-2 font-medium text-gray-900 col-span-2 whitespace-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className="px-6 py-2 font-medium text-gray-900 col-span-2 whitespace-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="px-6 py-2 font-medium text-gray-900 col-span-2 whitespace-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
            <div className="px-6 py-4 font-medium text-gray-900 col-span-1 whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="px-6 py-4 font-medium text-gray-900 col-span-1 whitespace-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className="px-6 py-4 font-medium text-gray-900 col-span-1 whitespace-normal">
              haha
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}