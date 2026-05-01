"use client";
import React from "react";
import { BookOpen, Hash, Cpu, Layers, Database, Code, Terminal, GitBranch } from "lucide-react";

// Reusable InfoCard used across pages
interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

function InfoCard(props: InfoCardProps) {
  const Icon = props.icon;
  const { title, text } = props;
  return (
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
      <div className="flex items-center gap-3">
        <Icon className="size-6 text-indigo-300" />
        <h3 className="text-[20px] font-semibold">{title}</h3>
      </div>
      <p className="text-[18px] opacity-80 leading-relaxed">{text}</p>
    </div>
  );
}

export default function MLPage() {
  // Beginner â†’ Intermediate â†’ Advanced roadmap and library checklist
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Hero */}
      <section className="w-full max-w-5xl text-center">
        <div className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-3">Machine Learning â€” Roadmap (Beginner â†’ Expert)</h1>
          <p className="text-[22px] opacity-80 max-w-3xl mx-auto">
            A practical learning path: what to learn first, which libraries to master, project ideas, and how to progress from fundamentals to production-ready ML systems.
          </p>
        </div>
      </section>

      {/* Roadmap Sections */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={BookOpen}
          title="Start Here â€” Foundations"
          text={`Learn Python basics (syntax, functions, OOP), linear algebra (vectors, matrices), probability & statistics, and calculus basics. These are the foundations that make ML understandable.`}
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Hash}
          title="Core ML Concepts"
          text={`Understand supervised vs unsupervised learning, overfitting/underfitting, bias-variance tradeoff, cross-validation, evaluation metrics (accuracy, precision, recall, F1, ROC-AUC), and feature engineering.`}
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Cpu}
          title="Practical Tools & Environment"
          text={`Get comfortable with NumPy, pandas, Matplotlib/Seaborn for EDA, Jupyter notebooks, and version control with Git. Learn how to prepare datasets and run experiments reproducibly.`}
        />
    </div>
      </section>

      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Layers}
          title="Intermediate â€” Models & Libraries"
          text={`Learn scikit-learn thoroughly (regression, classification, clustering, pipelines), then move to deep learning with TensorFlow/Keras or PyTorch. Study regularization, hyperparameter tuning, and model selection.`}
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Database}
          title="Advanced Topics"
          text={`Dive into CNNs, RNNs/Transformers, sequence models, generative models, reinforcement learning, probabilistic models, and scalable ML (distributed training). Learn model interpretability and fairness.`}
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Code}
          title="Deployment & Production"
          text={`Learn model serving (FastAPI, TorchServe, TensorFlow Serving), containerization (Docker), CI/CD, monitoring, and MLOps tools (MLflow, DVC). Understand latency, throughput, and cost trade-offs.`}
        />
    </div>
      </section>

      {/* Libraries & Tools Checklist */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">Libraries & Tools to Master</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="NumPy" text="Numerical computing and linear algebra foundations." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="pandas" text="Data manipulation and preprocessing for tabular data." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="Matplotlib / Seaborn" text="Visualization for EDA and model diagnostics." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="scikit-learn" text="Classic ML algorithms, pipelines, and model evaluation." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="TensorFlow / Keras" text="High-level deep learning framework for production and research." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="PyTorch" text="Flexible deep learning library used widely in research and production." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="XGBoost / LightGBM / CatBoost" text="Gradient boosting libraries for tabular data competitions and production." />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard icon={Hash} title="Hugging Face" text="Transformers and NLP tooling for state-of-the-art language models." />
    </div>
        </div>
      </section>

      {/* Projects & Practice */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Terminal}
          title="Beginner Projects"
          text={`House price prediction, Titanic survival classifier, basic image classifier (MNIST), and EDA notebooksâ€”focus on end-to-end workflow.`}
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Terminal}
          title="Intermediate Projects"
          text={`Building CNNs for custom datasets, text classification with transformers, time-series forecasting, and model tuning with cross-validation.`}
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Terminal}
          title="Advanced Projects"
          text={`Deploying models as APIs, scaling training on GPUs, building recommender systems, productionizing pipelines, and working with large language models.`}
        />
    </div>
      </section>

      {/* Learning Tips */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={GitBranch}
          title="Practical Tips"
          text={`Read papers, reproduce tutorials, join competitions (Kaggle), maintain a project portfolio, write clean experiments, and practice mathematical intuition with small coding exercises.`}
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={BookOpen}
          title="Recommended Path"
          text={`1) Python & Math â†’ 2) EDA & scikit-learn â†’ 3) Deep learning basics â†’ 4) Specialize (NLP, CV, RL) â†’ 5) Production & MLOps.`}
        />
    </div>
      </section>

    </div>
  );
}

