"use client";
import React from "react";
import Link from "next/link";

// Notes Images
import netFrame from "@/app/img/1. DotNETFrameworkGrow.png";
import Algorithms from "@/app/img/AlgorithmsGrow.png";
import Android from "@/app/img/AndroidGrow.png";
import Angular2 from "@/app/img/Angular2Grow.png";
import Angular from "@/app/img/AngularJSGrow.png";
import Bash from "@/app/img/BashGrow.png";
import C from "@/app/img/CGrow.png";
import CPP from "@/app/img/CPlusPlusGrow.png";
import CS from "@/app/img/CSharpGrow.png";
import CSS from "@/app/img/CSSGrow.png";
import EF from "@/app/img/EntityFrameworkGrow.png";
import Excel from "@/app/img/ExcelVBAGrow.png";
import Git from "@/app/img/GitGrow.png";
import Haskell from "@/app/img/HaskellGrow.png";
import Hibernate from "@/app/img/HibernateGrow.png";
import HTML5C from "@/app/img/HTML5CanvasGrow.png";
import HTML from "@/app/img/HTML5Grow.png";
import iOS from "@/app/img/iOSGrow.png";
import Java from "@/app/img/JavaGrow.png";
import JS from "@/app/img/JavaScriptGrow.png";
import JQ from "@/app/img/jQueryGrow.png";
import Kotlin from "@/app/img/KotlinGrow.png";
import Latex from "@/app/img/LaTeXGrow.png";
import Linux from "@/app/img/LinuxGrow.png";
import PHP from "@/app/img/PHPGrow.png";
import Mat from "@/app/img/MATLABGrow.png";
import MSS from "@/app/img/MicrosoftSQLServerGrow.png";
import MongoDB from "@/app/img/MongoDBGrow.png";
import MySQL from "@/app/img/MySQLGrow.png";
import Node from "@/app/img/NodeJSGrow.png";
import OC from "@/app/img/ObjectiveCGrow.png";
import Perl from "@/app/img/PerlGrow.png";
import PostgreSQL from "@/app/img/PostgreSQLGrow.png";
import PowerShell from "@/app/img/PowerShellGrow.png";
import Python from "@/app/img/PythonGrow.png";
import ReactJS from "@/app/img/ReactJSGrow.png";
import ReactNative from "@/app/img/ReactNativeGrow.png";
import R from "@/app/img/RGrow.png";
import Ruby from "@/app/img/RubyGrow.png";
import SQL from "@/app/img/SQLGrow.png";
import Swift from "@/app/img/SwiftGrow.png";
import Typescript from "@/app/img/TypeScriptGrow.png";

