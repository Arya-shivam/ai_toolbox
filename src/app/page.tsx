'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Footer from '@/components/ui/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, PlayCircle, ArrowRight, ChevronDown, Github, Star, Sparkles, Database, Zap } from 'lucide-react';
import { Twitter, Linkedin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: "Emily Richardson",
    role: "AI Product Manager",
    content: "This platform has revolutionized how I discover and track AI tools. The real-time updates are invaluable for staying ahead in the industry.",
    avatar: "/api/placeholder/48/48"
  },
  // ... other testimonials
];

const features = [
  {
    title: "Auto-Save from Social Media",
    description: "Automatically capture and save AI tools mentioned across your feeds.",
    icon: <Database className="w-6 h-6" />,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Real-time Updates",
    description: "Stay updated with the latest AI tools and trends as they happen.",
    icon: <Zap className="w-6 h-6" />,
    image: "/api/placeholder/600/400"
  },
  {
    title: "Smart Recommendations",
    description: "Get personalized AI tool recommendations based on your interests.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "/api/placeholder/600/400"
  }
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navbar */}
      <nav className="fixed w-[90%] left-1/2 -translate-x-1/2 top-5 bg-white/90 backdrop-blur-md z-50 rounded-2xl shadow-lg border border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AITracker
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">News</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Search</Link>
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Sign Up
              </Button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 w-[90%] left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-4 space-y-3">
          <Link href="#" className="block p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Home</Link>
          <Link href="#" className="block p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">News</Link>
          <Link href="#" className="block p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Search</Link>
          <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <div className={`mb-6 inline-block transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="px-6 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium inline-flex items-center gap-2">
                <Star className="w-4 h-4" />
                Launching Soon - Join the Waitlist
              </span>
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-6 transition-all duration-700 delay-100 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Discover & Track AI Tools in Real-Time
            </h1>

            <p className={`text-xl text-gray-600 mb-12 leading-relaxed transition-all duration-700 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Stay at the forefront of AI innovation with our intelligent tracking system.
              Never miss a new AI tool or update again.
            </p>

            <div className={`flex flex-wrap gap-6 justify-center transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full bg-white text-gray-700 border-gray-200 hover:bg-gray-50 px-8 py-6 text-lg font-medium transition-all transform hover:scale-105">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg">
            Experience a new way of discovering and tracking AI tools
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <Button className="rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 group">
                  <div className="relative rounded-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16">
            What Our Users Say
          </h2>
          
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 ring-2 ring-blue-100">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </Avatar>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your AI Tool Discovery?
          </h2>
          <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
            Join thousands of professionals who are already staying ahead with AITracker.
          </p>
          <Button className="rounded-full bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 transition-all transform hover:scale-105">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
} 
      