/**
 * LEARN CONTENT — Read & edit explanations here
 * =============================================
 * Each step can have: why, analogy, how, links
 * Quest-level intros use questLearn['quest-id']
 *
 * To add content for a new step, copy tasks-data.js step id (e.g. p1-q1-s3)
 * and add an entry below. Refresh index.html to see it.
 */

const questLearn = {
  'p1-q1': {
    title: 'Day 1 — Python environment',
    intro: 'Today you set up an isolated Python workspace. Same idea as creating a new Node project with its own package.json — but for Python + ML libraries.',
  },
  'p1-q2': {
    title: 'Day 2 — Python syntax',
    intro: 'You already know JavaScript. Python is more readable and indentation-based. Focus on data structures — you will use dicts and lists constantly in AI work.',
  },
  'p1-q3': {
    title: 'Day 3 — CSV script',
    intro: 'Most ML starts with tabular data. pandas is to Python what you might do manually in SQL + JSON — but in code.',
  },
  'p1-q4': {
    title: 'Day 4 — API client',
    intro: 'AI apps call APIs constantly (OpenAI, Hugging Face, vector DBs). This script mirrors your fetch/axios experience in Node.',
  },
  'p1-q5': {
    title: 'Day 5 — Automation + GitHub',
    intro: 'ML engineers automate data prep pipelines. Shipping to GitHub proves you can deliver — employers check repos, not certificates.',
  },
  'p1-q6': {
    title: 'Week 2 — Math intuition',
    intro: 'You do NOT need to prove theorems. You need intuition: vectors = embeddings, gradients = how models learn. Watch, then write in your own words.',
  },
  'p1-q7': {
    title: 'Week 3 — Jupyter',
    intro: 'Jupyter is the interactive REPL of data science. Explore data, plot, experiment — then move stable code to .py files for production.',
  },
  'p1-q8': {
    title: 'Week 4 — First ML model',
    intro: 'Your first end-to-end prediction. Messy data → clean features → model → metrics. This pattern repeats for every ML project.',
  },
  'p3-q2': {
    title: 'RAG — ingestion',
    intro: 'RAG = Retrieval-Augmented Generation. Instead of hoping the LLM "knows" your docs, you search them first, then ask the LLM to answer using only that context.',
  },
  'p3-q3': {
    title: 'RAG — query',
    intro: 'Good RAG = good retrieval. If wrong chunks are fetched, the LLM will confidently hallucinate. Always test with real questions.',
  },
};