const page = () => {
  return (
    <main className="min-h-[90vh] w-full relative text-[#E5E7EB] p-6">
      <div className="h-full max-w-[1200px] mx-auto relative">
        {/* Header */}
        <div className="heading flex flex-col items-center mt-20 mb-20 px-4 md:px-0">
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-center">
            Professional Programming Notes
          </h1>
          <p className="text-center text-[16px] md:text-[19px] mt-5 max-w-full md:max-w-[900px]">
            <span className="text-blue-600">
              <Link href="/">Syntax Prime</Link>
            </span>{" "}
            is a community that provides free professional programming notes, guides, and other educational content to help developers in learning.
          </p>
          <p className="text-center text-[16px] md:text-[19px] mt-2 max-w-full md:max-w-[900px]">
            Reference by GoalKicker
          </p>
        </div>

        {/* Download button */}
        <div className="flex justify-center mb-8">
          <button className="border px-4 py-2.5 rounded-2xl bg-[#0A0A0F]">
            Download and Learn
          </button>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white mb-10"></div>

        {/* Notes grid (flex-wrap) */}
        <div className="flex flex-wrap justify-center gap-8">

          {/* 1 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={netFrame.src} alt=".NET Framework" className="rounded-md w-full" />
              <p className="mt-2 text-center">.NET Framework Notes by SyntaxPrime</p>
              <a href="/pdfs/DotNetFramework.pdf" download="DotNetFramework.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-800/50 px-5 py-2 bg-blue-800 w-full rounded-md cursor-pointer mt-2">
                  Download PDF Book
                </button>
              </a>
            </div>
          </div>

          {/* 2 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-purple-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Algorithms.src} alt="Algorithms" className="rounded-md w-full" />
              <p className="mt-2 text-center">Algorithms Notes by SyntaxPrime</p>
              <a href="/pdfs/Algorithms.pdf" download="Algorithms.pdf">
                <button className="drop-shadow-2xl drop-shadow-purple-500/50 px-5 py-2 bg-purple-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 3 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-green-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Android.src} alt="Android" className="rounded-md w-full" />
              <p className="mt-2 text-center">Android Notes by SyntaxPrime</p>
              <a href="/pdfs/Android.pdf" download="Android.pdf">
                <button className="drop-shadow-2xl drop-shadow-green-500/50 px-5 py-2 bg-green-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 4 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Angular2.src} alt="Angular2" className="rounded-md w-full" />
              <p className="mt-2 text-center">Angular2 Notes by SyntaxPrime</p>
              <a href="/pdfs/Angular2.pdf" download="Angular2.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 5 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Angular.src} alt="AngularJS" className="rounded-md w-full" />
              <p className="mt-2 text-center">AngularJS Notes by SyntaxPrime</p>
              <a href="/pdfs/AngularJS.pdf" download="AngularJS.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 6 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-gray-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Bash.src} alt="Bash" className="rounded-md w-full" />
              <p className="mt-2 text-center">Bash Notes by SyntaxPrime</p>
              <a href="/pdfs/Bash.pdf" download="Bash.pdf">
                <button className="drop-shadow-2xl drop-shadow-gray-500/50 px-5 py-2 bg-gray-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 7 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={C.src} alt="C" className="rounded-md w-full" />
              <p className="mt-2 text-center">C Notes by SyntaxPrime</p>
              <a href="/pdfs/C.pdf" download="C.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 8 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-gray-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={CPP.src} alt="C++" className="rounded-md w-full" />
              <p className="mt-2 text-center">C++ Notes by SyntaxPrime</p>
              <a href="/pdfs/CPlusPlus.pdf" download="CPlusPlus.pdf">
                <button className="drop-shadow-2xl drop-shadow-gray-500/50 px-5 py-2 bg-gray-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 9 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={CS.src} alt="C#" className="rounded-md w-full" />
              <p className="mt-2 text-center">C# Notes by SyntaxPrime</p>
              <a href="/pdfs/CSharp.pdf" download="CSharp.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 10 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-green-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={CSS.src} alt="CSS" className="rounded-md w-full" />
              <p className="mt-2 text-center">CSS Notes by SyntaxPrime</p>
              <a href="/pdfs/CSS.pdf" download="CSS.pdf">
                <button className="drop-shadow-2xl drop-shadow-green-500/50 px-5 py-2 bg-green-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 11 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={EF.src} alt="Entity Framework" className="rounded-md w-full" />
              <p className="mt-2 text-center">Entity Framework Notes by SyntaxPrime</p>
              <a href="/pdfs/EntityFramework.pdf" download="EntityFramework.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 12 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-green-700/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Excel.src} alt="Excel VBA" className="rounded-md w-full" />
              <p className="mt-2 text-center">Excel VBA Notes by SyntaxPrime</p>
              <a href="/pdfs/ExcelVBA.pdf" download="ExcelVBA.pdf">
                <button className="drop-shadow-2xl drop-shadow-green-700/50 px-5 py-2 bg-green-700 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 13 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Git.src} alt="Git" className="rounded-md w-full" />
              <p className="mt-2 text-center">Git Notes by SyntaxPrime</p>
              <a href="/pdfs/Git.pdf" download="Git.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 14 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-purple-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Haskell.src} alt="Haskell" className="rounded-md w-full" />
              <p className="mt-2 text-center">Haskell Notes by SyntaxPrime</p>
              <a href="/pdfs/Haskell.pdf" download="Haskell.pdf">
                <button className="drop-shadow-2xl drop-shadow-purple-500/50 px-5 py-2 bg-purple-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 15 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-yellow-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Hibernate.src} alt="Hibernate" className="rounded-md w-full" />
              <p className="mt-2 text-center">Hibernate Notes by SyntaxPrime</p>
              <a href="/pdfs/Hibernate.pdf" download="Hibernate.pdf">
                <button className="drop-shadow-2xl drop-shadow-yellow-500/50 px-5 py-2 bg-yellow-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 16 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={HTML5C.src} alt="HTML5 Canvas" className="rounded-md w-full" />
              <p className="mt-2 text-center">HTML5 Canvas Notes by SyntaxPrime</p>
              <a href="/pdfs/HTML5Canvas.pdf" download="HTML5Canvas.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 17 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={HTML.src} alt="HTML5" className="rounded-md w-full" />
              <p className="mt-2 text-center">HTML5 Notes by SyntaxPrime</p>
              <a href="/pdfs/HTML5.pdf" download="HTML5.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 18 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={iOS.src} alt="iOS" className="rounded-md w-full" />
              <p className="mt-2 text-center">iOS Dev Notes by SyntaxPrime</p>
              <a href="/pdfs/iOS.pdf" download="iOS.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 19 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Java.src} alt="Java" className="rounded-md w-full" />
              <p className="mt-2 text-center">Java Notes by SyntaxPrime</p>
              <a href="/pdfs/Java.pdf" download="Java.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-800/50 px-5 py-2 bg-blue-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 20 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={JS.src} alt="JavaScript" className="rounded-md w-full" />
              <p className="mt-2 text-center">JavaScript Notes by SyntaxPrime</p>
              <a href="/pdfs/JS.pdf" download="JavaScript.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 21 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={JQ.src} alt="jQuery" className="rounded-md w-full" />
              <p className="mt-2 text-center">jQuery Notes by SyntaxPrime</p>
              <a href="/pdfs/jQuery.pdf" download="jQuery.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 22 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-yellow-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Kotlin.src} alt="Kotlin" className="rounded-md w-full" />
              <p className="mt-2 text-center">Kotlin Notes by SyntaxPrime</p>
              <a href="/pdfs/Kotlin.pdf" download="Kotlin.pdf">
                <button className="drop-shadow-2xl drop-shadow-yellow-500/50 px-5 py-2 bg-yellow-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 23 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-gray-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Latex.src} alt="LaTeX" className="rounded-md w-full" />
              <p className="mt-2 text-center">LaTeX Notes by SyntaxPrime</p>
              <a href="/pdfs/LaTeX.pdf" download="LaTeX.pdf">
                <button className="drop-shadow-2xl drop-shadow-gray-500/50 px-5 py-2 bg-gray-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 24 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-gray-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Linux.src} alt="Linux" className="rounded-md w-full" />
              <p className="mt-2 text-center">Linux Notes by SyntaxPrime</p>
              <a href="/pdfs/Linux.pdf" download="Linux.pdf">
                <button className="drop-shadow-2xl drop-shadow-gray-500/50 px-5 py-2 bg-gray-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 25 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Mat.src} alt="MATLAB" className="rounded-md w-full" />
              <p className="mt-2 text-center">MATLAB Notes by SyntaxPrime</p>
              <a href="/pdfs/MATLAB.pdf" download="MATLAB.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 26 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={MSS.src} alt="MS SQL Server" className="rounded-md w-full" />
              <p className="mt-2 text-center">M.S. SQL Server Notes by SyntaxPrime</p>
              <a href="/pdfs/MicrosoftSQLServer.pdf" download="MicrosoftSQLServer.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 27 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-green-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={MongoDB.src} alt="MongoDB" className="rounded-md w-full" />
              <p className="mt-2 text-center">MongoDB Notes by SyntaxPrime</p>
              <a href="/pdfs/MongoDB.pdf" download="MongoDB.pdf">
                <button className="drop-shadow-2xl drop-shadow-green-800/50 px-5 py-2 bg-green-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 28 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-400/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={MySQL.src} alt="MySQL" className="rounded-md w-full" />
              <p className="mt-2 text-center">MySQL Notes by SyntaxPrime</p>
              <a href="/pdfs/MySQL.pdf" download="MySQL.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 29 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-green-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Node.src} alt="Node.js" className="rounded-md w-full" />
              <p className="mt-2 text-center">Node.JS Notes by SyntaxPrime</p>
              <a href="/pdfs/NodeJS.pdf" download="NodeJS.pdf">
                <button className="drop-shadow-2xl drop-shadow-green-500/50 px-5 py-2 bg-green-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 30 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-gray-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={OC.src} alt="Objective C" className="rounded-md w-full" />
              <p className="mt-2 text-center">Objective C Notes by SyntaxPrime</p>
              <a href="/pdfs/ObjectiveC.pdf" download="ObjectiveC.pdf">
                <button className="drop-shadow-2xl drop-shadow-gray-800/50 px-5 py-2 bg-gray-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 31 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={PHP.src} alt="PHP" className="rounded-md w-full" />
              <p className="mt-2 text-center">PHP Notes by SyntaxPrime</p>
              <a href="/pdfs/PHP.pdf" download="PHP.pdf">
                <button className="drop-shadow-2xl drop-shadow-purple-800/50 px-5 py-2 bg-purple-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 32 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Perl.src} alt="Perl" className="rounded-md w-full" />
              <p className="mt-2 text-center">Perl Notes by SyntaxPrime</p>
              <a href="/pdfs/Perl.pdf" download="Perl.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-800/50 px-5 py-2 bg-blue-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 33 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={PostgreSQL.src} alt="PostgreSQL" className="rounded-md w-full" />
              <p className="mt-2 text-center">PostgreSQL Notes by SyntaxPrime</p>
              <a href="/pdfs/PostgreSQL.pdf" download="PostgreSQL.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-500/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 34 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={PowerShell.src} alt="PowerShell" className="rounded-md w-full" />
              <p className="mt-2 text-center">PowerShell Notes by SyntaxPrime</p>
              <a href="/pdfs/PowerShell.pdf" download="PowerShell.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-800/50 px-5 py-2 bg-blue-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 35 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-700/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Python.src} alt="Python" className="rounded-md w-full" />
              <p className="mt-2 text-center">Python Notes by SyntaxPrime</p>
              <a href="/pdfs/Python.pdf" download="Python.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-700/50 px-5 py-2 bg-blue-700 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 36 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={ReactJS.src} alt="ReactJS" className="rounded-md w-full" />
              <p className="mt-2 text-center">ReactJS Notes by SyntaxPrime</p>
              <a href="/pdfs/ReactJS.pdf" download="ReactJS.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-500/50 px-5 py-2 bg-blue-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 37 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-cyan-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={ReactNative.src} alt="React Native" className="rounded-md w-full" />
              <p className="mt-2 text-center">React Native Notes by SyntaxPrime</p>
              <a href="/pdfs/ReactNative.pdf" download="ReactNative.pdf">
                <button className="drop-shadow-2xl drop-shadow-cyan-800/50 px-5 py-2 bg-cyan-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 38 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={R.src} alt="R" className="rounded-md w-full" />
              <p className="mt-2 text-center">R Notes by SyntaxPrime</p>
              <a href="/pdfs/R.pdf" download="R.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-800/50 px-5 py-2 bg-blue-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 39 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Ruby.src} alt="Ruby" className="rounded-md w-full" />
              <p className="mt-2 text-center">Ruby Notes by SyntaxPrime</p>
              <a href="/pdfs/Ruby.pdf" download="Ruby.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 40 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-400/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={SQL.src} alt="SQL" className="rounded-md w-full" />
              <p className="mt-2 text-center">SQL Notes by SyntaxPrime</p>
              <a href="/pdfs/SQL.pdf" download="SQL.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-400/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 41 */}
          <div className="card w-full sm:w-[300px]">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-red-500/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Swift.src} alt="Swift" className="rounded-md w-full" />
              <p className="mt-2 text-center">Swift Notes by SyntaxPrime</p>
              <a href="/pdfs/Swift.pdf" download="Swift.pdf">
                <button className="drop-shadow-2xl drop-shadow-red-500/50 px-5 py-2 bg-red-500 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* 42 */}
          <div className="card w-full sm:w-[300px] mb-12">
            <div className="cursor-pointer drop-shadow-2xl drop-shadow-blue-800/50 hover:scale-105 transition-all duration-500 ease-in-out">
              <img src={Typescript.src} alt="TypeScript" className="rounded-md w-full" />
              <p className="mt-2 text-center">TypeScript Notes by SyntaxPrime</p>
              <a href="/pdfs/TypeScript.pdf" download="TypeScript.pdf">
                <button className="drop-shadow-2xl drop-shadow-blue-800/50 px-5 py-2 bg-blue-800 w-full rounded-md cursor-pointer mt-2">
                  Download
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default page;
