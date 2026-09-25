import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  // Parse markdown lines and blocks cleanly
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let inList = false;
  let listItems: React.ReactNode[] = [];
  let keyCounter = 0;

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-${keyCounter++}`} className="space-y-1.5 my-3 pl-5 list-disc text-slate-300">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const formatInline = (text: string): React.ReactNode => {
    // Process bold **text** and inline code `code`
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*.*?\*\*|`.*?`|\*.*?\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const raw = match[0];
      if (raw.startsWith('**') && raw.endsWith('**')) {
        parts.push(
          <strong key={`b-${match.index}`} className="font-semibold text-slate-100">
            {raw.slice(2, -2)}
          </strong>
        );
      } else if (raw.startsWith('`') && raw.endsWith('`')) {
        parts.push(
          <code
            key={`c-${match.index}`}
            className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-xs border border-slate-700/60"
          >
            {raw.slice(1, -1)}
          </code>
        );
      } else if (raw.startsWith('*') && raw.endsWith('*')) {
        parts.push(<em key={`i-${match.index}`}>{raw.slice(1, -1)}</em>);
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      continue;
    }

    // Heading 1
    if (line.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={`h1-${keyCounter++}`} className="text-2xl font-bold text-white mt-6 mb-3 border-b border-slate-800 pb-2">
          {formatInline(line.substring(2))}
        </h1>
      );
    }
    // Heading 2
    else if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${keyCounter++}`} className="text-xl font-bold text-sky-200 mt-5 mb-2.5 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-sky-500 rounded-full inline-block"></span>
          {formatInline(line.substring(3))}
        </h2>
      );
    }
    // Heading 3
    else if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${keyCounter++}`} className="text-base font-semibold text-slate-200 mt-4 mb-2">
          {formatInline(line.substring(4))}
        </h3>
      );
    }
    // List item
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      inList = true;
      listItems.push(
        <li key={`li-${keyCounter++}`} className="leading-relaxed">
          {formatInline(line.substring(2))}
        </li>
      );
    }
    // Numbered list item
    else if (/^\d+\.\s/.test(line)) {
      flushList();
      const numMatch = line.match(/^(\d+)\.\s(.*)$/);
      if (numMatch) {
        elements.push(
          <div key={`ol-${keyCounter++}`} className="flex gap-2.5 my-2 text-slate-300">
            <span className="font-semibold text-sky-400 font-mono text-sm shrink-0">
              {numMatch[1]}.
            </span>
            <span className="leading-relaxed">{formatInline(numMatch[2])}</span>
          </div>
        );
      }
    }
    // Blockquote
    else if (line.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote
          key={`bq-${keyCounter++}`}
          className="border-l-4 border-sky-500 bg-sky-950/20 px-4 py-2.5 rounded-r my-3 text-slate-300 italic"
        >
          {formatInline(line.substring(2))}
        </blockquote>
      );
    }
    // Regular paragraph
    else {
      flushList();
      elements.push(
        <p key={`p-${keyCounter++}`} className="text-slate-300 leading-relaxed my-2 text-sm">
          {formatInline(line)}
        </p>
      );
    }
  }

  flushList();

  return <div className={`prose-sm ${className}`}>{elements}</div>;
};
