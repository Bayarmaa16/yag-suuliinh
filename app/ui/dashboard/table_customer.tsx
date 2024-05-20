import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Table_interface() {
  return (
    <div>

      <div className="w-full text-sm text-left rtl:text-right text-gray-500">
        <div className="text-xs text-gray-700 uppercase bg-gray-50">
          <div className='grid grid-cols-10 text-center font-bold'>
            <div className="col-span-1 px-4 py-3">ID</div>
            <div className="col-span-2 px-6 py-3">Асуудлын нэр</div>
            <div className="col-span-2 px-6 py-3"> Төрөл </div>
            <div className="col-span-2 px-6 py-3"> Шйидэл </div>
            <div className="col-span-2 px-6 py-3"> Хариуцах алба </div>
            <div className="col-span-1 px-6 py-3"> Хариуцах ажилтан </div>
          </div>
        </div>

        <div>
          <div className="bg-white border-b grid grid-cols-10">
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
          </div>
        </div>
      </div>
    </div>

  );
}