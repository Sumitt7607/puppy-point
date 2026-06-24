import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  Heart,
  Shield,
  Stethoscope,
  Award,
  HandHeart,
  Truck,
  Star,
  ArrowUp,
  PawPrint,
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
} from "lucide-react";
import heroPuppy from "@/assets/hero-puppy.jpg";
import aboutImg from "@/assets/about-collage.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonial-9.jpg";

import goldenRetrieverImg from "@/assets/golden-retriever.png";
import labradorImg from "@/assets/labrador.png";
import shihTzuImg from "@/assets/shih-tzu.png";
import pomeranianImg from "@/assets/pomeranian.png";
import germanShepherdImg from "@/assets/german-shepherd.png";

import beagleImg from "@/assets/beagle.png";
import siberianHuskyImg from "@/assets/siberian-husky.png";
import pugImg from "@/assets/pug.png";
import frenchBulldogImg from "@/assets/french-bulldog.jpg";
import malteseImg from "@/assets/maltese.jpg";

import dachshundImg from "@/assets/dachshund.png";
import cockerSpanielImg from "@/assets/cocker-spaniel.png";
import maltipooImg from "@/assets/maltipoo.jpg";
import tibetanMastiffImg from "@/assets/tibetan-mastiff.png";

import bichonFriseImg from "@/assets/bichon-frise.png";
import toyPoodleImg from "@/assets/toy-poodle.png";
import cavalierKingCharlesImg from "@/assets/cavalier-king-charles.png";
import rottweilerImg from "@/assets/rottweiler.png";
import blackGermanShepherdImg from "@/assets/black-german-shepherd.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Puppy Point — Premium Puppies in Delhi NCR" },
      {
        name: "description",
        content:
          "Find healthy, vaccinated, ethically raised puppies in Delhi NCR. 19+ premium breeds. Call or WhatsApp +91 93111 31742.",
      },
      { property: "og:title", content: "The Puppy Point — Premium Puppies in Delhi NCR" },
      {
        property: "og:description",
        content:
          "Healthy, vaccinated, ethically raised puppies from trusted breeders across Delhi NCR.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "+919311131742";
const PHONE_DISPLAY = "+91 93111 31742";
const WA = "https://wa.me/919311131742";

const breeds = [
  {
    name: "Golden Retriever",
    desc: "Affectionate, intelligent, and loyal — the perfect family companion.",
    img: goldenRetrieverImg,
    imgPosition: "object-top",
  },
  {
    name: "Labrador",
    desc: "Outgoing, playful, and gentle — excellent with children.",
    img: labradorImg,
    imgPosition: "object-top",
  },
  {
    name: "Shih Tzu",
    desc: "Charming, lively, and affectionate — perfect lap dog for apartments.",
    img: shihTzuImg,
    imgPosition: "object-top",
  },
  {
    name: "Pomeranian",
    desc: "Tiny, fluffy, and full of personality — a lively companion.",
    img: pomeranianImg,
    imgPosition: "object-center",
  },
  {
    name: "German Shepherd",
    desc: "Confident, courageous, and highly trainable loyal protectors.",
    img: germanShepherdImg,
    imgPosition: "object-center",
  },
  {
    name: "Beagle",
    desc: "Curious, friendly, and merry — a great active family pet.",
    img: beagleImg,
    imgPosition: "object-center",
  },
  {
    name: "Siberian Husky",
    desc: "Stunningly beautiful, social, and energetic adventure companion.",
    img: siberianHuskyImg,
    imgPosition: "object-center",
  },
  {
    name: "Pug",
    desc: "Charming, mischievous, and loving small companion.",
    img: pugImg,
    imgPosition: "object-center",
  },
  {
    name: "French Bulldog",
    desc: "Playful, adaptable, and low-maintenance — ideal for city living.",
    img: frenchBulldogImg,
    imgPosition: "object-center",
  },
  {
    name: "Maltese",
    desc: "Gentle, trusting, and devoted — a glamorous yet friendly companion.",
    img: malteseImg,
    imgPosition: "object-center",
  },
  {
    name: "Dachshund",
    desc: "Clever, curious, and spunky — a bold little dog with a big heart.",
    img: dachshundImg,
    imgPosition: "object-center",
  },
  {
    name: "Cocker Spaniel",
    desc: "Sweet, gentle, and eager to please — wonderful with families.",
    img: cockerSpanielImg,
    imgPosition: "object-center",
  },
  {
    name: "Maltipoo",
    desc: "Hypoallergenic, loving, and super intelligent — a joyful companion.",
    img: maltipooImg,
    imgPosition: "object-center",
  },
  {
    name: "Tibetan Mastiff",
    desc: "Majestic, loyal, and powerful — a noble guardian breed with a lion-like mane.",
    img: tibetanMastiffImg,
    imgPosition: "object-center",
  },
  {
    name: "Bichon Frisé",
    desc: "Cheerful, gentle, and hypoallergenic — a fluffy cloud of joy and affection.",
    img: bichonFriseImg,
    imgPosition: "object-top",
  },
  {
    name: "Toy Poodle",
    desc: "Brilliant, elegant, and hypoallergenic — one of the most intelligent breeds.",
    img: toyPoodleImg,
    imgPosition: "object-center",
  },
  {
    name: "Cavalier King Charles Spaniel",
    desc: "Gentle, graceful, and sweet-tempered — the ultimate companion lap dog.",
    img: cavalierKingCharlesImg,
    imgPosition: "object-center",
  },
  {
    name: "Rottweiler",
    desc: "Loyal, loving, and confident guardian — a devoted family protector.",
    img: rottweilerImg,
    imgPosition: "object-center",
  },
  {
    name: "Black German Shepherd",
    desc: "Strikingly beautiful, intelligent, and alert — a rare and loyal companion.",
    img: blackGermanShepherdImg,
    imgPosition: "object-center",
  },
];



const trustBadges = [
  { icon: Heart, label: "Healthy Puppies" },
  { icon: Shield, label: "Vaccinated" },
  { icon: Stethoscope, label: "Vet Checked" },
  { icon: Truck, label: "Delhi NCR Delivery" },
];

const whyUs = [
  { icon: Heart, title: "Healthy Puppies", desc: "Every puppy is raised in clean, loving environments with attentive care." },
  { icon: Shield, title: "Vaccinated & Dewormed", desc: "Up-to-date on vaccinations and deworming protocols before going home." },
  { icon: Stethoscope, title: "Vet Checked", desc: "Thorough health checks by certified veterinarians for total peace of mind." },
  { icon: Award, title: "Trusted Breeders", desc: "Partnered only with ethical, transparent breeders across India." },
  { icon: HandHeart, title: "Lifetime Guidance", desc: "Free expert support for your puppy's care, training, and well-being." },
  { icon: Truck, title: "Delhi NCR Delivery", desc: "Safe, fast, hand-delivered to your doorstep anywhere in Delhi NCR." },
];

const testimonials = [
  {
    name: "Ananya Iyer",
    city: "Delhi",
    puppy: "Black German Shepherd",
    text: "We'd been searching for a healthy Black German Shepherd for months. The Puppy Point delivered a gorgeous, vet-certified puppy — incredibly smart and already loved by the whole family!",
    rating: 5,
    img: testimonial1,
  },
  {
    name: "Kabir Malhotra",
    city: "Gurgaon",
    puppy: "Toy Poodle",
    text: "Extremely happy with our Toy Poodle puppy! She's hypoallergenic, so energetic, and was perfectly vaccinated on arrival. The post-adoption support from the team is outstanding.",
    rating: 5,
    img: testimonial2,
  },
  {
    name: "Rahul Dixit",
    city: "Delhi",
    puppy: "Golden Retriever",
    text: "Bringing home our Golden Retriever from The Puppy Point was the best decision. Seamless process, all health certificates provided, and a breathtakingly healthy pup.",
    rating: 5,
    img: testimonial3,
  },
  {
    name: "Priya Mehta",
    city: "Noida",
    puppy: "Shih Tzu",
    text: "Absolutely in love with our fluffy Shih Tzu! The team guided us on diet and vaccine schedules. Super responsive and caring — will recommend to everyone!",
    rating: 5,
    img: testimonial4,
  },
  {
    name: "Vikram Singh",
    city: "Gurgaon",
    puppy: "Maltipoo",
    text: "Superb experience from start to finish. They guided us on breed choice and puppy nutrition. Our little pup is super active and has brought so much laughter to our home.",
    rating: 5,
    img: testimonial5,
  },
  {
    name: "Neha Sharma",
    city: "Delhi",
    puppy: "Shih Tzu",
    text: "Got our adorable Shih Tzu pup from The Puppy Point and I couldn't be happier! She was healthy, vaccinated, and the team made sure the transition was super smooth for us.",
    rating: 5,
    img: testimonial6,
  },
  {
    name: "Arjun Nair",
    city: "Noida",
    puppy: "Siberian Husky",
    text: "My Husky puppy has the most beautiful blue eyes and the most amazing personality. Thank you Puppy Point for connecting us — this little guy is the star of our family!",
    rating: 5,
    img: testimonial7,
  },
  {
    name: "Sumit Yadav",
    city: "Delhi",
    puppy: "Shih Tzu",
    text: "Got our Shih Tzu from Puppy Point and he's been an absolute joy. They guided us throughout — from puppy-proofing our home to the right diet. Truly a wonderful experience.",
    rating: 5,
    img: testimonial8,
  },
  {
    name: "Ishita Agarwal",
    city: "Gurgaon",
    puppy: "Beagle",
    text: "Our little Beagle arrived perfectly healthy with all his vaccination records. The Puppy Point team was available 24/7 for all our first-time parent queries. Highly recommend!",
    rating: 5,
    img: testimonial9,
  },
];

const tips = [
  { title: "Feeding Guide", desc: "Age-appropriate nutrition for a thriving puppy — meal frequency, portions, and premium foods.", emoji: "🍽️" },
  { title: "Vaccination Schedule", desc: "Complete timeline from 6 weeks to 16 weeks for full protection and lifelong immunity.", emoji: "💉" },
  { title: "Grooming Tips", desc: "Coat care, bathing, brushing and nail trimming routines tailored to each breed.", emoji: "✂️" },
  { title: "Training Basics", desc: "Positive-reinforcement methods for potty training, leash walking and gentle obedience.", emoji: "🎓" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-luxury">
      <MouseGlow />
      <FloatingParticles />
      <Nav />
      <Hero />
      <Breeds />
      <WhyUs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions />
      <BackToTop />
    </div>
  );
}

/* ---------------- Mouse Glow + Particles ---------------- */

function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-60 blur-3xl transition-transform duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent), transparent 70%)",
      }}
    />
  );
}

