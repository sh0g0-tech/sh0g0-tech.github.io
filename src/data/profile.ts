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
    introduction: '⚪︎⚪︎××です。よろしくお願いします。',

}

export const places: Item[] = [
    {
        title: 'Switzerland',
        description: 'スイスは、アルプス山脈に囲まれた美しい国で、自然の景観や文化が豊かです。特に、チーズやチョコレート、時計などの製品で有名です。愛の不時着の聖地巡礼してきました！見てないけど、、、',
　　　　　image: switzerland,
    },
]

export const recentlyWatched: Item[] = [
    {
        title: 'ドラマ　VIVANT',
        description: '最近出演者がテレビによく出ているので、気になって見始めたらハマっちゃった'
        
    }
]

export const navItems: NavItem[] = [
  { label: '趣味', href: '#hobbies' },
  { label: 'ハマっている物', href: '#recently-watched' },
  { label: '好きな場所', href: '#places' },
  { label: '連絡先', href: '#contact' },

]
