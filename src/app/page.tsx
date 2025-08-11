"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Focus,
  Timer,
  Target,
  Zap,
  Shield,
  Brain,
  Clock,
  TrendingUp,
  Users,
  Star,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

interface NavItem {
  name: string;
  href: string;
}

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
}

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Features", href: "#features" },
    { name: "Preview", href: "#preview" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopLayoutClasses = isScrolled
    ? "md:grid md:grid-cols-3 md:items-center md:gap-x-32"
    : "md:flex md:items-center md:justify-between";

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl"
          : "bg-transparent px-6 py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "100%",
        maxWidth: isScrolled ? "1200px" : "1100px",
      }}
    >
      {/* Mobile header */}
      <div className="relative flex items-center justify-between py-3 md:hidden">
        <motion.div
          className="text-xl font-bold text-white flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          Focus Helper
        </motion.div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Desktop header */}
      <div className={`relative hidden ${desktopLayoutClasses} py-3 lg:py-4`}>
        {/* Left: Brand */}
        <motion.div
          className="text-xl font-bold text-white flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          Focus Helper
        </motion.div>

        {/* Center: Links */}
        <div
          className={`hidden md:flex items-center justify-center ${
            isScrolled ? "space-x-12" : "space-x-8"
          } transition-all duration-300`}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-end">
          <Button
            variant="secondary"
            size="lg"
            className="bg-black/40 backdrop-blur-lg border border-white/10 text-white hover:bg-black/60 hover:border-white/20 font-medium transition-all duration-300"
          >
            GitHub
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 pt-4 border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="bg-black/40 backdrop-blur-lg border border-white/10 text-white hover:bg-black/60 hover:border-white/20 rounded-full font-medium w-fit"
            >
              GitHub
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      style={{ opacity, scale }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Master Your
          <span className="text-primary block">Focus</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your productivity with AI-powered focus techniques and
          distraction blocking
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/app">
            <ShimmerButton
              borderRadius="none"
              shimmerSize="2px"
              className="shadow-2xl [&>div:nth-child(3)]:shadow-none [&>div:nth-child(3)]:group-hover:shadow-none [&>div:nth-child(3)]:group-active:shadow-none hover:bg-background"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg hover:text-background">
                Start Focusing
              </span>
            </ShimmerButton>
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </motion.section>
  );
};

const FeaturesSection = () => {
  const features: FeatureCard[] = [
    {
      icon: <Focus className="w-8 h-8" />,
      title: "Deep Focus Mode",
      description:
        "Block distractions and enter a state of deep concentration with our AI-powered focus assistant.",
      stats: [
        { label: "Focus Time", value: "4.2hrs avg" },
        { label: "Productivity", value: "+85%" },
      ],
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Smart Pomodoro",
      description:
        "Adaptive timing based on your work patterns and energy levels throughout the day.",
      stats: [
        { label: "Sessions", value: "12/day avg" },
        { label: "Completion", value: "94%" },
      ],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description:
        "Set and achieve your daily focus goals with intelligent progress tracking and insights.",
      stats: [
        { label: "Goals Met", value: "89%" },
        { label: "Streak", value: "21 days" },
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Activation",
      description:
        "One-click focus mode that instantly blocks distractions and optimizes your environment.",
      stats: [
        { label: "Activation", value: "<1 sec" },
        { label: "Apps Blocked", value: "50+" },
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Distraction Shield",
      description:
        "Advanced AI that learns your distraction patterns and proactively blocks them.",
      stats: [
        { label: "Blocked", value: "1.2k/day" },
        { label: "Accuracy", value: "96%" },
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Focus Analytics",
      description:
        "Detailed insights into your focus patterns, peak hours, and productivity trends.",
      stats: [
        { label: "Data Points", value: "10M+" },
        { label: "Insights", value: "Daily" },
      ],
    },
  ];

  return (
    <section id="features" className="py-32 bg-muted/25">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Focus Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to eliminate distractions and maximize your
            productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                {feature.stats && (
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "3x Productivity Boost",
      description:
        "Users report an average 300% increase in productive work hours within the first week.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Save 2+ Hours Daily",
      description:
        "Eliminate time wasted on distractions and focus on what truly matters.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Join 50k+ Users",
      description:
        "Trusted by professionals, students, and teams worldwide for better focus.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "4.9/5 Rating",
      description:
        "Consistently rated as the best focus app by our satisfied users.",
    },
  ];

  return (
    <section id="preview" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose FocusHelper?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Master Your Focus?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and experience the power of
            distraction-free productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-8">
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FocusHelperLanding = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default FocusHelperLanding;
