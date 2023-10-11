'use client';

import useMusicSource from '@/hooks/useMusicSource';
import useMusicPlayer from '@/hooks/useMusicPlayer';
import { useState } from 'react';
import { Button, Card, CardBody, Image, Progress, Spinner } from '@nextui-org/react';
import { HeartIcon } from '@/icons/HeartIcon';
import { RepeatOneIcon } from '@/icons/RepeatOneIcon';
import { PreviousIcon } from '@/icons/PreviousIcon';
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs';
import { NextIcon } from '@/icons/NextIcon';
import { ShuffleIcon } from '@/icons/SuffleIcon';

export default function Music({
  params,
}: {
  params: { categories: string; id: string };
}) {
  const { musicCover, downloadUrl } = useMusicSource(params.categories, params.id);
  const {  handleMusic,isPlaying} = useMusicPlayer(downloadUrl)
  const [liked, setLiked] = useState(false);

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 pt-12'>
      <Card
        isBlurred
        className='max-w-[500px] w-full border-none bg-background/60 dark:bg-default-100/50'
        shadow='sm'
      >
        <div className='relative col-span-6 md:col-span-4 p-5'>
          <Image
            alt='Album cover'
            className='object-cover'
            height={200}
            shadow='md'
            src={musicCover ?? '/gif/giphy.gif'}
            width='100%'
          />
        </div>
        <CardBody>
          <div className='grid grid-cols-6 items-center justify-center gap-6 md:grid-cols-12 md:gap-4'>
            <div className='col-span-6 flex flex-col md:col-span-12'>
              <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-0'>
                  <h3 className='font-semibold text-foreground/90'>Daily Mix</h3>
                  <p className='text-small text-foreground/80'>12 Tracks</p>
                  <h1 className='mt-2 text-large font-medium'>Frontend Radio</h1>
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
                  value={73}
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
                  disabled={downloadUrl === undefined}
                  variant='light'
                  onClick={handleMusic}
                >
                  {downloadUrl ? (
                    isPlaying ? (
                      <BsPauseCircleFill size={54} />
                    ) : (
                      <BsPlayCircleFill size={54} />
                    )
                  ) : (
                    <Spinner color='default' size='lg' />
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
    </div>
  );
}