function FloatingParticles() {
  const prefersReducedMotion = useReducedMotion();
  const particles = Array.from({ length: 18 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = 6 + ((i * 7) % 14);
        const dur = 8 + ((i * 3) % 10);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: i % 3 === 0
                ? "color-mix(in oklab, var(--gold) 60%, transparent)"
                : "color-mix(in oklab, var(--sky) 50%, transparent)",
              filter: "blur(1px)",
            }}
            animate={prefersReducedMotion ? {} : { y: [0, -40, 0], x: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`paw-${i}`}
          className="absolute text-foreground/10"
          style={{ left: `${(i * 71) % 95}%`, top: `${(i * 41) % 90}%` }}
          animate={prefersReducedMotion ? {} : { y: [0, -30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint className="h-6 w-6" />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Close menu on link click
  const close = () => setMenuOpen(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-full px-5 py-3 ${scrolled ? "glass-strong" : "glass"}`}>
          <a href="#top" onClick={close} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-sky shadow-glow">
              <PawPrint className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-base font-bold tracking-tight sm:text-lg">The Puppy Point</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#breeds" className="hover:text-foreground transition">Breeds</a>
            <a href="#why" className="hover:text-foreground transition">Why Us</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#testimonials" className="hover:text-foreground transition">Families</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-soft transition hover:scale-105 sm:flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full glass md:hidden"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-2 mt-2 overflow-hidden rounded-3xl glass-strong px-6 py-5 shadow-glow md:hidden"
          >
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a href="#breeds" onClick={close} className="hover:text-gold transition">Breeds</a>
              <a href="#why" onClick={close} className="hover:text-gold transition">Why Us</a>
              <a href="#about" onClick={close} className="hover:text-gold transition">About</a>
              <a href="#testimonials" onClick={close} className="hover:text-gold transition">Families</a>
              <a href="#contact" onClick={close} className="hover:text-gold transition">Contact</a>
              <a
                href={`tel:${PHONE}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const prefersReduced = useReducedMotion();

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 lg:gap-12">
        <motion.div style={{ y: prefersReduced ? 0 : y, opacity: prefersReduced ? 1 : opacity }} className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-foreground/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Premium puppy boutique • Delhi NCR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Find Your Perfect{" "}
            <span className="text-gradient-gold">Furry Companion</span>{" "}
            in Delhi NCR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 max-w-xl text-base text-muted-foreground md:mt-6 md:text-lg"
          >
            Healthy, vaccinated, ethically raised puppies from trusted breeders. Bring home happiness today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-6 flex flex-wrap gap-3 md:mt-8"
          >
            <a
              href="#breeds"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-soft transition-transform hover:scale-105 md:px-6 md:py-3.5"
            >
              <PawPrint className="h-4 w-4" />
              View Puppies
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105 md:px-6 md:py-3.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-2xl glass px-2.5 py-2 text-xs font-medium sm:px-3 sm:py-2.5">
                <Icon className="h-3.5 w-3.5 flex-shrink-0 text-gold sm:h-4 sm:w-4" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-gold/30 via-sky/20 to-gold/20 blur-3xl md:-inset-8" />
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-2 shadow-glow md:rounded-[2.5rem] md:p-3">
            <img
              src={heroPuppy}
              alt="Premium puppy from The Puppy Point Delhi NCR"
              width={1600}
              height={1200}
              className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px] md:h-[480px] md:rounded-[2rem] lg:h-[560px]"
            />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-6 rounded-xl glass-strong px-3 py-2 shadow-soft md:-left-6 md:top-10 md:rounded-2xl md:px-4 md:py-3"
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="h-4 w-4 text-whatsapp md:h-5 md:w-5" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-[11px]">Verified</div>
                <div className="text-xs font-semibold md:text-sm">Health Certified</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 bottom-6 rounded-xl glass-strong px-3 py-2 shadow-soft md:-right-4 md:bottom-10 md:rounded-2xl md:px-4 md:py-3"
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              <Star className="h-4 w-4 fill-gold text-gold md:h-5 md:w-5" />
              <div>
                <div className="text-xs font-semibold md:text-sm">4.9 / 5</div>
                <div className="text-[10px] text-muted-foreground md:text-[11px]">2,000+ happy homes</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Breeds ---------------- */

function Breeds() {
  return (
    <section id="breeds" className="relative py-16 md:py-24">
      <SectionHeader
        eyebrow="Our Puppies"
        title={<>Meet Your Future <span className="text-gradient-gold">Best Friend</span></>}
        sub="Hand-picked, healthy, and ready to be loved — explore 19+ premium breeds available across Delhi NCR."
      />
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-3 px-3 sm:gap-5 sm:px-4 md:mt-14 md:gap-6 lg:grid-cols-3">
        {breeds.map((b, i) => (
          <BreedCard key={b.name} breed={b} index={i} />
        ))}
      </div>
    </section>
  );
}

function BreedCard({ breed, index }: { breed: (typeof breeds)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass-strong p-2 shadow-soft transition-shadow hover:shadow-glow sm:rounded-3xl sm:p-3"
    >
      <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-gold-soft to-sky-soft sm:h-48 sm:rounded-2xl md:h-60">
        <img
          src={breed.img}
          alt={`${breed.name} puppy available in Delhi NCR`}
          loading="lazy"
          width={600}
          height={600}
          className={`h-full w-full object-cover ${"imgPosition" in breed ? breed.imgPosition : "object-center"} transition-transform duration-700 group-hover:scale-110`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = heroPuppy;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="absolute left-2 top-2 inline-flex items-center gap-0.5 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur sm:left-3 sm:top-3 sm:gap-1 sm:px-2.5 sm:py-1 sm:text-[11px]">
          <Sparkles className="h-2.5 w-2.5 text-gold sm:h-3 sm:w-3" />
          Available
        </div>
      </div>
      <div className="p-2 sm:p-4">
        <h3 className="font-display text-sm font-bold leading-tight sm:text-xl">{breed.name}</h3>
        <p className="mt-1 hidden text-xs text-muted-foreground sm:mt-1.5 sm:block sm:text-sm line-clamp-2">{breed.desc}</p>
        <div className="mt-2 flex gap-1.5 sm:mt-4 sm:gap-2">
          <a
            href={`tel:${PHONE}`}
            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-foreground px-2 py-2 text-[10px] font-semibold text-background transition hover:opacity-90 sm:gap-1.5 sm:px-3 sm:py-2.5 sm:text-xs"
          >
            <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden xs:inline">Call</span><span className="xs:hidden">📞</span>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-whatsapp px-2 py-2 text-[10px] font-semibold text-white transition hover:opacity-90 sm:gap-1.5 sm:px-3 sm:py-2.5 sm:text-xs"
          >
            <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Chat
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Why Us ---------------- */

function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gold-soft/30 to-transparent" />
      <SectionHeader
        eyebrow="Why The Puppy Point"
        title={<>Premium Care. <span className="text-gradient-gold">Lifetime Promise.</span></>}
        sub="Every puppy is loved, vetted, and supported by experts who care as much as you do."
      />
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-7 shadow-soft transition-shadow hover:shadow-glow"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold/60 text-white shadow-glow transition-transform group-hover:scale-110">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About + Counters ---------------- */

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-sky/30 to-gold/30 blur-3xl" />
          <div className="overflow-hidden rounded-[2.5rem] glass-strong p-3 shadow-glow">
            <img
              src={aboutImg}
              alt="Happy family with their new puppy"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-[460px] w-full rounded-[2rem] object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-4 top-8 rounded-2xl glass-strong px-4 py-3 shadow-soft"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Heart className="h-4 w-4 fill-destructive text-destructive" />
              Ethically raised
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Us</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
            About <span className="text-gradient-gold">The Puppy Point</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We are passionate about connecting loving families with healthy, happy, and well-socialized puppies. The Puppy Point is committed to ethical breeding practices, transparency, and providing lifelong support to puppy owners across Delhi NCR.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <Counter to={2000} suffix="+" label="Happy Families" />
            <Counter to={19} suffix="+" label="Premium Breeds" />
            <Counter to={10} suffix="yrs" label="Of Experience" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1500, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [to]);
  return (
    <div ref={ref} className="rounded-2xl glass-strong p-5 text-center shadow-soft">
      <div className="font-display text-3xl font-bold text-gradient-gold md:text-4xl">
        {val}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const maxIndex = total - 1;

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((v) => (v >= maxIndex ? 0 : v + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const prev = () => setCurrent((v) => (v <= 0 ? maxIndex : v - 1));
  const next = () => setCurrent((v) => (v >= maxIndex ? 0 : v + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-sky-soft/40 to-transparent" />
      <SectionHeader
        eyebrow="Happy Families"
        title={<>Loved by <span className="text-gradient-gold">Real Pet Parents</span></>}
        sub="Real stories from real homes across Delhi NCR."
      />

      <div className="mx-auto mt-14 max-w-4xl px-4">
        {/* Testimonial Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative flex flex-col md:flex-row overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] min-h-[360px]"
        >
          {/* Left Side: Photo */}
          <div className="relative w-full md:w-[38%] aspect-[4/3] md:aspect-auto overflow-hidden shrink-0">
            <img
              src={t.img}
              alt={`${t.name} with their ${t.puppy}`}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base md:text-lg leading-relaxed text-slate-700 italic font-medium mb-8">
              "{t.text}"
            </blockquote>

            {/* Profile info */}
            <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
              <img
                src={t.img}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="font-bold text-slate-800 text-sm md:text-base leading-snug">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.city}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-sm text-slate-600 hover:text-slate-900 transition hover:scale-105 hover:shadow-md cursor-pointer"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? "w-6 bg-gold" : "w-2 bg-slate-300/80 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-sm text-slate-600 hover:text-slate-900 transition hover:scale-105 hover:shadow-md cursor-pointer"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tips ---------------- */

function Tips() {
  return (
    <section id="tips" className="relative py-24">
      <SectionHeader
        eyebrow="Puppy Care"
        title={<>Care Guides for <span className="text-gradient-gold">New Parents</span></>}
        sub="Expert-curated tips to help your puppy thrive from day one."
      />
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-7 shadow-soft transition-shadow hover:shadow-glow"
          >
            <div className="mb-4 text-4xl transition-transform group-hover:scale-110">{t.emoji}</div>
            <h3 className="font-display text-xl font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
              Learn more →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold-soft/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Get In Touch</span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
            Bring Home Your <span className="text-gradient-gold">New Best Friend</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We'd love to help you find the perfect puppy. Reach out by phone, WhatsApp, or the form — we usually reply within minutes.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-between rounded-2xl glass-strong p-5 shadow-soft transition hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold/70 text-white shadow-glow">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                  <div className="font-display text-lg font-bold">{PHONE_DISPLAY}</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gold">Tap to call →</span>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between rounded-2xl glass-strong p-5 shadow-soft transition hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-whatsapp text-white shadow-glow">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-display text-lg font-bold">Chat instantly</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-whatsapp">Open chat →</span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl glass p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/30 text-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Service Area</div>
                <div className="font-semibold">Delhi • Gurgaon • Noida • Faridabad • Ghaziabad</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name    = (fd.get("name")    as string).trim();
            const phone   = (fd.get("phone")   as string).trim();
            const email   = (fd.get("email")   as string).trim();
            const breed   = (fd.get("breed")   as string).trim();
            const message = (fd.get("message") as string).trim();

            const lines = [
              `🐾 *New Puppy Enquiry — The Puppy Point*`,
              ``,
              `👤 *Name:* ${name}`,
              `📞 *Phone:* ${phone}`,
              email   ? `📧 *Email:* ${email}`            : null,
              breed   ? `🐶 *Preferred Breed:* ${breed}`  : null,
              message ? `💬 *Message:* ${message}`        : null,
              ``,
              `_Sent via puppypoint.in contact form_`,
            ]
              .filter((l) => l !== null)
              .join("\n");

            const waUrl = `https://wa.me/919311131742?text=${encodeURIComponent(lines)}`;
            setSent(true);
            // Small delay so user sees success state before WhatsApp opens
            setTimeout(() => {
              window.open(waUrl, "_blank", "noopener,noreferrer");
              setSent(false);
            }, 800);
          }}
          className="relative overflow-hidden rounded-3xl glass-strong p-7 shadow-glow md:p-8"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-sky/20 blur-3xl" />
          <div className="relative space-y-4">
            <h3 className="font-display text-2xl font-bold">Send us an enquiry</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your Name" type="text" name="name" placeholder="Aarav Sharma" required />
              <Field label="Phone" type="tel" name="phone" placeholder="+91 ..." required />
            </div>
            <Field label="Email" type="email" name="email" placeholder="you@email.com" />
            <Field label="Preferred Breed" type="text" name="breed" placeholder="e.g. Golden Retriever" />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your home and what you're looking for..."
                className="w-full rounded-2xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] disabled:scale-100 disabled:opacity-80 ${
                sent ? "bg-whatsapp" : "bg-whatsapp"
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp…
                </>
              ) : (
                <>
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

/* ---------------- Section Header ---------------- */

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl px-4 text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </motion.div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border/60 bg-gradient-to-b from-transparent to-cream/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-sky shadow-glow">
              <PawPrint className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">The Puppy Point</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A luxury puppy boutique connecting Delhi NCR families with healthy, ethically raised companions for life.
          </p>
          <div className="mt-5 flex gap-2">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background">
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-xs font-semibold text-white">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#breeds" className="hover:text-foreground">Breeds</a></li>
            <li><a href="#why" className="hover:text-foreground">Why Us</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#testimonials" className="hover:text-foreground">Families</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">Popular Breeds</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Golden Retriever", "Labrador", "Pomeranian", "Shih Tzu", "Husky", "German Shepherd"].map((b) => (
              <li key={b}><a href="#breeds" className="hover:text-foreground">{b}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} The Puppy Point. Made with ♥ in Delhi NCR.</div>
          <div>Healthy puppies • Ethical breeders • Lifetime support</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating actions + back to top ---------------- */

function FloatingActions() {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-glow sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6" />
      </motion.a>
      <motion.a
        href={`tel:${PHONE}`}
        aria-label="Call now"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold/70 text-white shadow-glow sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.a>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-foreground shadow-soft transition hover:scale-110"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
