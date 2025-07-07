import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Timer,
  Volume2,
  Shield,
  Zap,
  Star,
  Play,
  Pause,
  SkipForward,
  Download,
  Apple,
  Smartphone,
  Monitor,
} from "lucide-react";
import Link from "next/link";

export default function FocusHelperLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Distraction Blocker
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#download"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Download
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-6 bg-blue-50 text-blue-700 border-blue-200 rounded-full px-4 py-2"
          >
            ✨ Now with AI-powered focus insights
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Focus Like Never
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Before
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your workspace into a distraction-free zone with ambient
            sounds, focus timers, and intelligent productivity insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Demo */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Timer className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Deep Work Session
                      </h3>
                      <p className="text-gray-300 text-sm">25:00 remaining</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 rounded-full"
                    >
                      <Pause className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 rounded-full"
                    >
                      <SkipForward className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4 text-center">
                      <Volume2 className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-white text-sm">Rain Sounds</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4 text-center">
                      <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-white text-sm">Block Distractions</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4 text-center">
                      <Zap className="w-6 h-6 text-white mx-auto mb-2" />
                      <p className="text-white text-sm">Focus Mode</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                stay focused
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to eliminate distractions and boost
              your productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pomodoro Timer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built-in focus timer with customizable work and break
                  intervals. Track your productivity patterns over time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ambient Sounds
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Curated collection of focus-enhancing sounds including rain,
                  coffee shops, and nature sounds.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Website Blocker
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically block distracting websites during focus
                  sessions. Customize your blocklist.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get personalized productivity insights and recommendations
                  based on your focus patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Focus Modes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Multiple focus modes for different types of work: deep work,
                  creative, study, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Progress Tracking
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed analytics on your focus sessions, productivity
                  trends, and goal achievement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Loved by thousands of focused professionals
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Distraction Blocker completely transformed my productivity.
                  The ambient sounds and timer help me get into deep work mode
                  instantly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    SM
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      Sarah Mitchell
                    </p>
                    <p className="text-gray-500 text-sm">Product Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The website blocker feature is a game-changer. I can finally
                  focus on my writing without getting distracted by social
                  media."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    JD
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">James Davis</p>
                    <p className="text-gray-500 text-sm">Content Writer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Available on all your devices
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Sync your focus sessions across Mac, iPhone, iPad, and web. Start on
            one device, continue on another.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white rounded-2xl px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Apple className="w-6 h-6 mr-3" />
              Download for Mac
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50 bg-transparent"
            >
              <Smartphone className="w-5 h-5 mr-3" />
              Get iOS App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50 bg-transparent"
            >
              <Monitor className="w-5 h-5 mr-3" />
              Use Web App
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Distraction Blocker</span>
            </div>

            <div className="flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Distraction Blocker. All rights reserved. Made with ❤️
              for focused minds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
