import { CreditCard, Landmark, PiggyBank, BarChart3, Home, TrendingUp, Calculator, Building2, Wrench, Lightbulb, Shield, CheckCircle2, XCircle, AlertTriangle, Trophy, Target, Star, Coins, BarChart, Plane, Car, Umbrella, Brain, RefreshCw, Timer, ShoppingBag, Tag, Utensils, Monitor, Smartphone, Dumbbell, Leaf, Wheat, Sprout, TrendingDown, Rocket, Scale, HelpCircle, PartyPopper, Newspaper, Banknote, Settings, Search, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  kredittkort: CreditCard,
  lan: Landmark,
  sparing: PiggyBank,
  budsjett: BarChart3,
  bank: Building2,
  verktøy: Wrench,
  boliglan: Home,
}

export const TOOL_ICONS: Record<string, LucideIcon> = {
  'boliglånskalkulator': Home,
  'høyrentekonto-sammenligning': TrendingUp,
  'sparekalkulator': PiggyBank,
  'forbrukslånskalkulator': Calculator,
  'budsjettmal': BarChart3,
}

export const ARTICLE_ICONS: Record<string, LucideIcon> = {
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'home': Home,
  'coins': Coins,
  'calculator': Calculator,
  'bar-chart': BarChart3,
  'credit-card': CreditCard,
  'shield': Shield,
  'trophy': Trophy,
  'target': Target,
  'star': Star,
  'lightbulb': Lightbulb,
  'alert-triangle': AlertTriangle,
  'rocket': Rocket,
  'scale': Scale,
  'help-circle': HelpCircle,
  'check-circle': CheckCircle2,
  'x-circle': XCircle,
  'plane': Plane,
  'car': Car,
  'umbrella': Umbrella,
  'brain': Brain,
  'refresh-cw': RefreshCw,
  'timer': Timer,
  'shopping-bag': ShoppingBag,
  'tag': Tag,
  'utensils': Utensils,
  'monitor': Monitor,
  'smartphone': Smartphone,
  'dumbbell': Dumbbell,
  'leaf': Leaf,
  'wheat': Wheat,
  'sprout': Sprout,
  'party-popper': PartyPopper,
  'newspaper': Newspaper,
  'banknote': Banknote,
  'settings': Settings,
  'search': Search,
  'clock': Clock,
}

export function getCategoryIcon(category: string): LucideIcon {
  return CATEGORY_ICONS[category.toLowerCase()] || Building2
}

export function getToolIcon(tool: string): LucideIcon {
  return TOOL_ICONS[tool.toLowerCase()] || Wrench
}

export function getArticleIcon(iconName: string): LucideIcon {
  return ARTICLE_ICONS[iconName] || Lightbulb
}
