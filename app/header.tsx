'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
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
    </header>
  )
}
