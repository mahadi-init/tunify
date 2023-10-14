'use client';

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Avatar,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import '../../css/navbar.css';
import { SearchIcon } from '@/icons/SearchIcon';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const items = [
    {
      text: 'Favorites',
      url: '/pages/profile/favorites',
    },
    {
      text: 'Bengali',
      url: '/pages/musics/bengali',
    },
    {
      text: 'Pop',
      url: '/pages/musics/pop',
    },
    {
      text: 'Remix',
      url: '/pages/musics/remix',
    },
    {
      text: "Editor's Choice",
      url: '/pages/musics/editors_choice',
    },
  ];

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <Link href={'/'} className='flex items-center'>
          <Image
            src={'/images/app-logo.png'}
            width={36}
            height={36}
            alt='logo'
          />
          <p className='pl-0.5 font-bold text-inherit'>Tunify</p>
        </Link>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        {items.map((item, index) => {
          return (
            <NavbarItem
              key={index}
              className={
                pathname === item.url ? 'font-medium text-blue-500' : ''
              }
            >
              <Link href={item.url}>{item.text}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify='end'>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={
            <SearchIcon size={18} width={undefined} height={undefined} />
          }
          type='search'
        />
        <NavbarItem className='hidden md:block'>
          <Link href='/pages/profile'>
            <Avatar
              isBordered
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='mt-2'>
        {items.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className={pathname === item.url ? 'font-medium text-blue-500' : ''}
          >
            <Link className='w-full' href={item.url}>
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem
          className={
            pathname === '/pages/profile' ? 'font-medium text-blue-500' : ''
          }
        >
          <Link className='w-full' href={'/pages/profile'}>
            Profile
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
