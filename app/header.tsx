'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0">
          <Image
            src="/profile-photo.png"
            alt="Gurmeher Bhasin"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <Link href="/" className="text-xl font-semibold text-black dark:text-white">
            Gurmeher Bhasin
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-lg text-zinc-600 dark:text-zinc-300"
            delay={0.5}
          >
            Computer Science, Data Science @ UC Berkeley
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
