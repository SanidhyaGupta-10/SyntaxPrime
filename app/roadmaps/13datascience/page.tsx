"use client";
import React from "react";
import { Brain, BarChart3, Database, LineChart } from "lucide-react";

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  color: string;
}

// Reusable Card Component
function InfoCard(props: InfoCardProps) {
  const Icon = props.icon;
  const { title, text, color } = props;
  return (
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed">{text}</p>
    </div>
  );
}

export default function DataSciencePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            <BarChart3 className="size-12" /> Data Science Hub
          </h1>
          <p className="mt-4 text-[22px] opacity-80 leading-relaxed max-w-2xl mx-auto">
            Explore the world of Data Science â€” a blend of statistics, machine learning,
            programming, and storytelling with data that powers modern innovation.
          </p>
        </div>
      </section>

      {/* What is Data Science */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Brain}
          title="What is Data Science?"
          color="bg-gradient-to-br from-purple-600/20 to-purple-400/10"
          text="Data Science is the field that extracts insights, patterns, and predictions from data using statistics, programming, and machine learning."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={LineChart}
          title="Why Learn Data Science?"
          color="bg-gradient-to-br from-blue-600/20 to-blue-400/10"
          text="Data Science powers AI, business decision-making, automation, research, and modern tech. It is one of the highest-growth fields today."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Database}
          title="How Data Science Helps"
          color="bg-gradient-to-br from-green-600/20 to-green-400/10"
          text="It helps companies predict trends, analyze users, improve products, automate tasks, detect fraud, and build intelligent systems."
        />
    </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full max-w-6xl flex flex-col gap-16">

        <h2 className="text-4xl font-bold text-center opacity-90">
          Data Science Roadmap
        </h2>

        {/* Beginner */}
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Beginner â€“ Foundations"
            color="bg-gradient-to-br from-yellow-600/20 to-yellow-400/10"
            text="Start with Python, basic mathematics, statistics, probability, and learn how to work with data using Pandas, NumPy, and Matplotlib."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={BarChart3}
            title="Intermediate â€“ Analytics"
            color="bg-gradient-to-br from-red-600/20 to-red-400/10"
            text="Learn Exploratory Data Analysis (EDA), SQL, data cleaning, visualization (Seaborn/Plotly), and working with real datasets."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Brain}
            title="Advanced â€“ Machine Learning"
            color="bg-gradient-to-br from-purple-600/20 to-purple-400/10"
            text="Dive into ML models, Scikit-Learn, feature engineering, model tuning, deployment, and handling large-scale datasets."
          />
    </div>
        </div>
      </section>

      {/* Libraries Section */}
      <section className="w-full max-w-6xl mt-20">
        <h2 className="text-4xl font-bold text-center mb-10 opacity-90">Libraries to Learn</h2>

        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="NumPy"
            color="bg-gradient-to-br from-indigo-600/20 to-indigo-400/10"
            text="The foundation library for numerical computing, arrays, and linear algebra."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Pandas"
            color="bg-gradient-to-br from-emerald-600/20 to-emerald-400/10"
            text="Used for data cleaning, wrangling, analysis, and working with tabular datasets."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Matplotlib & Seaborn"
            color="bg-gradient-to-br from-orange-600/20 to-orange-400/10"
            text="Perfect for data visualizations, charts, trend lines, histograms, and storytelling."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Scikit-Learn"
            color="bg-gradient-to-br from-cyan-600/20 to-cyan-400/10"
            text="Industry-standard machine learning library for classification, regression, clustering, and model building."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Jupyter Notebook"
            color="bg-gradient-to-br from-pink-600/20 to-pink-400/10"
            text="Interactive environment for running Python, exploring data, and visualizing results."
          />
    </div>

          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="TensorFlow / PyTorch"
            color="bg-gradient-to-br from-lime-600/20 to-lime-400/10"
            text="Deep learning frameworks used to build neural networks used in AI, DL, NLP, and advanced ML."
          />
    </div>
        </div>
      </section>

    </div>
  );
}

