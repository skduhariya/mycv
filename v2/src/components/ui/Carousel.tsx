import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/formatters';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoPlayInterval?: number; // In ms, default 5000 for infinite auto-scroll
  className?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  autoPlayInterval = 5000,
  className,
}: CarouselProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items per page detection
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: 1 card per page
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 cards per page
      } else {
        setItemsPerPage(3); // Desktop: 3 cards per page
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Split items into discrete full pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Reset to page 0 if current page overflows on window resize
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // Infinite Next Navigation
  const nextSlide = useCallback(() => {
    setCurrentPage(prev => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  // Infinite Previous Navigation
  const prevSlide = useCallback(() => {
    setCurrentPage(prev => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  // Infinite Autoplay timer
  useEffect(() => {
    if (autoPlayInterval <= 0 || isHovered || totalPages <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, isHovered, totalPages, nextSlide]);

  return (
    <div
      className={cn('relative space-y-4', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Page <span className="text-brand-600 dark:text-cyan-400 font-bold">{currentPage + 1}</span> of {totalPages} ({items.length} total offerings)
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            type="button"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs active:scale-95 hover:text-brand-600 dark:hover:text-cyan-400"
            aria-label="Previous page (Infinite Loop)"
            title="Previous offerings"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={nextSlide}
            type="button"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-xs active:scale-95 hover:text-brand-600 dark:hover:text-cyan-400"
            aria-label="Next page (Infinite Loop)"
            title="Next offerings"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Full-Page Carousel Viewport */}
      <div className="overflow-hidden rounded-2xl py-1">
        <div
          className="flex transition-transform duration-600 ease-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const pageItems = items.slice(
              pageIdx * itemsPerPage,
              pageIdx * itemsPerPage + itemsPerPage
            );

            return (
              <div
                key={pageIdx}
                className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {pageItems.map((item, itemIdx) => {
                  const globalIdx = pageIdx * itemsPerPage + itemIdx;
                  return (
                    <div key={globalIdx} className="h-full flex flex-col">
                      {renderItem(item, globalIdx)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot Indicators for Direct Jump */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-2">
          {Array.from({ length: totalPages }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentPage(dotIdx)}
              type="button"
              className={cn(
                'h-2 rounded-full transition-all cursor-pointer',
                currentPage === dotIdx
                  ? 'w-7 bg-brand-500 shadow-xs'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              )}
              aria-label={`Go to page ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
