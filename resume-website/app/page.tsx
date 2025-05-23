"use client"

import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Github,
  TrendingUp,
  Shield,
  BarChart3,
  Database,
  Brain,
  Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-pink-200">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Betelhem Yinges
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-medium text-pink-700 hover:text-pink-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button
            size="sm"
            className="hidden bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 md:flex transform hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </header>

      <main className="container px-4 py-8 mx-auto md:py-12">
        {/* Hero Section */}
        <section className="grid gap-6 mb-12 md:grid-cols-2 md:gap-12 md:mb-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent md:text-6xl">
                Betelhem Yinges
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <BarChart3 className="w-6 h-6 text-pink-500" />
                <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
            <h2 className="mb-6 text-2xl font-medium text-pink-700 md:text-3xl">Data Alchemist ✨</h2>
            <div className="mb-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg border-l-4 border-pink-500 italic text-pink-800">
              <p className="text-lg">
                "If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and five minutes
                thinking about solutions." — a quote often attributed to Albert Einstein.
              </p>
            </div>
            <p className="mb-8 text-lg text-pink-800 leading-relaxed">
              I couldn't agree more with Einstein. The biggest breakthroughs don't come from rushing into analysis—they
              come from slowing down and asking why it matters. As a Data Alchemist, I focus on deeply understanding the
              problem space before touching the data. I work at the intersection of curiosity, context, and creativity,
              transforming raw, messy datasets into visual stories that not only clarify what's happening—but why it's
              happening and what we can do about it. Whether it's through visualization, statistical modeling, or
              thoughtful design, my goal is always the same: to turn noise into knowledge, and data into decisions that
              drive impact. 🚀
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm text-pink-700 border-pink-300 hover:bg-pink-100 transition-colors"
              >
                🐍 Python
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm text-pink-700 border-pink-300 hover:bg-pink-100 transition-colors"
              >
                🗃️ SQL
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm text-pink-700 border-pink-300 hover:bg-pink-100 transition-colors"
              >
                📊 Tableau
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm text-pink-700 border-pink-300 hover:bg-pink-100 transition-colors"
              >
                ☁️ Azure
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm text-pink-700 border-pink-300 hover:bg-pink-100 transition-colors"
              >
                📈 Data Visualization
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm text-pink-700 border-pink-300 hover:bg-pink-100 transition-colors"
              >
                🔄 ETL
              </Badge>
            </div>
            <div className="flex flex-col gap-3 mb-8 md:flex-row">
              <div className="flex items-center gap-2 text-sm text-pink-700">
                <Mail className="w-4 h-4" />
                <span>Byinges1@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-pink-700">
                <Phone className="w-4 h-4" />
                <span>(206) 593-8399</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="text-pink-700 border-pink-300 hover:bg-pink-100 transform hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="mt-4 w-full md:w-auto text-pink-700 border-pink-300 hover:bg-pink-100 transform hover:scale-105 transition-all"
                onClick={() => window.open("https://yourportfolio.com", "_blank")}
              >
                <Globe className="w-4 h-4 mr-2" />
                Visit My Portfolio
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-2xl transform hover:scale-105 transition-transform">
              <img src="/images/profile.png" alt="Betelhem Yinges" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✨</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              About Me 🌟
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-800">My Story</h3>
                </div>
                <p className="mb-4 text-pink-800">
                  I'm a Data Analyst and Visualization Specialist with a strong foundation in data visualization, data
                  modeling, and engineering. I'm passionate about transforming raw data into designed executive
                  dashboards and developing solutions to bridge the gap between available resources and community needs.
                </p>
                <p className="mb-4 text-pink-800">
                  With experience at organizations like the Latino Educational Training Institute and Fizz.social, I've
                  developed skills in analyzing demographic data, building regression models, and delivering insights
                  through interactive dashboards.
                </p>
                <p className="text-pink-800">
                  I'm currently pursuing a Bachelor of Science in Data Visualization and Analytics with a Minor in
                  Computer Science at the University of Washington, expected to graduate in 2025.
                </p>
              </CardContent>
            </Card>
            <Card className="border-pink-200 bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-800">My Approach</h3>
                </div>
                <ul className="space-y-3 text-pink-800">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                      1
                    </span>
                    <span>Data-driven decision making 📊</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                      2
                    </span>
                    <span>Transforming complex data into actionable insights 💡</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                      3
                    </span>
                    <span>Building scalable data solutions 🏗️</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                      4
                    </span>
                    <span>Continuous learning and skill development 📚</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                      5
                    </span>
                    <span>Collaborative problem-solving 🤝</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              Work Experience 💼
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="space-y-8">
            <Card className="border-pink-200 bg-gradient-to-r from-white to-pink-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-800">Data Analyst & Consultant</h3>
                      <p className="text-pink-600 font-medium">Latino Educational Training Institute</p>
                    </div>
                  </div>
                  <div className="text-sm text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    <p>June 2023 - Present</p>
                    <p>Lynwood, WA</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-pink-800 list-disc list-inside">
                  <li>
                    Analyze Latino demographic, healthcare, and business data to identify service gaps impacting 50,000+
                    Snohomish County residents 📈
                  </li>
                  <li>
                    Build regression models in Python predicting a 20% rise in healthcare demand over 5 years; clean and
                    join data from 10+ sources using SQL 🔍
                  </li>
                  <li>
                    Deliver insights via interactive Tableau dashboards and ArcGIS maps to 100+ policymakers and
                    stakeholders for data-driven funding decisions 🗺️
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-gradient-to-r from-white to-purple-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-800">Data Strategy & Insights Lead</h3>
                      <p className="text-pink-600 font-medium">Fizz.social (Contract)</p>
                    </div>
                  </div>
                  <div className="text-sm text-pink-600 bg-purple-100 px-3 py-1 rounded-full">
                    <p>March 2023 - January 2025</p>
                    <p>Remote, Palo Alto, CA</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-pink-800 list-disc list-inside">
                  <li>
                    Built and scaled data pipelines to automate A/B testing and track engagement metrics, improving
                    campaign experimentation efficiency by 40% 🚀
                  </li>
                  <li>
                    Designed and launched executive dashboards to surface customer sentiment and key performance
                    indicators, influencing product and marketing roadmaps 📊
                  </li>
                  <li>
                    Fostered stronger alignment between product, engineering, and design through data-driven strategy
                    sessions, enhancing decision-making across teams 🤝
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-gradient-to-r from-white to-pink-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-800">Front Desk Receptionist</h3>
                      <p className="text-pink-600 font-medium">
                        University of Washington Bothell - Activities & Recreation Center
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    <p>September 2022 - Present</p>
                    <p>Bothell, WA</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-pink-800 list-disc list-inside">
                  <li>
                    Manage daily facility operations and deliver customer service in a fast-paced, high-traffic
                    environment 🏃‍♀️
                  </li>
                  <li>
                    Use Fusion software to track equipment check-in/out and respond to guest inquiries efficiently 💻
                  </li>
                  <li>
                    Coordinate internal communications and scheduling using Microsoft Teams, Excel, and Outlook 📅
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-gradient-to-r from-white to-purple-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-800">Web Design Intern</h3>
                      <p className="text-pink-600 font-medium">Dear Digital Equity</p>
                    </div>
                  </div>
                  <div className="text-sm text-pink-600 bg-purple-100 px-3 py-1 rounded-full">
                    <p>July 2023 - September 2023</p>
                    <p>Bothell, WA</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-pink-800 list-disc list-inside">
                  <li>A project by University of Washington Bothell's students Washington state's digital divide 🌐</li>
                  <li>
                    Implemented user behavior analytics to optimize engagement, increasing traffic to digital inclusion
                    resources by 15% 📈
                  </li>
                  <li>
                    Built secure and accessible interfaces with HTML/CSS/JS and improved digital resource access by 10%
                    🔒
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              Skills & Expertise 🛠️
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <Tabs defaultValue="languages">
            <TabsList className="mb-6 bg-gradient-to-r from-pink-100 to-purple-100 p-1 rounded-xl">
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all"
              >
                💻 Languages
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all"
              >
                📊 Data Tools
              </TabsTrigger>
              <TabsTrigger
                value="platforms"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all"
              >
                ☁️ Platforms
              </TabsTrigger>
              <TabsTrigger
                value="competencies"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all"
              >
                🎯 Core Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="languages">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="🐍 Python (Pandas, NumPy, Scikit-learn)" />
                <SkillCard name="🗃️ SQL (PostgreSQL, MySQL)" />
                <SkillCard name="📊 R" />
                <SkillCard name="🌐 HTML" />
                <SkillCard name="🎨 CSS" />
                <SkillCard name="⚡ JavaScript" />
              </div>
            </TabsContent>
            <TabsContent value="tools">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="📈 Tableau" />
                <SkillCard name="📊 Power BI" />
                <SkillCard name="🗺️ ArcGIS" />
                <SkillCard name="📊 RStudio" />
                <SkillCard name="📓 Jupyter Notebook" />
                <SkillCard name="☁️ Google Colab" />
                <SkillCard name="🐍 Anaconda" />
                <SkillCard name="☁️ Azure Data Studio" />
                <SkillCard name="🔍 Google BigQuery" />
              </div>
            </TabsContent>
            <TabsContent value="platforms">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="⚡ Apache Spark" />
                <SkillCard name="🐘 Apache Hadoop" />
                <SkillCard name="☁️ AWS" />
                <SkillCard name="🔷 Azure" />
                <SkillCard name="🐙 Git/GitHub" />
                <SkillCard name="🎨 Figma" />
                <SkillCard name="🔄 CI/CD" />
                <SkillCard name="🧪 Test-Driven Development" />
                <SkillCard name="📋 Microsoft Office" />
              </div>
            </TabsContent>
            <TabsContent value="competencies">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="🧹 Data Cleaning & Wrangling" />
                <SkillCard name="📊 Statistical Modeling" />
                <SkillCard name="🤖 Machine Learning" />
                <SkillCard name="📈 Data Visualization" />
                <SkillCard name="📋 Project Management" />
                <SkillCard name="⚠️ Risk Assessment" />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              Education 🎓
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="space-y-6">
            <Card className="border-pink-200 bg-gradient-to-r from-white to-pink-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-800">
                        Bachelor of Science in Data Visualization and Analytics
                      </h3>
                      <p className="text-pink-600 font-medium">University of Washington</p>
                      <p className="mt-2 text-pink-700">Minor in Computer Science 💻</p>
                    </div>
                  </div>
                  <div className="text-sm text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    <p>2021 - 2025 (Expected)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              Certifications 🏆
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-800">SQL for Data Analysis</h3>
                    <p className="text-pink-600 font-medium">LinkedIn Learning</p>
                    <div className="text-sm text-pink-600 bg-blue-100 px-3 py-1 rounded-full inline-block mt-2">
                      September 2024
                    </div>
                  </div>
                </div>
                <p className="text-pink-700">
                  Querying, filtering, and aggregating data, data visualization & reporting 📊
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-800">AT&T 2024 Tech Academy</h3>
                    <div className="text-sm text-pink-600 bg-orange-100 px-3 py-1 rounded-full inline-block mt-2">
                      July 2024
                    </div>
                  </div>
                </div>
                <p className="text-pink-700">
                  Hands-on experience in cloud computing, machine learning/AI, statistical analysis & risk assessment,
                  project management & cross-functional collaboration, and big data, focus on data-driven solutions ☁️🤖
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              Featured Projects 🚀
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="grid grid-cols-3 gap-2 opacity-60">
                      <div className="w-8 h-8 bg-white/20 rounded"></div>
                      <div className="w-8 h-8 bg-white/30 rounded"></div>
                      <div className="w-8 h-8 bg-white/20 rounded"></div>
                      <div className="w-8 h-8 bg-white/30 rounded"></div>
                      <div className="w-8 h-8 bg-white/40 rounded"></div>
                      <div className="w-8 h-8 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-pink-800 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Fraud Detection System for Financial Transaction
                </h3>
                <p className="mb-4 text-pink-700">
                  A machine learning-based fraud detection system using Python (RandomForest) and SQL to classify
                  financial transactions with high accuracy. 🎯
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-pink-200 text-pink-800">🐍 Python</Badge>
                  <Badge className="bg-pink-200 text-pink-800">🗃️ SQL</Badge>
                  <Badge className="bg-pink-200 text-pink-800">🐘 PostgreSQL</Badge>
                  <Badge className="bg-pink-200 text-pink-800">🤖 Machine Learning</Badge>
                </div>
                <ul className="mt-4 mb-4 space-y-2 text-pink-700 list-disc list-inside">
                  <li>Processed large scale transaction data from a PostgreSQL database 📊</li>
                  <li>Extracted key features like transaction amount, time, and user behavior for analysis 🔍</li>
                  <li>Achieved high accuracy in identifying fraudulent transactions ✅</li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-pink-700 border-pink-300 hover:bg-pink-100 transform hover:scale-105 transition-all"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-pink-200 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="flex items-end gap-1 opacity-60">
                      <div className="w-4 h-8 bg-white/30 rounded-t"></div>
                      <div className="w-4 h-12 bg-white/40 rounded-t"></div>
                      <div className="w-4 h-6 bg-white/30 rounded-t"></div>
                      <div className="w-4 h-16 bg-white/50 rounded-t"></div>
                      <div className="w-4 h-10 bg-white/40 rounded-t"></div>
                      <div className="w-4 h-14 bg-white/30 rounded-t"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📈</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-pink-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Immigration Trends Analysis (1980–2021)
                </h3>
                <p className="mb-4 text-pink-700">
                  Comprehensive analysis of U.S. immigration trends using Python to uncover patterns in LPR admissions,
                  noncitizen removals, apprehensions, and refugee arrivals. 🌍
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-200 text-purple-800">🐍 Python</Badge>
                  <Badge className="bg-purple-200 text-purple-800">🐼 Pandas</Badge>
                  <Badge className="bg-purple-200 text-purple-800">🎨 Seaborn</Badge>
                  <Badge className="bg-purple-200 text-purple-800">🤖 Scikit-learn</Badge>
                </div>
                <ul className="mt-4 mb-4 space-y-2 text-pink-700 list-disc list-inside">
                  <li>Applied time series analysis, clustering (KMeans), and linear regression 📊</li>
                  <li>Assessed the impact of policy changes and global events 🌐</li>
                  <li>
                    Created visualizations to communicate insights on enforcement phases and demographic shifts 📈
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-pink-700 border-pink-300 hover:bg-pink-100 transform hover:scale-105 transition-all"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-3xl mb-2">
              Let's Connect! 💬
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  Get in Touch
                </h3>
                <p className="mb-6 text-pink-800">
                  I'm always open to discussing new projects, data analysis opportunities, or ways to collaborate on
                  interesting data visualization challenges. Let's create something amazing together! ✨
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                    <Mail className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-800">Byinges1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                    <Phone className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-800">(206) 593-8399</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                    <Globe className="w-5 h-5 text-pink-600" />
                    <a href="#" className="text-pink-800 hover:text-pink-600">
                      Portfolio 🌐
                    </a>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                    <Linkedin className="w-5 h-5 text-pink-600" />
                    <a href="#" className="text-pink-800 hover:text-pink-600">
                      LinkedIn 💼
                    </a>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
                    <Github className="w-5 h-5 text-pink-600" />
                    <a href="#" className="text-pink-800 hover:text-pink-600">
                      GitHub 🐙
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-pink-200 bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✉️</span>
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-pink-800">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-pink-800">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-pink-800">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-pink-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all">
                    Send Message 🚀
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-pink-700 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container px-4 mx-auto">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Betelhem Yinges. All rights reserved.
            <span className="text-lg">💖</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ name }: { name: string }) {
  return (
    <Card className="border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:shadow-lg hover:scale-105 transition-all">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-pink-800">{name}</h3>
        </div>
      </CardContent>
    </Card>
  )
}
