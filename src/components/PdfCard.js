const PdfCard = ({ title, description, file, badge, delay = 0 }) => {
  return (
    <div
      className="pdf-card group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="p-3.5 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-primary-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 13h6M9 17h4" />
            </svg>
          </div>
          <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-md tracking-wide">
            {badge || 'PDF'}
          </span>
        </div>

        <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 mb-5 leading-relaxed line-clamp-2">{description}</p>
        )}

        <div className="flex gap-2">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-r from-primary-500 to-primary-800 hover:from-primary-600 hover:to-primary-900 text-white px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </a>
          <a
            href={file}
            download
            className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-400 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfCard;
