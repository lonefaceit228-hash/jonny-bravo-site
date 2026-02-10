import { Link } from "wouter";
import { ComicButton } from "./ComicButton";
import { ExternalLink } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bravo-yellow border-b-4 border-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
          <div className="bg-black text-white font-display text-2xl px-2 py-1 rotate-3 group-hover:rotate-0 transition-transform">
            JB
          </div>
          <span className="font-display text-3xl text-black hidden sm:block">Johnny Bravo</span>
        </Link>

        <div className="flex items-center gap-4">
          <a 
            href="https://x.com/i/communities/2020974893467099418" 
            target="_blank" 
            rel="noopener noreferrer"
            className="no-underline"
          >
            <ComicButton variant="primary" size="sm" className="flex items-center gap-2">
              <span>X Community</span>
              <ExternalLink size={20} strokeWidth={3} />
            </ComicButton>
          </a>
        </div>
      </div>
    </header>
  );
}
