import { useEffect, useState } from 'react'
import NewsNavbar from '../components/news/NewsNavbar';
import NewsHero from '../components/news/NewsHero';
import CategoryFilter from '../components/news/CategoryFilter';
import NewsGrid from '../components/news/NewsGrid';
import Pagination from '../components/news/Pagination';
import NewsFooter from '../components/news/NewsFooter';
import { supabase } from '../lib/supabase';
import type { NewsItem } from '../types/news';

type Category = 'Semua' | 'Prestasi' | 'Inovasi' | 'Kegiatan' | 'Pengumuman';

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<Category>('Semua')

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_at', { ascending: false })

      if (error) {
        console.error('Error fetching news:', error)
      } else {
        setNews(data || [])
      }
      setLoading(false)
    }

    fetchNews()
  }, [])

  const filteredNews = activeCategory === 'Semua'
    ? news
    : news.filter((item) => item.category === activeCategory)

  const featuredNews = news.find((item) => item.is_featured)

  return (
    <main className="pt-24 pb-stack-lg">
      <NewsNavbar />
      <NewsHero news={featuredNews} />
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <NewsGrid news={filteredNews} loading={loading} />
      <Pagination />
      <NewsFooter />
    </main>
  );
}
