import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { workItems, workCategories } from '../data/work';
import { WorkItem } from '../types';
import { Maximize2, X, Sparkles, Image as ImageIcon } from 'lucide-react';

interface EditorialPhotoProps {
  item: WorkItem;
  plateNumber: string;
  featured?: boolean;
  aspectClass?: string;
  onClick: () => void;
}

const EditorialPhoto: React.FC<EditorialPhotoProps> = ({
  item,
  plateNumber,
  featured = false,
  aspectClass = 'aspect-[4/3]',
  onClick,
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  // Resolution candidates ordered by preference
  const candidateSources = [
    item.originalFilename ? `/work/${item.originalFilename}` : '',
    item.originalFilename ? `/${item.originalFilename}` : '',
    item.originalFilename ? `/images/${item.originalFilename}` : '',
    `/work/${item.filename}`,
    `/${item.filename}`,
    `/images/${item.filename}`,
    item.image,
    item.fallbackImage || ''
  ].filter(Boolean) as string[];

  const currentImageSrc = candidateSources[currentSrcIndex] || item.image;

  const handleImageError = () => {
    if (currentSrcIndex < candidateSources.length - 1) {
      setCurrentSrcIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className={`group cursor-pointer bg-white border border-[#E5E1D8] black-corners-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#141413] hover:shadow-[0_20px_40px_rgba(20,20,19,0.08)] flex flex-col p-2.5 sm:p-3 ${
        featured ? 'lg:col-span-8' : ''
      }`}
    >
      {/* Visual Image Frame with Curved Corners */}
      <div className={`relative w-full overflow-hidden rounded-xl bg-[#F0ECE1] ${aspectClass}`}>
        
        {/* Real Photograph with Curved Corners */}
        {!allFailed && currentImageSrc && (
          <img
            src={currentImageSrc}
            alt={item.title}
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            onError={handleImageError}
            className={`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Archival Monograph fallback when loading */}
        {(!imgLoaded || allFailed) && (
          <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-[#F7F5F0] to-[#EAE5D9] rounded-xl select-none">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#848480] uppercase tracking-widest">
              <span className="text-[#0B4ECF] font-bold">{plateNumber}</span>
              <span>{item.category}</span>
            </div>

            <div className="my-auto py-2 space-y-1.5 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-[#0B4ECF]/10 text-[#0B4ECF] flex items-center justify-center">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div className="font-serif italic text-lg sm:text-xl text-[#141413] leading-snug">
                {item.title}
              </div>
              <p className="text-xs text-[#575754] line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#848480] border-t border-[#E5E1D8] pt-2">
              <span>{item.date}</span>
              <span>{item.tag}</span>
            </div>
          </div>
        )}

        {/* Floating Category Pill */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-[#141413] border border-white/40 shadow-xs">
          {item.category}
        </div>

        {/* Hover Inspect Indicator */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-[#141413] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
          <Maximize2 className="w-3 h-3 text-[#0B4ECF]" />
          <span>Expand</span>
        </div>
      </div>

      {/* Caption Strip */}
      <div className="p-3 sm:p-4 flex flex-col justify-between gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#848480] uppercase tracking-wider">
          <span className="text-[#0B4ECF] font-semibold flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            {item.tag || item.category}
          </span>
          <span>{item.date}</span>
        </div>
        <h4 className="text-sm sm:text-base font-display font-bold text-[#141413] group-hover:text-[#0B4ECF] transition-colors leading-snug">
          {item.title}
        </h4>
        <p className="text-xs text-[#575754] line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const WorkGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');
  const [activePhoto, setActivePhoto] = useState<WorkItem | null>(null);

  const filteredItems =
    selectedCategory === 'All Work'
      ? workItems
      : workItems.filter((i) => i.category === selectedCategory);

  const featuredItem = filteredItems[0] || workItems[0];
  const supportingItems = filteredItems.slice(1);

  return (
    <section id="work" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <span className="text-[#0B4ECF] font-bold">04 / OUR WORK &amp; GALLERY</span>
          <span>ACTIVITIES &amp; COHORT SESSIONS</span>
        </div>

        {/* Section Title & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight">
              Our Work in Practice
            </h2>
            <p className="mt-3 text-base text-[#575754] leading-relaxed">
              Photographic documentation from our inaugural Claude AI Workshop, student prompt engineering sprints, and leadership sessions at the Skill Development Cell.
            </p>
          </div>

          {/* Clean Editorial Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {workCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#141413] text-white font-semibold shadow-xs'
                    : 'bg-white border border-[#E5E1D8] text-[#575754] hover:border-[#141413] hover:text-[#141413]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Photo Composition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {selectedCategory === 'All Work' && (
              <div className="mb-8">
                {/* Featured Hero Exhibition Plate */}
                <EditorialPhoto
                  item={featuredItem}
                  plateNumber="PLATE 01 — FEATURED COHORT"
                  featured={true}
                  aspectClass="aspect-[16/9] sm:aspect-[21/9]"
                  onClick={() => setActivePhoto(featuredItem)}
                />
              </div>
            )}

            {/* Supporting Grid of Editorial Photography with Curved Corners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === 'All Work' ? supportingItems : filteredItems).map(
                (item, index) => {
                  const plateNum = `PLATE ${String(index + 2).padStart(2, '0')}`;
                  const ratio =
                    index % 3 === 0
                      ? 'aspect-[4/3]'
                      : index % 3 === 1
                      ? 'aspect-[3/2]'
                      : 'aspect-[4/3]';

                  return (
                    <EditorialPhoto
                      key={item.id}
                      item={item}
                      plateNumber={plateNum}
                      aspectClass={ratio}
                      onClick={() => setActivePhoto(item)}
                    />
                  );
                }
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Full Lightbox Viewport with Curved Modal Corners */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#141413]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white border border-[#E5E1D8] black-corners rounded-3xl overflow-hidden flex flex-col max-h-[92vh] shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:px-6 border-b border-[#E5E1D8] flex items-center justify-between bg-[#FBF9F5]">
                <div className="flex items-center gap-3 text-xs font-mono text-[#575754]">
                  <span className="text-[#0B4ECF] font-bold uppercase">{activePhoto.category}</span>
                  <span>•</span>
                  <span>{activePhoto.date}</span>
                  <span>•</span>
                  <span>{activePhoto.tag}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="p-1.5 rounded-full hover:bg-[#E5E1D8]/50 text-[#575754] hover:text-[#141413] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display with Curved Corners */}
              <div className="relative bg-[#0F1012] flex-grow flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[350px]">
                <img
                  src={
                    activePhoto.originalFilename
                      ? `/work/${activePhoto.originalFilename}`
                      : `/work/${activePhoto.filename}`
                  }
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    if (activePhoto.image && el.src !== activePhoto.image) {
                      el.src = activePhoto.image;
                    } else if (activePhoto.fallbackImage) {
                      el.src = activePhoto.fallbackImage;
                    }
                  }}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[60vh] object-contain rounded-2xl shadow-xl"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 bg-white border-t border-[#E5E1D8] space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#141413]">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-[#575754] leading-relaxed max-w-3xl">
                  {activePhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