const stepLearn = {
  'p1-q1-s1': {
    title: 'Check Python version',
    why: 'AI libraries (PyTorch, LangChain, pandas 2.x) need Python 3.10+. Python 3.11 is faster and widely supported. macOS often ships Python 3.9 or 2.7 alias — always use python3 explicitly.',
    analogy: 'Like checking node -v before starting a React project. Wrong runtime = mysterious install errors later.',
    how: 'Open terminal, run <code>python3 --version</code>. If missing or &lt; 3.10, install from python.org or use <code>brew install python@3.11</code> on Mac.',
    links: [
      { label: 'python.org downloads', url: 'https://www.python.org/downloads/' },
    ],
  },
  'p1-q1-s2': {
    title: 'Project folder',
    why: 'One folder per project keeps code, data, notebooks, and venv together. You will have many AI repos (RAG app, ML experiments) — start the habit now.',
    analogy: 'Same as <code>mkdir my-api && cd my-api</code> before npm init.',
    how: '<code>mkdir python-ml-starter && cd python-ml-starter</code>. Open this folder in Cursor/VS Code.',
  },
  'p1-q1-s3': {
    title: 'Virtual environment (venv)',
    why: 'venv creates an isolated Python environment per project. Project A can use pandas 1.5 while Project B uses 2.0 — no conflicts. Critical for ML where dependency versions matter a lot.',
    analogy: 'Like <code>node_modules</code> per project, but you activate it explicitly. Global <code>pip install</code> is like global npm install — avoid it.',
    how: 'Create: <code>python3 -m venv .venv</code><br>Activate (Mac/Linux): <code>source .venv/bin/activate</code><br>Activate (Windows): <code>.venv\\Scripts\\activate</code><br>Your prompt shows (.venv) when active. Always activate before pip install or running scripts.',
    links: [
      { label: 'Python venv docs', url: 'https://docs.python.org/3/library/venv.html' },
    ],
  },
  'p1-q1-s4': {
    title: 'Install core packages',
    why: '<strong>numpy</strong> — fast arrays/math (foundation of ML). <strong>pandas</strong> — tables/CSV (like SQL results in memory). <strong>requests</strong> — HTTP calls (like axios). <strong>jupyter</strong> — interactive notebooks for exploration.',
    analogy: 'Like installing express, mongoose, dotenv in one go for a Node API.',
    how: 'With venv active: <code>pip install numpy pandas requests jupyter</code>. Wait for install. Test: <code>python -c "import pandas; print(pandas.__version__)"</code>',
    links: [
      { label: 'pandas getting started', url: 'https://pandas.pydata.org/docs/getting_started/index.html' },
    ],
  },
  'p1-q1-s5': {
    title: 'requirements.txt',
    why: 'Locks exact package versions so your project runs the same on your laptop, teammate\'s machine, and production server. Without it, "works on my machine" bugs multiply.',
    analogy: 'Identical to package.json + package-lock.json. <code>pip freeze</code> = snapshot of installed versions.',
    how: '<code>pip freeze > requirements.txt</code><br>Someone else (or future you) runs: <code>pip install -r requirements.txt</code><br>Commit requirements.txt to git. Never commit .venv folder.',
  },
  'p1-q2-s1': {
    title: 'Variables & f-strings',
    why: 'f-strings are the standard way to embed variables in text — cleaner than JS template literals for simple cases. You will format prompts for LLMs constantly.',
    analogy: 'Python: <code>f"Hello {name}"</code> ≈ JS: <code>`Hello ${name}`</code>',
    how: 'Try: <code>name = "Vinay"</code>, <code>print(f"Learning AI as {name}")</code>. No semicolons in Python.',
  },
  'p1-q2-s2': {
    title: 'Lists & dicts + JSON',
    why: 'API responses are JSON → Python dicts. Feature rows in ML are dicts or DataFrames. lists = ordered; dicts = key-value (like JS objects).',
    analogy: 'dict ≈ JS object. list ≈ JS array. json.loads(s) ≈ JSON.parse(s).',
    how: '<code>import json</code><br><code>data = json.loads(\'{"model": "gpt-4"}\')</code><br><code>print(data["model"])</code>',
  },
  'p1-q2-s3': {
    title: 'Loops & conditionals',
    why: 'You will loop over datasets, API pages, and file batches. Python style prefers readable loops over clever one-liners at first.',
    how: '<code>nums = [3, 12, 7, 24]</code><br><code>big = [n for n in nums if n > 10]</code>  # list comprehension — learn this pattern.',
  },
  'p1-q2-s4': {
    title: 'Functions + type hints',
    why: 'Type hints document what a function expects — helps you and IDEs catch bugs. FastAPI (AI APIs) uses them heavily for validation.',
    analogy: 'Like TypeScript for functions, but optional at runtime.',
    how: '<code>def add(a: int, b: int) -> int:</code><br><code>&nbsp;&nbsp;return a + b</code>',
  },
  'p1-q2-s5': {
    title: 'Read files safely',
    why: '<code>with open(...)</code> auto-closes files even if an error occurs — prevents resource leaks when processing large datasets.',
    how: '<code>with open("data.txt") as f:</code><br><code>&nbsp;&nbsp;content = f.read()</code>',
  },
  'p1-q2-s6': {
    title: 'Active recall — lists vs tuples',
    why: 'Active recall (testing yourself) beats re-reading by ~50%. Close all tabs and write the answer first, then check.',
    how: 'Answer without looking: When would you use a tuple instead of a list?<br><br>Answer: tuples are immutable (fixed size records, dict keys). lists are mutable (grow/shrink collections).',
  },
  'p1-q3-s2': {
    title: 'pandas read_csv',
    why: 'pandas loads CSV/Excel/SQL results into a DataFrame — a table you can filter, group, and plot. 80% of tabular ML starts here.',
    analogy: 'Like running SELECT * in MySQL but the result lives in Python memory.',
    how: '<code>import pandas as pd</code><br><code>df = pd.read_csv("sales.csv")</code><br><code>print(df.shape)</code>  # rows, columns',
    links: [{ label: '10 minutes to pandas', url: 'https://pandas.pydata.org/docs/user_guide/10min.html' }],
  },
  'p1-q6-s1': {
    title: 'What is a neuron?',
    why: 'Neural networks are stacks of simple units (neurons) that transform numbers. LLMs are massive versions of this idea. Intuition now saves pain when you read about "layers" and "activations".',
    how: 'Watch 3Blue1Brown ep 1 (~20 min). Pause when he shows a neuron — sketch it on paper.',
    links: [{ label: '3Blue1Brown Neural Networks', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6Rfk6GOin7Q4jFpKWv-k' }],
  },
  'p1-q6-s2': {
    title: 'Gradient descent',
    why: 'Models learn by adjusting weights to reduce error — "rolling downhill" on a loss landscape. Every training loop uses this idea.',
    analogy: 'Like tuning nginx config knobs until latency drops — but automatic and mathematical.',
  },
  'p1-q6-s4': {
    title: 'Dot product',
    why: 'Dot product measures similarity between vectors. Embeddings use cosine similarity (related). This is how semantic search knows two sentences "mean" similar things.',
    how: 'Write: "Dot product multiplies matching positions and sums them. Higher = more aligned direction."',
  },
  'p1-q7-s1': {
    title: 'Jupyter notebook',
    why: 'Run code in cells, see output inline, mix markdown notes and charts. Perfect for exploration. Not for production — move final code to .py files.',
    analogy: 'Like browser DevTools console but saved as a document with charts.',
    how: '<code>jupyter notebook</code> → browser opens → New → Python 3 → save in notebooks/',
  },
  'p1-q7-s5': {
    title: '.gitignore',
    why: '.venv can be 500MB+. .ipynb_checkpoints are junk. Never push secrets or huge datasets to GitHub.',
    how: 'Add to .gitignore:<br><code>.venv/</code><br><code>__pycache__/</code><br><code>.ipynb_checkpoints/</code><br><code>.env</code>',
  },
  'p2-q1-s1': {
    title: 'train_test_split',
    why: 'Evaluate on data the model never saw during training. Testing on training data = cheating = overoptimistic accuracy.',
    analogy: 'Like not using the same users for load testing and feature dev.',
    how: '<code>from sklearn.model_selection import train_test_split</code><br><code>X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)</code>',
  },
  'fullstack-ai::p2-q1-s1': {
    title: 'Express streaming chat',
    why: 'Streaming (SSE) shows tokens as they generate — feels instant like ChatGPT. Better UX than waiting 10s for full response.',
    analogy: 'Like streaming a video vs waiting for full download.',
    how: 'Use res.write() per token chunk with Content-Type: text/event-stream. On React, EventSource or fetch with ReadableStream.',
  },
  'p2-q2-s1': {
    title: 'Hugging Face transformers',
    why: 'Pretrained models (BERT, GPT, etc.) let you use SOTA NLP without training from scratch. Industry standard for inference and fine-tuning.',
    links: [{ label: 'Hugging Face course', url: 'https://huggingface.co/learn' }],
  },
  'p2-q3-s1': {
    title: 'Sentence embeddings',
    why: 'Convert text to vectors so you can search by meaning, not keywords. Core of RAG, recommendation, and deduplication.',
    analogy: 'Like giving each sentence a GPS coordinate — nearby coordinates = similar meaning.',
  },
  'p3-q1-s1': {
    title: 'LLM API keys',
    why: 'API keys are passwords. .env keeps them out of git. Set billing limits on OpenAI dashboard to avoid surprise charges while learning.',
    how: 'Create .env: <code>OPENAI_API_KEY=sk-...</code><br>Add .env to .gitignore<br>Use <code>python-dotenv</code> or platform env vars in production.',
  },
  'p3-q2-s3': {
    title: 'Chunking for RAG',
    why: 'LLMs have limited context. You split docs into chunks, embed each, retrieve relevant chunks only. Too small = lost context. Too large = noise + cost.',
    how: 'Start: 500 tokens per chunk, 100 token overlap. Tune based on your doc type (code vs prose).',
  },
  'p3-q2-s5': {
    title: 'Vector database (Chroma)',
    why: 'Stores embeddings + metadata for fast similarity search. Like an index on meaning instead of exact match.',
    analogy: 'MySQL index helps WHERE clauses. Vector DB helps "find similar meaning" queries.',
    links: [{ label: 'Chroma docs', url: 'https://docs.trychroma.com/' }],
  },
  'p3-q3-s2': {
    title: 'RAG prompt with context',
    why: 'Tell the LLM: answer ONLY from these chunks. Reduces hallucination. Include citations so users can verify.',
    how: 'System prompt example: "Use only the provided context. If unsure, say I don\'t know. Cite source id."',
  },
};

/** Lookup: step → content, fallback to quest intro */
function getLearnContent(stepId, questId, role) {
  const roleKey = role ? `${role}::${stepId}` : null;
  if (roleKey && stepLearn[roleKey]) return { type: 'step', ...stepLearn[roleKey] };
  if (stepLearn[stepId]) return { type: 'step', ...stepLearn[stepId] };
  if (questLearn[questId]) return { type: 'quest', ...questLearn[questId] };
  return {
    type: 'empty',
    title: 'Add your notes',
    why: 'No built-in explanation yet. Add in <code>learn-content.js</code> using step id: <strong>' + stepId + '</strong>',
    how: 'See <code>HOW-TO-ADD-LEARN-CONTENT.md</code> for a copy-paste template.',
  };
}

function hasLearnContent(stepId, questId, role) {
  const roleKey = role ? `${role}::${stepId}` : null;
  return !!(stepLearn[roleKey] || stepLearn[stepId] || questLearn[questId]);
}
