// app/contact/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me | Your Site Name',
  description: 'Get in touch with us through our contact form.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}