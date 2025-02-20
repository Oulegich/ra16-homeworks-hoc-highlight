/// <reference types="vite/client" />

interface DateTimeProps {
    date: string
}

interface AllContent {
    type?: string,
    title?: string,
    url?: string,
    views: number
}

interface Video {
    type?: string,
    url?: string,
    views: number
}

interface Article {
    type?: string,
    title?: string,
    views: number
}