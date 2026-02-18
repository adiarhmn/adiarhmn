export interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    image?: string
    readTime: string
    tags: string[]
}

export interface BlogPostContent extends BlogPost {
    content: string
}

export const categories = [
    { id: 'web-dev', icon: 'globe' },
    { id: 'mobile', icon: 'smartphone' },
    { id: 'backend', icon: 'server' },
    { id: 'tips', icon: 'lightbulb' },
]

export const categoryLabels: Record<string, Record<string, string>> = {
    'web-dev': { en: 'Web Development', id: 'Pengembangan Web' },
    mobile: { en: 'Mobile Development', id: 'Pengembangan Mobile' },
    backend: { en: 'Backend', id: 'Backend' },
    tips: { en: 'Tips & Tricks', id: 'Tips & Trik' },
}

interface PostJsonData {
    id: string
    en: BlogPostContent
    id_ID: BlogPostContent
}

const posts = import.meta.glob<{ default: PostJsonData }>(
    './posts/*/content.json',
    { eager: true }
)

function extractPostData(postContent: BlogPostContent, id: string): BlogPost {
    return {
        id,
        slug: postContent.slug,
        title: postContent.title,
        excerpt: postContent.excerpt,
        date: postContent.date,
        category: postContent.category,
        readTime: postContent.readTime,
        tags: postContent.tags,
    }
}

export function getAllBlogPosts(lang: 'en' | 'id'): BlogPost[] {
    const blogPosts: BlogPost[] = []
    
    for (const path in posts) {
        const post = posts[path].default
        const langKey = lang === 'id' ? 'id_ID' : 'en'
        const postData = post[langKey as 'en' | 'id_ID']
        blogPosts.push(extractPostData(postData, post.id))
    }
    
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string, lang: 'en' | 'id'): BlogPostContent | null {
    for (const path in posts) {
        const post = posts[path].default
        const langKey = lang === 'id' ? 'id_ID' : 'en'
        const postData = post[langKey as 'en' | 'id_ID']
        if (postData.slug === slug) {
            return postData
        }
    }
    return null
}

export function getAllBlogSlugs(): { slug: string; lang: 'en' | 'id' }[] {
    const slugs: { slug: string; lang: 'en' | 'id' }[] = []
    
    for (const path in posts) {
        const post = posts[path].default
        slugs.push({ slug: post.en.slug, lang: 'en' })
        slugs.push({ slug: post.id_ID.slug, lang: 'id' })
    }
    
    return slugs
}

export const blogPosts: { en: BlogPost[]; id: BlogPost[] } = {
    en: getAllBlogPosts('en'),
    id: getAllBlogPosts('id'),
}
