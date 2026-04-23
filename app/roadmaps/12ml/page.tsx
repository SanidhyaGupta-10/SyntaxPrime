"use client";
import React from "react";
import { BookOpen, Hash, Cpu, Layers, Database, Code, Terminal, GitBranch } from "lucide-react";

// Reusable InfoCard used across pages
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/10 shadow-lg flex flex-col items-start gap-4 min-h-[160px]">
      <div className="flex items-center gap-3">
        <Icon className="size-6 text-indigo-300" />
        <h3 className="text-[20px] font-semibold">{title}</h3>
      </div>
      <p className="text-[18px] opacity-80 leading-relaxed">{text}</p>
    </div>
  );
}

export default function MLPage() {
  // Beginner → Intermediate → Advanced roadmap and library checklist
  return (
    <div className="min-h-screen w-full mt-16 bg-linear-to-b from-black via-zinc-900 to-[#05010a] text-white px-6 py-16 flex flex-col items-center gap-16">

      {/* Hero */}
      <section className="w-full max-w-5xl text-center">
        <div className="rounded-2xl p-8 border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_120px_rgba(0,0,0,0.6)]">
          <h1 className="text-4xl font-bold mb-3">Machine Learning — Roadmap (Beginner → Expert)</h1>
          <p className="text-[22px] opacity-80 max-w-3xl mx-auto">
            A practical learning path: what to learn first, which libraries to master, project ideas, and how to progress from fundamentals to production-ready ML systems.
          </p>
        </div>
      </section>

      {/* Roadmap Sections */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <InfoCard
          icon={BookOpen}
          title="Start Here — Foundations"
          text={`Learn Python basics (syntax, functions, OOP), linear algebra (vectors, matrices), probability & statistics, and calculus basics. These are the foundations that make ML understandable.`}
        />

        <InfoCard
          icon={Hash}
          title="Core ML Concepts"
          text={`Understand supervised vs unsupervised learning, overfitting/underfitting, bias-variance tradeoff, cross-validation, evaluation metrics (accuracy, precision, recall, F1, ROC-AUC), and feature engineering.`}
        />

        <InfoCard
          icon={Cpu}
          title="Practical Tools & Environment"
          text={`Get comfortable with NumPy, pandas, Matplotlib/Seaborn for EDA, Jupyter notebooks, and version control with Git. Learn how to prepare datasets and run experiments reproducibly.`}
        />
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <InfoCard
          icon={Layers}
          title="Intermediate — Models & Libraries"
          text={`Learn scikit-learn thoroughly (regression, classification, clustering, pipelines), then move to deep learning with TensorFlow/Keras or PyTorch. Study regularization, hyperparameter tuning, and model selection.`}
        />

        <InfoCard
          icon={Database}
          title="Advanced Topics"
          text={`Dive into CNNs, RNNs/Transformers, sequence models, generative models, reinforcement learning, probabilistic models, and scalable ML (distributed training). Learn model interpretability and fairness.`}
        />

        <InfoCard
          icon={Code}
          title="Deployment & Production"
          text={`Learn model serving (FastAPI, TorchServe, TensorFlow Serving), containerization (Docker), CI/CD, monitoring, and MLOps tools (MLflow, DVC). Understand latency, throughput, and cost trade-offs.`}
        />
      </section>

      {/* Libraries & Tools Checklist */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">Libraries & Tools to Master</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard icon={Hash} title="NumPy" text="Numerical computing and linear algebra foundations." />
          <InfoCard icon={Hash} title="pandas" text="Data manipulation and preprocessing for tabular data." />
          <InfoCard icon={Hash} title="Matplotlib / Seaborn" text="Visualization for EDA and model diagnostics." />
          <InfoCard icon={Hash} title="scikit-learn" text="Classic ML algorithms, pipelines, and model evaluation." />
          <InfoCard icon={Hash} title="TensorFlow / Keras" text="High-level deep learning framework for production and research." />
          <InfoCard icon={Hash} title="PyTorch" text="Flexible deep learning library used widely in research and production." />
          <InfoCard icon={Hash} title="XGBoost / LightGBM / CatBoost" text="Gradient boosting libraries for tabular data competitions and production." />
          <InfoCard icon={Hash} title="Hugging Face" text="Transformers and NLP tooling for state-of-the-art language models." />
        </div>
      </section>

      {/* Projects & Practice */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InfoCard
          icon={Terminal}
          title="Beginner Projects"
          text={`House price prediction, Titanic survival classifier, basic image classifier (MNIST), and EDA notebooks—focus on end-to-end workflow.`}
        />
        <InfoCard
          icon={Terminal}
          title="Intermediate Projects"
          text={`Building CNNs for custom datasets, text classification with transformers, time-series forecasting, and model tuning with cross-validation.`}
        />
        <InfoCard
          icon={Terminal}
          title="Advanced Projects"
          text={`Deploying models as APIs, scaling training on GPUs, building recommender systems, productionizing pipelines, and working with large language models.`}
        />
      </section>

      {/* Learning Tips */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InfoCard
          icon={GitBranch}
          title="Practical Tips"
          text={`Read papers, reproduce tutorials, join competitions (Kaggle), maintain a project portfolio, write clean experiments, and practice mathematical intuition with small coding exercises.`}
        />

        <InfoCard
          icon={BookOpen}
          title="Recommended Path"
          text={`1) Python & Math → 2) EDA & scikit-learn → 3) Deep learning basics → 4) Specialize (NLP, CV, RL) → 5) Production & MLOps.`}
        />
      </section>

    </div>
  );
}
