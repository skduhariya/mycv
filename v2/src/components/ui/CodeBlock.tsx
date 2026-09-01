import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { cn } from '@/utils/formatters';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  title,
  showLineNumbers = true,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 text-slate-100 shadow-lg font-mono text-xs sm:text-sm my-3',
        className
      )}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {title ? (
            <span className="text-xs font-semibold text-slate-200 ml-2">{title}</span>
          ) : (
            <span className="flex items-center gap-1 text-xs text-slate-400 ml-2">
              <Terminal size={13} />
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
          title="Copy code"
          type="button"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto selection:bg-cyan-500/30">
        <pre className="table w-full">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className="hover:bg-slate-900/50 leading-relaxed">
                {showLineNumbers && (
                  <td className="pr-4 text-right select-none text-slate-600 font-mono text-xs w-8">
                    {index + 1}
                  </td>
                )}
                <td className="text-slate-200 font-mono whitespace-pre">{line}</td>
              </tr>
            ))}
          </tbody>
        </pre>
      </div>
    </div>
  );
};
