import type { Item, ContactLink, Hero, NavItem } from '../types'
import switzerland from '../assets/switzerland.jpg'


export const hobbies: Item[] = [
    {
        title: '漫画・アニメ',
        description: 'FAIRY TAIL、KINGDOM、NARUTO、86-エイティシックス-、ギルティクラウン',
    },
]

export const contactLinks: ContactLink[] = [
    {
        label: 'GitHub',
        url: 'https://github.com/sh0g0-tech',
    },
]

export const hero: Hero = {
    name: '中島祥伍',
    introduction: '駆け出しエンジニアです。新しい技術を学ぶのが楽しくて、React と TypeScript で、このサイトを一から作りました。好きなことも、載せています。',

}

export const places: Item[] = [
    {
        title: 'Switzerland',
        description: '雄大なアルプスの山々、透き通る湖、きれいな街並みなど自然がとにかく美しい国。また行きたい国の一つ',
        image: switzerland,
    },
]

export const recentlyWatched: Item[] = [
    {
        title: 'VIVANT',
        description: '話題になっていたので何気なく見始めたら、続きが気になって一気見したのがきっかけ'        
    },
    {
    title: 'ダウンタイム',
    description: '美への執着、人間の欲望、お金、業界の裏側など、色々なことを考えさせられる作品'
    },
]

export const navItems: NavItem[] = [
  { label: '趣味', href: '#hobbies' },
  { label: 'ハマっている物', href: '#recently-watched' },
  { label: '好きな場所', href: '#places' },
  { label: '連絡先', href: '#contact' },

]
