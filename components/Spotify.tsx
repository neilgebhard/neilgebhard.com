import { useEffect } from 'react'
import useSWR from 'swr'
import { animate } from 'motion'
import fetcher from '../lib/fetcher'
import { SpotifySong } from '../lib/types'
import { SiSpotify } from 'react-icons/si'

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    )
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    )
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    )
  }, [])

  return (
    <div className="flex w-auto items-end overflow-hidden">
      <span
        id="bar1"
        className="mr-[3px] h-2 w-1 bg-gray-400 opacity-75 dark:bg-gray-500"
      />
      <span
        id="bar2"
        className="mr-[3px] h-1 w-1 bg-gray-400 dark:bg-gray-500"
      />
      <span
        id="bar3"
        className="h-3 w-1 bg-gray-400 opacity-80 dark:bg-gray-500"
      />
    </div>
  )
}

export default function Spotify() {
  const { data } = useSWR<SpotifySong>('/api/now-playing', fetcher)

  return (
    <>
      {data?.songUrl ? (
        <div className="flex items-center gap-3">
          <AnimatedBars />{' '}
          <a
            className="text-inherit no-underline hover:underline"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data?.artist ?? 'Spotify'} - {data.title}
          </a>
        </div>
      ) : (
        <div className="mute flex items-center justify-center gap-2 sm:justify-start">
          <SiSpotify /> Spotify - Not active
        </div>
      )}
    </>
  )
}
