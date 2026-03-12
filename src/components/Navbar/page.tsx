'use client'
import { Button } from '../ui/button'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { TableOfContents } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const router = useRouter();
  const navItem = [
    { title: "Home", link: "/" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <div className='bg-white text-brand-primary h-18'>
      <div className='max-w-7xl mx-auto py-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={93} height={35} />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-5'>
          {navItem.map((item, index) => (
            <Link key={index} href={item.link} className={`${isActive(item.link) ? "text-primary" : ""} text-[16px] font-normal`}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button className='text-brand-primary bg-transparent hover:bg-primary hover:text-white duration-300'>
                <TableOfContents />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className='p-4'>
              <div className='flex flex-col gap-4'>
                {navItem.map((item, index) => (
                  <Link key={index} href={item.link} className={`text-[16px] font-normal ${isActive(item.link) ? "text-primary" : ""}`}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className='mt-6 flex flex-col gap-4'>
                <Button onClick={()=>{router.push('/requestquote')}} className='bg-primary text-white border-brand-primary hover:bg-primary hover:text-white duration-300 font-normal text-[16px] rounded-xl hover:border-none cursor-pointer h-10'>
                  Request a Quote
                </Button>
                <Button className='bg-transparent text-brand-primary border border-brand-primary hover:bg-primary hover:text-white duration-300 font-normal text-[16px] rounded-xl hover:border-primary cursor-pointer h-10'>
                  Admin Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Button */}
        <div className='hidden lg:flex gap-4'>
          <Button onClick={()=>{router.push('/requestquote')}} className='bg-primary text-white border-brand-primary hover:bg-primary hover:text-white duration-300 font-normal text-[16px] rounded-xl hover:border-none cursor-pointer h-10'>
            Request a Quote
          </Button>
          <Button onClick={()=>{router.push('/login')}} className='bg-transparent text-brand-primary border border-brand-primary hover:bg-primary hover:text-white duration-300 font-normal text-[16px] rounded-xl hover:border-primary cursor-pointer h-10'>
            Admin Login
          </Button>
        </div>
      </div>
    </div>
  );
}