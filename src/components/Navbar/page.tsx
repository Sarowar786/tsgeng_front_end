'use client'
import { Button } from '../ui/button'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
    const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const navItem = [
    { title:"Home", link:"/"},
    { title:"Services", link:"/services"},
    { title:"Blog", link:"/blog"},
    { title:"Contact", link:"/contact"},
  ]
  return (
    <div className='bg-white text-brand-primary h-18 '>
      <div className='container mx-auto py-4  flex items-center justify-between'>
        <div>
          <Link href={'/'}>
            <Image src={logo} alt="logo"  width={93} height={35}/>
          </Link>
        </div>
        <div>
          <div className='flex items-center gap-5 justify-center text-brand-primary text-[16px] font-normal'>
          {navItem.map((item, index) => (
            
            <Link key={index} href={item.link} className={`${isActive(item.link)? "text-primary" : "" }`}>
              {item.title}
            </Link>
          ))}
        </div>
        </div>
        <div className='flex gap-4'>
          <Button className='bg-primary text-white  border-brand-primary hover:bg-primary hover:text-white duration-300 font-normal text-[16px] rounded-xl hover:border-none cursor-pointer h-10'>Request a Quote</Button>
          <Button className='bg-transparent text-brand-primary border border-brand-primary hover:bg-primary hover:text-white duration-300 font-mormal text-[16px] rounded-xl hover:border-primary cursor-pointer h-10'>Login</Button>
        </div>
      </div>
    </div>
  )
}
