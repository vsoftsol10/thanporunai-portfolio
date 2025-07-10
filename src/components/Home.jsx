import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Facebook, Instagram, Droplets, Users, GraduationCap, Heart, TreePine, Home } from 'lucide-react';
import { MessageCircle, MessageSquare, PhoneCall } from 'lucide-react';
import SplitText from '../animations/SplitText';
import BlurText from '../animations/BlurText';
import FadeContent from '../animations/FadeContent';
import Logo from '../assets/thanporunai-logo.png';
import HomeSlideOne from '../assets/HomSlide1.webp';
import HomeSlideTwo from '../assets/HomeSlide2.webp';
import HomeSlideThree from '../assets/HomeSlide3.webp';
import HomeSlideFour from '../assets/HomeSlide4.webp';
import HomeSliderFive from '../assets/HomeSlide5.webp';
import HomeSliderSix from '../assets/HomeSlide6.webp';
import HomeSliderSeven from '../assets/HomeSlide7.webp';
import HomeSliderEight from '../assets/HomeSlide8.webp';
import HomeSliderNine from '../assets/HomeSlide9.webp';
import WhatWeDoOne from '../assets/whatwedo1.webp';
import WhatWeDoTwo from '../assets/whatwedo2.webp';
import WhatWeDoThree from '../assets/whatwedo3.webp';
import WhatWeDoFour from '../assets/whatwedo4.webp';
import WhatWeDoFive from '../assets/whatwedo5.webp';
import WhatWeDoSix from '../assets/slider16.webp';
import SlideOne from '../assets/slider1.webp';
import SlideFive from '../assets/slider5.webp';
import SlideSix from '../assets/slider6.webp';
import PhotoCarousel from '../animations/PhotoCarousel';
import aboutUs from '../assets/aboutbanner.webp';
import { desc } from 'framer-motion/client';
// import DustParticlesBackground from '../animations/DustParticlesBackground';
const PorunaiPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImageSlide, setHeroImageSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Hero section images
  const heroImages = [
    {
      id: 1,
      src: HomeSlideOne,
      alt: "River Cleaning Initiative"
    },
    {
      id: 2,
      src: HomeSlideTwo,
      alt: "Tree Plantation Drive"
    },
    {
      id: 3,
      src: HomeSlideThree,
      alt: "Cleaning plastic waste"
    },
    {
      id: 4,
      src: HomeSlideFour,
      alt: "Women Empowerment"
    },
    {
      id: 5,
      src: SlideFive,
      alt: "Planting Trees"
    },
    {
      id: 6,
      src: SlideSix,
      alt: "Community Outreach"
    },
     {
      id: 7,
      src: HomeSliderFive,
      alt: "Community Outreach"
    },
     {
      id: 8,
      src: HomeSliderSix,
      alt: "Community Outreach"
    },
     {
      id: 9,
      src: HomeSliderSeven,
      alt: "Community Outreach"
    },
     {
      id: 10,
      src: HomeSliderEight,
      alt: "Community Outreach"
    },
     {
      id: 11,
      src: HomeSliderNine,
      alt: "Community Outreach"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);



  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };
  // Sample service data with Tamil cultural context
  const services = [
    {
      id: 1,
      title: "River Cleaning Initiative",
      description: "21 நாட்களில் தாமிரபரணி நதியிலிருந்து குப்பைகளை அகற்றியது தண்பொருநை அறக்கட்டளை",
      image: WhatWeDoOne,
      category: "Environment",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Supporting for Sports Student",
      description: "தண்பொருநை அறக்கட்டளை, ராணி அண்ணா மகளிர் கல்லூரிக்கு எதிர்கால விளையாட்டு முன்னேற்றத்திற்காக வாலிபால் வலை வழங்கியுள்ளது.",
      image: WhatWeDoTwo,
      category: "Sports",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Tree Plantation Drive",
      description: "தண்பொருநை அறக்கட்டளை, மரக்கன்று நட்டு, சுற்றுச்சூழல் பாதுகாப்பில் தனது பங்களிப்பை அளித்தது.",
      image: WhatWeDoThree,
      category: "Plantation",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Marathon for Health",
      description: "ஒவ்வொரு 3 மாதத்திற்கும் ஒருமுறை, தண்பொருநை அறக்கட்டளை திருநெல்வேலி அண்ணா ஸ்டேடியத்தில் மாரத்தான் ஓட்டப்பந்தயத்தை நடத்துகிறது.",
      image: WhatWeDoFour,
      category: "Healthcare",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Food Distribution",
      description: "தண்பொருநை அறக்கட்டளை குழந்தைகளுக்காக சிறப்பு உணவுவிருந்து வழங்கியது.",
      image: WhatWeDoFive,
      category: "Community Service",
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Free Medical Camp",
      description: "தண்பொருநை அறக்கட்டளை இலவச மருத்துவ முகாமை நடத்தியுள்ளது.",
      image: SlideOne,
      category: "Medical",
      icon: <TreePine className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Free Medical Camp",
      description: "குப்பையை தொட்டியில் போடுங்கள் – சுற்றுச்சூழலை பாதுகாப்போம்!– திருநெல்வேலி மாநகராட்சி & தண்பொருநை அறக்கட்டளை",
      image: WhatWeDoSix,
      category: "Medical",
      icon: <TreePine className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "150+", label: "Lives Impacted" },
    { number: "100+", label: "Active Volunteers" }
  ];

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#about' },
    { name: 'What We Do', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  // Auto-slide functionality for hero images
  useEffect(() => {
  const heroTimer = setInterval(() => {
    setHeroImageSlide((prev) => (prev + 1) % heroImages.length);
  }, 1000); 
  return () => clearInterval(heroTimer);
}, []);


  // Auto-slide functionality for services
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(services.length / 2) - 1 : prev - 1
    );
  };

  const nextHeroSlide = () => {
    setHeroImageSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroSlide = () => {
    setHeroImageSlide((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const getVisibleServices = () => {
    const itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
    const startIndex = currentSlide * itemsPerSlide;
    return services.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (

    <div className="min-h-screen ">
      {/* <DustParticlesBackground /> */}
      {/* Navigation */}
      <header className="relative z-50 shadow-lg w-full">
      {/* Main Header */}
      <div className="flex min-h-[80px] sm:min-h-[100px] w-full">
        {/* Left Section - Logo + Name */}
        <div className="bg-green-600 px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1 lg:flex-none lg:w-[45%]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex-shrink-0">
            <img
              src={Logo}
              alt="தன்பொருணை அமைப்பு Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-tight">
            தண்பொருநை அறக்கட்டளை
          </h1>
        </div>

        {/* Right Section - Navigation */}
        <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-end flex-1 lg:flex-none lg:w-[55%]">
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-green-700 font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-yellow-400 border-t border-yellow-500 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-3 text-gray-800 hover:bg-yellow-300 rounded-md font-medium transition-colors duration-200 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-5 min-h-screen overflow-hidden flex items-center">
        {/* Full-screen background image slider */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImages[heroImageSlide].src}
            alt={heroImages[heroImageSlide].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Overlay 1: Colored gradient - lower opacity */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-green-700/40 to-teal-600/50" />

          {/* Overlay 2: Darken top and bottom - more transparent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        {/* Navigation Arrows - Fixed position */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 z-20"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 z-20"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators - Fixed position */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroImageSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${heroImageSlide === index ? 'bg-amber-400' : 'bg-white/50'
                }`}
            />
          ))}
        </div>

        {/* Image caption */}
        <div className="absolute bottom-16 md:bottom-20 left-4 md:left-8 text-white z-20">
          <h3 className="text-base md:text-lg font-semibold bg-black/30 px-3 py-1 rounded">
            {heroImages[heroImageSlide].caption}
          </h3>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <div className="mb-6">
                <BlurText
                  text="நல்லதொரு நாளுக்காக, இன்று ஒரு நற்செயல்!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="mb-6 text-4xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-center"
                />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-green-100 leading-relaxed drop-shadow-lg">
                Dedicated to social service through river cleaning, women welfare,
                education support, and community development initiatives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 inline-block text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Join Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column - Stats Grid */}
      <section className="w-full py-16 px-6 md:px-12">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center justify-items-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-64"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-base md:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Who We Are Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SplitText
              text="Who We Are"
              className="text-4xl font-bold text-green-700 mb-4"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <span style={{ fontWeight: 'bold' }}>Thanporunai Arakattalai</span> is a passionate social welfare organization committed to creating a cleaner, safer, and more conscious society. Rooted in the values of service and sustainability, our foundation brings together individuals and volunteers who care deeply about the environment and the well-being of future generations.
            </p>
          </div>

          {/* Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Clean Environment Initiatives</h3>
              <p className="text-gray-600">
                We organize community clean-up drives to remove plastic waste and restore the beauty of
                riversides and public spaces. Our mission is to reduce pollution and protect local ecosystems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Green Earth Movement</h3>
              <p className="text-gray-600">
                Through regular tree planting campaigns, we promote environmental awareness and improve air quality.
                Each tree is a step toward a healthier, greener future.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Social Awareness & Upliftment</h3>
              <p className="text-gray-600">
                We support children and youth through education, anti-drug awareness campaigns, and community outreach - nurturing
                safer, stronger, and more conscious societies.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-12">
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <h3 className="text-3xl font-bold text-green-700 mb-4">Our Leadership Team</h3>
              </FadeContent>
              <p className="text-lg text-gray-600">
                Meet the dedicated individuals who lead our mission for a better tomorrow
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Founder */}
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Founder
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">R. Selvarani</h4>
                <p className="text-green-600 font-medium mb-1">B.Sc, Founder & Visionary</p>
                <p className="text-gray-600 text-sm">
                  Leading our organization with passion and dedication to create positive social change
                </p>
              </div>

              {/* Managing & Financial Trustee */}
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Trustee
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">M. Nagaraj</h4>
                <p className="text-amber-600 font-medium mb-1">
                  MBA,&nbsp;
                  <span className="relative inline-block">
                    <span className="absolute left-0 right-0 top-0 h-[1px] bg-amber-600 -translate-y-1"></span>
                    LLB (Hons)
                  </span>
                  &nbsp;– Managing & Financial Trustee
                </p>
                <p className="text-gray-600 text-sm">
                  Overseeing operations and ensuring transparent financial management
                </p>
              </div>

              {/* Legal Advisor */}
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Legal Advisor
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">M. Vignesh</h4>
                <p className="text-blue-600 font-medium mb-1">B.Com, LLB (Hons) – Legal Advisor</p>
                <p className="text-gray-600 text-sm">
                  Providing legal guidance and ensuring compliance with all regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img
            src={aboutUs}
            alt="Banner"
            className="w-full max-w-5xl h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SplitText
              text="What We Do"
              className="text-4xl font-bold text-green-700 mb-4"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <p className="text-xl text-gray-600">
              At <span style={{ fontWeight: 'bold' }}>Thanporunai Arakattalai</span>, we believe that small acts of service can lead to big change.
              Our foundation is committed to uplifting communities, protecting nature, and supporting the next generation through hands-on social initiatives.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {getVisibleServices().map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-100 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(services.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-100 ${currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Image Slider */}
      <PhotoCarousel />
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get Involved</h2>
          </div>

          {/* Logo and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Logo */}
            <div className="flex flex-col items-center lg:items-center">
              <img
                src={Logo} // replace with your logo import
                alt="Thanporunai Logo"
                className="w-48 h-48 object-contain"
              />

              <p className="text-center text-white text-xl font-bold mt-4">
                சிறிய செயலும் சமூக மாற்றத்திற்கு பெரிய தொடக்கம் ஆகும்.
              </p>
            </div>

            {/* Right: Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-green-100 mb-6 text-lg">
                Be part of the change you want to see in the world.
                Join us in our mission to create a better tomorrow through social service.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+91 77089 27245</span>
                  <span>+91 96551 62224</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>admin@thanporunaiarakattalai.com</span>
                </div>
                <div className="flex gap-3 items-start text-sm sm:text-base leading-relaxed">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-white">
                    48/2C1, Xavier's Colony, South Bye Pass Road, <br />
                    Near Passport Office, Tirunelveli,<br />
                    Tamil Nadu - 627005
                  </div>
                </div>

              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61576676500363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                <a
                  href="https://www.instagram.com/thanporunai_arakattalai?igsh=eGU3dGIwNTZrcHA2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  href="https://wa.me/918428778159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 text-green-500 transition duration-200"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-200">
            © 2025 Thanporunai Arakattalai Organization. All rights reserved.
          </p>
        </div>
      </footer>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default PorunaiPortfolio;