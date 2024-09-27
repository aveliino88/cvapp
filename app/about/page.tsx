import { Metadata } from 'next';
import AnimatedAboutContent from '@/components/AnimatedAboutContent';
export const metadata: Metadata = {
  title: 'About | Your Name - Next.js Developer',
  description: 'Learn about my skills and experience as a Next.js developer specializing in modern web applications.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedAboutContent />
    </div>
  );
}