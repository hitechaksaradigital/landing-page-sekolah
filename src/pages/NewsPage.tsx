import { useEffect } from 'react'
import NewsNavbar from '../components/news/NewsNavbar';
import NewsHero from '../components/news/NewsHero';
import CategoryFilter from '../components/news/CategoryFilter';
import NewsGrid from '../components/news/NewsGrid';
import Pagination from '../components/news/Pagination';
import NewsFooter from '../components/news/NewsFooter';

export default function NewsPage() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => {
          b.classList.remove('bg-secondary', 'text-on-secondary-container', 'neon-glow-primary');
          b.classList.add('text-on-surface-variant');
        });
        btn.classList.add('bg-secondary', 'text-on-secondary-container', 'neon-glow-primary');
        btn.classList.remove('text-on-surface-variant');
      });
    });

    document.querySelectorAll('article').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }, []);

  return (
    <main className="pt-24 pb-stack-lg">
      <NewsNavbar />
      <NewsHero />
      <CategoryFilter />
      <NewsGrid />
      <Pagination />
      <NewsFooter />
    </main>
  );
}
