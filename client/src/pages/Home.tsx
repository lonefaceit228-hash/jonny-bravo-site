import { Header } from "@/components/Header";
import { ComicButton } from "@/components/ComicButton";
import { AskJohnny } from "@/components/AskJohnny";
import { motion } from "framer-motion";
import { Star, Zap, Heart, Sparkles } from "lucide-react";
import heroImg from "@assets/MV5BM2M5YjYxZTktYzIzNi00MjkxLTljYTEtYjllNWY3Y2RkMTYwXkEyXkFqcG_1770673945010.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-bravo-yellow font-body overflow-x-hidden pt-16">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bravo-blue rounded-full blur-[100px] opacity-40 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bravo-pink rounded-full blur-[80px] opacity-40 -z-10"></div>
        
        {/* Abstract 90s Shapes */}
        <div className="absolute top-20 left-10 hidden md:block">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-black bg-white transform rotate-12 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            ></motion.div>
        </div>
        
        <div className="absolute bottom-40 right-10 hidden md:block">
             <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
               <Zap size={64} className="text-black fill-bravo-pink" strokeWidth={3} />
            </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-7xl md:text-9xl font-display leading-[0.9] mb-6 text-shadow-white transform -rotate-2">
                Whoa <br/> <span className="text-bravo-pink">Mama!</span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-comic mb-8 border-l-8 border-black pl-6 py-2 bg-white/20 backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] inline-block">
                The one and only site for the man, the myth, the pompadour!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#ask-johnny" className="no-underline">
                  <ComicButton size="lg" className="w-full sm:w-auto">
                    Talk to Me, Baby!
                  </ComicButton>
                </a>
                <ComicButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  Check the Pecs
                </ComicButton>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20, 
                delay: 0.2 
              }}
              className="relative"
            >
              {/* Comic burst background behind image */}
              <div className="absolute inset-0 bg-white scale-110 transform -rotate-3 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] z-0"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 border-4 border-black overflow-hidden w-[300px] md:w-[450px] aspect-[3/4] bg-bravo-blue">
                <img 
                  src={heroImg} 
                  alt="Johnny Bravo Flexing" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                {/* Sticker Badge */}
                <motion.div 
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-bravo-pink text-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20"
                >
                  <span className="font-display text-xl text-center leading-none transform rotate-12">100%<br/>MAN</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <div className="bg-black text-white py-6 overflow-hidden border-y-4 border-white transform -rotate-1 scale-105 shadow-xl relative z-20">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-4xl tracking-widest">
           <span>★ DO THE MONKEY ★</span>
           <span className="text-bravo-yellow">★ MAN I'M PRETTY ★</span>
           <span className="text-bravo-pink">★ HUH! HAH! HUH! ★</span>
           <span>★ DO THE MONKEY ★</span>
           <span className="text-bravo-yellow">★ MAN I'M PRETTY ★</span>
           <span className="text-bravo-pink">★ HUH! HAH! HUH! ★</span>
           <span>★ DO THE MONKEY ★</span>
           <span className="text-bravo-yellow">★ MAN I'M PRETTY ★</span>
        </div>
      </div>

      {/* Gallery / Info Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-display text-center mb-16 text-shadow-md">The Johnny Lifestyle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Hair", icon: <Sparkles className="w-12 h-12" />, color: "bg-bravo-yellow", desc: "It defies gravity, baby. Just like my charm." },
              { title: "The Shades", icon: <Star className="w-12 h-12" />, color: "bg-black text-white", desc: "I wear them indoors because the sun never sets on cool." },
              { title: "The Moves", icon: <Zap className="w-12 h-12" />, color: "bg-bravo-blue text-white", desc: "Do the Monkey, the Swim, and the 1-2-3 Flex! It's all about the rhythm, baby." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`${item.color} p-8 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center`}
              >
                <div className="mb-4 p-4 bg-white border-4 border-black rounded-full text-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-display mb-4">{item.title}</h3>
                <p className="font-comic text-xl leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <AskJohnny />

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-8 border-bravo-yellow text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-5xl mb-6 text-bravo-yellow">Smell ya later!</h2>
          <div className="flex justify-center gap-6 mb-8">
             <Heart className="text-bravo-pink fill-bravo-pink animate-pulse" size={32} />
             <Heart className="text-bravo-pink fill-bravo-pink animate-pulse delay-100" size={32} />
             <Heart className="text-bravo-pink fill-bravo-pink animate-pulse delay-200" size={32} />
          </div>
          <p className="font-comic text-gray-400">
            © {new Date().getFullYear()} Cartoon Network & Van Partible. Fan site made with 100% pure hair gel.
          </p>
        </div>
      </footer>
    </div>
  );
}
