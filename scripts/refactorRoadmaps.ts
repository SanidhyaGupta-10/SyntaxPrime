import * as fs from 'fs';
import * as path from 'path';

const roadmapsDir = path.join(__dirname, '..', 'app', 'roadmaps');

function processFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // Backgrounds & Wrappers
    content = content.replace(/min-h-screen\s+bg-gradient-to-b\s+from-slate-900\s+to-slate-950/g, "min-h-screen pb-24 pt-24 max-w-7xl mx-auto w-full");
    content = content.replace(/bg-gradient-to-b\s+from-slate-900\s+to-slate-950/g, "");
    content = content.replace(/bg-black/g, "bg-transparent");
    content = content.replace(/min-h-\[100vh\]\s+mt-16\s+w-full\s+relative\s+text-\[\#E5E7EB\]/g, "min-h-screen mt-16 w-full relative pb-24 pt-16 max-w-7xl mx-auto");
    content = content.replace(/bg-transparent text-white px-6 py-16 flex flex-col gap-24 items-center overflow-hidden/g, "bg-transparent text-white px-6 py-16 flex flex-col gap-16 items-center overflow-hidden max-w-7xl mx-auto w-full");

    // Cards and Containers
    content = content.replace(/bg-slate-800\/50\s+rounded-xl\s+p-5\s+border\s+border-slate-700/g, "glass-panel p-6 rounded-2xl border border-white/5 bg-surface/30 group hover:border-primary/50 transition-all duration-300");
    content = content.replace(/bg-slate-900\/80\s+rounded-lg\s+p-4\s+border\s+border-slate-700/g, "glass-panel p-5 rounded-xl border border-white/5 bg-surface/40 hover:border-primary/50 transition-all");
    content = content.replace(/bg-white\/10\s+border\s+border-white\/10\s+backdrop-blur-xl/g, "glass-panel bg-surface/30 border border-white/5 group hover:border-primary/50");
    content = content.replace(/bg-\[\#0A0D14\]\s+px-6\s+py-4\s+rounded-xl\s+shadow-lg/g, "glass-panel px-6 py-6 rounded-2xl border border-white/5 bg-surface/30");
    // Ensure all framer motion cards that might have been partially processed are cleaned up
    content = content.replace(/rounded-2xl\s+p-8\s+sm:p-10\s+border\s+border-white\/10\s+bg-white\/5\s+backdrop-blur-xl\s+shadow-xl/g, "glass-panel p-8 sm:p-10 rounded-2xl border border-white/5 bg-surface/30 relative overflow-hidden");

    // General Typography - Headers
    content = content.replace(/text-3xl\s+sm:text-4xl\s+font-bold/g, "font-display text-4xl sm:text-5xl tracking-tight");
    content = content.replace(/text-4xl\s+sm:text-5xl\s+font-semibold/g, "font-display text-5xl sm:text-6xl tracking-tight");
    content = content.replace(/text-5xl\s+font-bold/g, "font-display text-5xl tracking-tight");
    content = content.replace(/text-4xl\s+mb-3/g, "font-display text-4xl mb-6 tracking-tight text-white");
    content = content.replace(/text-3xl\s+mb-4/g, "font-display text-3xl mb-4 tracking-tight text-white");
    content = content.replace(/text-xl\s+font-semibold/g, "font-display text-2xl tracking-tight");
    content = content.replace(/text-lg\s+sm:text-xl\s+font-semibold/g, "font-display text-xl sm:text-2xl");
    
    // Header colors and common slate text issues
    content = content.replace(/text-cyan-400/g, "text-white mb-4");
    content = content.replace(/text-purple-400/g, "text-white mb-4");
    content = content.replace(/text-cyan-300/g, "text-primary");
    content = content.replace(/text-purple-300/g, "text-primary");
    content = content.replace(/text-slate-200/g, "text-white");
    content = content.replace(/text-slate-300/g, "text-slate-200");

    // Typography - Body
    content = content.replace(/text-slate-400\s+text-base\s+sm:text-lg\s+max-w-2xl\s+mx-auto\s+leading-relaxed/g, "text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed");

    // Small tags
    content = content.replace(/px-3\s+py-1\s+bg-slate-900\s+rounded-full\s+text-xs\s+text-slate-300\s+border\s+border-slate-700/g, "px-3 py-1 glass-panel rounded-full text-xs font-mono text-primary/80 border border-primary/20");

    // Buttons / CTAs
    content = content.replace(/rounded-lg\s+border\s+border-slate-600\s+text-slate-300\s+hover:bg-slate-800/g, "rounded-lg border border-white/10 text-white hover:bg-white/5 glass-panel");
    content = content.replace(/bg-cyan-500\s+hover:bg-cyan-400\s+text-slate-950/g, "bg-primary hover:bg-primary/90 text-on-primary");
    content = content.replace(/bg-purple-500\s+hover:bg-purple-400\s+text-slate-950/g, "bg-primary hover:bg-primary/90 text-on-primary");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`);
    }
}

function walkDir(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (file === 'page.tsx') {
            // skip the root roadmap page
            if (fullPath === path.join(roadmapsDir, 'page.tsx')) continue;
            processFile(fullPath);
        }
    }
}

walkDir(roadmapsDir);
console.log("Done refactoring roadmaps.");
