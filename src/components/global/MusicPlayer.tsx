import React from 'react';
import { Card, CardBody, Image, Button, Progress } from '@nextui-org/react';
import { HeartIcon } from '@/icons/HeartIcon';
import { RepeatOneIcon } from '@/icons/RepeatOneIcon';
import { PreviousIcon } from '@/icons/PreviousIcon';
import { NextIcon } from '@/icons/NextIcon';
import { ShuffleIcon } from '@/icons/SuffleIcon';
import useMusicPlayer from '@/hooks/useMusicPlayer';
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs';

export default function MusicPlayer() {
  const { musicInfo, isMusicPlaying, handleMusic } = useMusicPlayer();
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className='max-w-[610px] border-none bg-background/60 dark:bg-default-100/50'
      shadow='sm'
    >
      <CardBody>
        <div className='grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4'>
          <div className='relative col-span-6 md:col-span-4'>
            <Image
              alt='Album cover'
              className='object-cover'
              height={200}
              shadow='md'
              src={musicInfo?.cover}
              width='100%'
            />
          </div>

          <div className='col-span-6 flex flex-col md:col-span-8'>
            <div className='flex items-start justify-between'>
              <div className='flex flex-col gap-0'>
                <h3 className='font-semibold text-foreground/90'>
                  {musicInfo?.data.author}
                </h3>
                <p className='text-small text-foreground/80'>
                  {musicInfo?.data.category}
                </p>
                <h1 className='mt-2 text-large font-medium'>
                  {musicInfo?.data.name}
                </h1>
              </div>
              <Button
                isIconOnly
                className='-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? '[&>path]:stroke-transparent' : ''}
                  fill={liked ? 'currentColor' : 'none'}
                />
              </Button>
            </div>

            <div className='mt-3 flex flex-col gap-1'>
              <Progress
                aria-label='Music progress'
                classNames={{
                  indicator: 'bg-default-800 dark:bg-white',
                  track: 'bg-default-500/30',
                }}
                color='default'
                size='sm'
                value={33}
              />
              <div className='flex justify-between'>
                <p className='text-small'>1:23</p>
                <p className='text-small text-foreground/50'>4:32</p>
              </div>
            </div>

            <div className='flex w-full items-center justify-center'>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <RepeatOneIcon className='text-foreground/80' />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className='h-auto w-auto data-[hover]:bg-foreground/10'
                radius='full'
                disabled={musicInfo === null || musicInfo === undefined}
                variant='light'
                onClick={handleMusic}
              >
                {isMusicPlaying ? (
                  <BsPauseCircleFill size={54} />
                ) : (
                  <BsPlayCircleFill size={54} />
                )}
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <ShuffleIcon className='text-foreground/80' />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
