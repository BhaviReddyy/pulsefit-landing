import { useState } from 'react';
import { Activity, Brain, TrendingUp, Zap, Target, Users, CheckCircle2, Star, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { Input } from '@/react-app/components/ui/input';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Fitness Tracking</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Smart Fitness for<br />Modern Living
            </h1>
            
            <p className="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your fitness journey with AI-powered insights, personalized coaching, and intelligent progress tracking. PulseFit adapts to your lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Beta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent h-32 bottom-0 z-10"></div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                  <div>
                    <Activity className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-purple-200">Active Users</div>
                  </div>
                  <div>
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <div className="text-3xl font-bold">2M+</div>
                    <div className="text-sm text-purple-200">Workouts Tracked</div>
                  </div>
                  <div>
                    <Target className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm text-purple-200">Goal Success</div>
                  </div>
                  <div>
                    <Star className="w-8 h-8 mx-auto mb-2 opacity-80" />
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="text-sm text-purple-200">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Intelligent Features That Adapt to You
            </h2>
            <p className="text-lg text-muted-foreground">
              Powered by advanced AI technology, PulseFit delivers personalized insights and coaching that evolve with your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border border-purple-100 dark:border-purple-900/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get intelligent recommendations based on your activity patterns, recovery needs, and personal fitness goals.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Smart Activity Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically detect and log your workouts with precision. Track running, cycling, swimming, and 50+ other activities.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-100 dark:border-green-900/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Personalized Coaching</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive tailored workout plans and real-time guidance that adapts to your performance and recovery status.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-100 dark:border-orange-900/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Progress Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize your improvements with comprehensive charts, trends, and milestone achievements over time.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-100 dark:border-pink-900/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Seamless Device Sync</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with popular fitness devices and wearables. Your data syncs automatically across all platforms.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Goal Setting & Motivation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set ambitious goals and stay motivated with smart reminders, achievement badges, and community challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Begin your fitness transformation today. It only takes minutes to set up.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 text-white font-bold text-2xl mb-6 shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Sign Up</h3>
                  <p className="text-muted-foreground">
                    Create your free account in seconds. No credit card required for the beta program.
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent -translate-x-1/2 z-0"></div>
              </div>

              <div className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-2xl mb-6 shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Connect Your Device</h3>
                  <p className="text-muted-foreground">
                    Link your fitness tracker or smartwatch. PulseFit works with all major brands.
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent -translate-x-1/2 z-0"></div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white font-bold text-2xl mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Track & Improve</h3>
                <p className="text-muted-foreground">
                  Start tracking your activities and watch your AI coach help you reach new milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Why Choose PulseFit?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've reimagined fitness tracking to focus on what really matters: sustainable progress, personalized guidance, and real results.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Personalized AI Insights</h4>
                      <p className="text-muted-foreground">Get recommendations tailored to your unique fitness profile and goals.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">AI-Driven Coaching</h4>
                      <p className="text-muted-foreground">Receive expert guidance that adapts to your performance and recovery.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Comprehensive Progress Tracking</h4>
                      <p className="text-muted-foreground">Monitor every aspect of your fitness journey with beautiful analytics.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Convenient & Motivating</h4>
                      <p className="text-muted-foreground">Stay on track with smart notifications and achievement celebrations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/40 dark:to-blue-950/40 rounded-3xl p-12 border border-purple-200 dark:border-purple-800">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                      <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                      <div className="text-3xl font-bold text-foreground">+127%</div>
                      <div className="text-sm text-muted-foreground">Avg. Improvement</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                      <Target className="w-8 h-8 text-blue-600 mb-2" />
                      <div className="text-3xl font-bold text-foreground">89%</div>
                      <div className="text-sm text-muted-foreground">Reach Goals</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                      <Activity className="w-8 h-8 text-purple-600 mb-2" />
                      <div className="text-3xl font-bold text-foreground">15+</div>
                      <div className="text-sm text-muted-foreground">Devices Supported</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                      <Zap className="w-8 h-8 text-orange-600 mb-2" />
                      <div className="text-3xl font-bold text-foreground">24/7</div>
                      <div className="text-sm text-muted-foreground">AI Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Loved by Fitness Enthusiasts
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of users who've transformed their fitness journey with PulseFit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "PulseFit's AI coaching has been a game-changer. It's like having a personal trainer who knows exactly what I need every day. I've never been more consistent with my workouts."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Marathon Runner</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The progress tracking is incredibly detailed yet easy to understand. I love seeing my improvements visualized. It keeps me motivated to push harder every week."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-foreground">James Chen</div>
                  <div className="text-sm text-muted-foreground">Fitness Enthusiast</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "As a busy professional, I needed something that adapts to my schedule. PulseFit does exactly that. The personalized recommendations fit perfectly into my lifestyle."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold text-lg">
                  EP
                </div>
                <div>
                  <div className="font-semibold text-foreground">Emily Parker</div>
                  <div className="text-sm text-muted-foreground">Yoga Instructor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Sign-up Section */}
      <section id="signup" className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join the Beta Program
            </h2>
            <p className="text-lg text-purple-100 mb-10">
              Be among the first to experience the future of fitness tracking. Limited spots available for early access.
            </p>

            {isSubmitted ? (
              <div className="bg-green-500 text-white rounded-xl p-6 shadow-xl">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                <p>We'll send you an invite as soon as beta access opens.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-14 px-6 text-lg bg-white/90 border-white/20 focus:bg-white rounded-xl"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 h-14 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    Get Early Access
                  </Button>
                </div>
                {error && (
                  <p className="text-red-200 text-sm mt-3 text-left">{error}</p>
                )}
                <p className="text-purple-200 text-sm mt-4">
                  No credit card required. Free for beta users.
                </p>
              </form>
            )}

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-purple-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Early Access Features</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Priority Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Lifetime Discount</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Start your free beta trial today and experience intelligent fitness tracking that adapts to your lifestyle.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Beta Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg"></div>
                <span className="font-bold text-xl text-foreground">PulseFit</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Smart fitness for modern living. Transform your health with AI-powered insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press Kit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PulseFit. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
