import { getCategoryIcon } from '@/lib/icons'
import type { LucideIcon } from 'lucide-react'

interface CategoryIconProps {
  category: string
  size?: number
  className?: string
}

export default function CategoryIcon({ category, size = 24, className = '' }: CategoryIconProps) {
  const Icon = getCategoryIcon(category)
  return <Icon className={className} style={{ width: size, height: size }} />
}
