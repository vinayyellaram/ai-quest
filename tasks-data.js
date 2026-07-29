/**
 * Micro-task quest data — each quest = 15–60 min, steps = 2–10 min each.
 * Loaded by index.html. Methods: do | watch | recall | build | review
 */
const phasesByRole = {
  'ai-app': [
    {
      id: 'p1', emoji: '🐍', color: 'var(--phase1)', focus: 'core',
      title: 'Phase 1 — Python Foundations',
      weeks: 'Weeks 1–4',
      goal: 'Python fluency for AI backends — one small win per session',
      tasks: [
        {
          id: 'p1-q1', title: 'Day 1: Install & verify Python', minutes: 25, method: 'do',
          steps: [
            { id: 'p1-q1-s1', text: 'Run <code>python3 --version</code> — need 3.11+', xp: 3 },
            { id: 'p1-q1-s2', text: 'Create folder <code>python-ml-starter</code>', xp: 3 },
            { id: 'p1-q1-s3', text: '<code>python3 -m venv .venv</code> then activate it', xp: 5 },
            { id: 'p1-q1-s4', text: 'Run <code>pip install numpy pandas requests jupyter</code>', xp: 5 },
            { id: 'p1-q1-s5', text: 'Create <code>requirements.txt</code> with pip freeze', xp: 4 },
          ],
        },
        {
          id: 'p1-q2', title: 'Day 2: Python syntax crash (90 min total)', minutes: 45, method: 'do',
          steps: [
            { id: 'p1-q2-s1', text: 'Variables, strings, f-strings — write 5 print examples', xp: 4 },
            { id: 'p1-q2-s2', text: 'Lists & dicts — parse a JSON string with <code>json.loads</code>', xp: 5 },
            { id: 'p1-q2-s3', text: 'for-loop + if — filter list of numbers > 10', xp: 5 },
            { id: 'p1-q2-s4', text: 'Write one function with type hints (def add(a: int, b: int) -> int)', xp: 5 },
            { id: 'p1-q2-s5', text: 'Read a file with <code>with open(...) as f</code>', xp: 5 },
            { id: 'p1-q2-s6', text: 'Active recall: explain lists vs tuples without looking', xp: 6 },
          ],
        },
        {
          id: 'p1-q3', title: 'Day 3: Script 1 — CSV parser', minutes: 40, method: 'build',
          steps: [
            { id: 'p1-q3-s1', text: 'Download sample CSV (or create 10-row sales.csv)', xp: 3 },
            { id: 'p1-q3-s2', text: 'Load with pandas <code>pd.read_csv</code>', xp: 5 },
            { id: 'p1-q3-s3', text: 'Filter rows (e.g. amount > 100) and print count', xp: 5 },
            { id: 'p1-q3-s4', text: 'Write summary stats to <code>summary.json</code>', xp: 6 },
            { id: 'p1-q3-s5', text: 'Run from terminal: <code>python csv_parser.py</code>', xp: 6 },
          ],
        },
        {
          id: 'p1-q4', title: 'Day 4: Script 2 — API client', minutes: 40, method: 'build',
          steps: [
            { id: 'p1-q4-s1', text: 'Call GitHub API: <code>requests.get</code> user repos', xp: 5 },
            { id: 'p1-q4-s2', text: 'Print status code + handle non-200 errors', xp: 5 },
            { id: 'p1-q4-s3', text: 'Parse JSON response — list repo names', xp: 5 },
            { id: 'p1-q4-s4', text: 'Save output to <code>repos.json</code>', xp: 5 },
            { id: 'p1-q4-s5', text: 'Add <code>if __name__ == "__main__"</code> entry point', xp: 5 },
          ],
        },
        {
          id: 'p1-q5', title: 'Day 5: Script 3 — batch file processor', minutes: 35, method: 'build',
          steps: [
            { id: 'p1-q5-s1', text: 'Use <code>pathlib</code> or <code>os.listdir</code> on a folder', xp: 4 },
            { id: 'p1-q5-s2', text: 'Rename or prefix files in a loop', xp: 5 },
            { id: 'p1-q5-s3', text: 'Log actions to console (count processed)', xp: 4 },
            { id: 'p1-q5-s4', text: 'Push all 3 scripts to GitHub with README', xp: 8 },
          ],
        },
        {
          id: 'p1-q6', title: 'Week 2: Math intuition (videos)', minutes: 60, method: 'watch',
          steps: [
            { id: 'p1-q6-s1', text: '3Blue1Brown NN ep 1 — what is a neuron?', xp: 5 },
            { id: 'p1-q6-s2', text: 'Ep 2 — gradient descent intuition', xp: 5 },
            { id: 'p1-q6-s3', text: 'Ep 3–4 — backprop sketch (don\'t memorize formulas)', xp: 5 },
            { id: 'p1-q6-s4', text: 'Write 3 sentences: what is a dot product?', xp: 5 },
            { id: 'p1-q6-s5', text: 'Write: train vs validation vs test in your words', xp: 5 },
          ],
        },
        {
          id: 'p1-q7', title: 'Week 3: First Jupyter notebook', minutes: 50, method: 'build',
          steps: [
            { id: 'p1-q7-s1', text: 'Run <code>jupyter notebook</code>, create notebooks folder', xp: 4 },
            { id: 'p1-q7-s2', text: 'Load Iris dataset from sklearn', xp: 5 },
            { id: 'p1-q7-s3', text: '<code>df.head()</code>, <code>describe()</code>, <code>info()</code>', xp: 5 },
            { id: 'p1-q7-s4', text: 'Scatter plot two features with matplotlib', xp: 6 },
            { id: 'p1-q7-s5', text: 'Add .gitignore for venv & .ipynb_checkpoints', xp: 4 },
            { id: 'p1-q7-s6', text: 'Commit notebook to GitHub', xp: 6 },
          ],
        },
        {
          id: 'p1-q8', title: 'Week 4: Kaggle mini-project', minutes: 90, method: 'build',
          steps: [
            { id: 'p1-q8-s1', text: 'Pick Titanic or House Prices on Kaggle', xp: 3 },
            { id: 'p1-q8-s2', text: 'Load data, inspect missing values', xp: 5 },
            { id: 'p1-q8-s3', text: 'Fill/impute missing + encode categories', xp: 6 },
            { id: 'p1-q8-s4', text: 'Train LogisticRegression or RandomForest', xp: 8 },
            { id: 'p1-q8-s5', text: 'Print accuracy + confusion matrix', xp: 6 },
            { id: 'p1-q8-s6', text: 'README: what you did in 5 bullet points', xp: 7 },
          ],
        },
      ],
    },
    {
      id: 'p2', emoji: '🤖', color: 'var(--phase2)', focus: 'light',
      title: 'Phase 2 — ML Essentials',
      weeks: 'Weeks 5–8',
      goal: 'Enough ML to use embeddings & evaluate models',
      tasks: [
        {
          id: 'p2-q1', title: 'scikit-learn pipeline', minutes: 60, method: 'build',
          steps: [
            { id: 'p2-q1-s1', text: 'train_test_split with random_state=42', xp: 5 },
            { id: 'p2-q1-s2', text: 'Train LogisticRegression — print accuracy', xp: 6 },
            { id: 'p2-q1-s3', text: 'Print precision, recall, F1 (classification)', xp: 6 },
            { id: 'p2-q1-s4', text: 'Try RandomForest — compare metrics', xp: 6 },
            { id: 'p2-q1-s5', text: 'Explain overfitting in notes (2 sentences)', xp: 5 },
          ],
        },
        {
          id: 'p2-q2', title: 'Hugging Face inference', minutes: 45, method: 'do',
          steps: [
            { id: 'p2-q2-s1', text: 'pip install transformers torch', xp: 4 },
            { id: 'p2-q2-s2', text: 'Load DistilBERT sentiment pipeline', xp: 6 },
            { id: 'p2-q2-s3', text: 'Run on 10 custom sentences', xp: 5 },
            { id: 'p2-q2-s4', text: 'Read output labels + scores', xp: 5 },
          ],
        },
        {
          id: 'p2-q3', title: 'Embeddings demo', minutes: 50, method: 'build',
          steps: [
            { id: 'p2-q3-s1', text: 'pip install sentence-transformers', xp: 4 },
            { id: 'p2-q3-s2', text: 'Embed 20 short text snippets', xp: 6 },
            { id: 'p2-q3-s3', text: 'Implement cosine_similarity function', xp: 6 },
            { id: 'p2-q3-s4', text: 'Query → return top 3 most similar snippets', xp: 8 },
          ],
        },
      ],
    },
    {
      id: 'p3', emoji: '💬', color: 'var(--phase3)', focus: 'core',
      title: 'Phase 3 — LLMs, RAG & Agents',
      weeks: 'Weeks 9–16',
      goal: 'Ship production LLM apps',
      tasks: [
        {
          id: 'p3-q1', title: 'CLI chatbot', minutes: 40, method: 'build',
          steps: [
            { id: 'p3-q1-s1', text: 'OpenAI or Ollama account + API key in .env', xp: 4 },
            { id: 'p3-q1-s2', text: '20-line Python chat loop (input → print response)', xp: 6 },
            { id: 'p3-q1-s3', text: 'Add system prompt with role + constraints', xp: 5 },
            { id: 'p3-q1-s4', text: 'Test temperature 0 vs 1 — note difference', xp: 5 },
          ],
        },
        {
          id: 'p3-q2', title: 'RAG — ingestion', minutes: 60, method: 'build',
          steps: [
            { id: 'p3-q2-s1', text: 'Collect 3–5 PDFs or markdown docs', xp: 4 },
            { id: 'p3-q2-s2', text: 'Extract text (pypdf or unstructured)', xp: 6 },
            { id: 'p3-q2-s3', text: 'Chunk ~500 tokens, 100 overlap', xp: 6 },
            { id: 'p3-q2-s4', text: 'Embed chunks with OpenAI or sentence-transformers', xp: 6 },
            { id: 'p3-q2-s5', text: 'Store in Chroma (local)', xp: 8 },
          ],
        },
        {
          id: 'p3-q3', title: 'RAG — query + citations', minutes: 60, method: 'build',
          steps: [
            { id: 'p3-q3-s1', text: 'Retrieve top-3 similar chunks for a question', xp: 6 },
            { id: 'p3-q3-s2', text: 'Prompt LLM with chunks as context', xp: 6 },
            { id: 'p3-q3-s3', text: 'Answer includes source file/chunk id', xp: 6 },
            { id: 'p3-q3-s4', text: 'Test 10 questions — note failures', xp: 6 },
          ],
        },
        {
          id: 'p3-q4', title: 'Agent with tools', minutes: 75, method: 'build',
          steps: [
            { id: 'p3-q4-s1', text: 'LangChain agent with calculator tool', xp: 5 },
            { id: 'p3-q4-s2', text: 'Add MySQL read-only query tool', xp: 8 },
            { id: 'p3-q4-s3', text: 'Log tool calls to console', xp: 5 },
            { id: 'p3-q4-s4', text: 'Set max iterations = 5', xp: 5 },
          ],
        },
        {
          id: 'p3-q5', title: 'Full-stack deploy', minutes: 120, method: 'build',
          steps: [
            { id: 'p3-q5-s1', text: 'React chat UI component', xp: 6 },
            { id: 'p3-q5-s2', text: 'FastAPI/Express SSE streaming endpoint', xp: 8 },
            { id: 'p3-q5-s3', text: 'JWT auth on AI routes', xp: 6 },
            { id: 'p3-q5-s4', text: 'Rate limit (e.g. 20 req/min/user)', xp: 6 },
            { id: 'p3-q5-s5', text: 'Deploy with HTTPS (Railway/VPS)', xp: 10 },
          ],
        },
      ],
    },
    {
      id: 'p4', emoji: '💼', color: 'var(--phase4)', focus: 'core',
      title: 'Phase 4 — Portfolio & Jobs',
      weeks: 'Weeks 17–24',
      goal: 'Get hired',
      tasks: [
        {
          id: 'p4-q1', title: 'Portfolio polish', minutes: 90, method: 'build',
          steps: [
            { id: 'p4-q1-s1', text: 'RAG project README + architecture diagram', xp: 8 },
            { id: 'p4-q1-s2', text: '2-min Loom demo video', xp: 8 },
            { id: 'p4-q1-s3', text: 'Second project (agent or SQL bot)', xp: 10 },
            { id: 'p4-q1-s4', text: 'Pin 3 repos on GitHub profile', xp: 6 },
          ],
        },
        {
          id: 'p4-q2', title: 'Job hunt sprint', minutes: 60, method: 'do',
          steps: [
            { id: 'p4-q2-s1', text: 'Resume: 3 bullets with metrics (latency, cost)', xp: 8 },
            { id: 'p4-q2-s2', text: 'LinkedIn headline updated', xp: 5 },
            { id: 'p4-q2-s3', text: 'Apply to 5 roles (tailor each)', xp: 8 },
            { id: 'p4-q2-s4', text: 'Repeat until 20+ applications', xp: 10 },
            { id: 'p4-q2-s5', text: 'First interview scheduled 🎉', xp: 15 },
          ],
        },
      ],
    },
  ],

  'ml-eng': [
    {
      id: 'p1', emoji: '🐍', color: 'var(--phase1)', focus: 'core',
      title: 'Phase 1 — Python & Math',
      weeks: 'Weeks 1–4',
      goal: 'Python + math foundations for training models',
      tasks: [
        {
          id: 'p1-q1', title: 'Python + NumPy setup', minutes: 40, method: 'do',
          steps: [
            { id: 'p1-q1-s1', text: 'Python 3.11+ venv + numpy pandas matplotlib', xp: 5 },
            { id: 'p1-q1-s2', text: 'NumPy: create array, reshape, dot product', xp: 6 },
            { id: 'p1-q1-s3', text: 'Pandas: load CSV, groupby, merge', xp: 6 },
            { id: 'p1-q1-s4', text: 'Plot histogram + scatter with matplotlib', xp: 5 },
          ],
        },
        {
          id: 'p1-q2', title: 'Linear algebra intuition', minutes: 60, method: 'watch',
          steps: [
            { id: 'p1-q2-s1', text: '3Blue1Brown Essence of LA ep 1–4', xp: 8 },
            { id: 'p1-q2-s2', text: 'Implement dot product by hand in NumPy', xp: 6 },
            { id: 'p1-q2-s3', text: 'Matrix multiply: (m×n)(n×p) — check shapes', xp: 6 },
            { id: 'p1-q2-s4', text: 'Feynman note: explain eigenvectors simply', xp: 6 },
          ],
        },
        {
          id: 'p1-q3', title: 'Stats + Andrew Ng Course 1', minutes: 90, method: 'do',
          steps: [
            { id: 'p1-q3-s1', text: 'Mean, variance, normal distribution — notes', xp: 5 },
            { id: 'p1-q3-s2', text: 'Andrew Ng ML Spec — Week 1 videos', xp: 8 },
            { id: 'p1-q3-s3', text: 'Complete Week 1 programming assignment', xp: 10 },
            { id: 'p1-q3-s4', text: 'Jupyter EDA notebook on real dataset', xp: 8 },
          ],
        },
      ],
    },
    {
      id: 'p2', emoji: '🤖', color: 'var(--phase2)', focus: 'core',
      title: 'Phase 2 — ML Deep Dive',
      weeks: 'Weeks 5–12',
      goal: 'Train and tune models professionally',
      tasks: [
        {
          id: 'p2-q1', title: 'sklearn end-to-end', minutes: 90, method: 'build',
          steps: [
            { id: 'p2-q1-s1', text: 'Pipeline: impute → scale → model', xp: 6 },
            { id: 'p2-q1-s2', text: 'RandomForest + XGBoost compare', xp: 8 },
            { id: 'p2-q1-s3', text: 'GridSearchCV on 2 hyperparams', xp: 8 },
            { id: 'p2-q1-s4', text: 'Learning curve plot — spot overfitting', xp: 8 },
          ],
        },
        {
          id: 'p2-q2', title: 'PyTorch MNIST', minutes: 120, method: 'build',
          steps: [
            { id: 'p2-q2-s1', text: 'Load MNIST with torchvision', xp: 5 },
            { id: 'p2-q2-s2', text: 'Define nn.Module with 2 hidden layers', xp: 8 },
            { id: 'p2-q2-s3', text: 'Training loop: loss.backward(), optimizer.step()', xp: 10 },
            { id: 'p2-q2-s4', text: 'Reach >95% test accuracy', xp: 10 },
          ],
        },
        {
          id: 'p2-q3', title: 'fast.ai transfer learning', minutes: 90, method: 'build',
          steps: [
            { id: 'p2-q3-s1', text: 'fast.ai lesson 1 — train first classifier', xp: 8 },
            { id: 'p2-q3-s2', text: 'Lessons 2–4 — fine-tune pretrained model', xp: 10 },
            { id: 'p2-q3-s3', text: 'Export model weights for inference', xp: 8 },
          ],
        },
      ],
    },
    {
      id: 'p3', emoji: '⚡', color: 'var(--phase3)', focus: 'core',
      title: 'Phase 3 — MLOps & Serving',
      weeks: 'Weeks 13–18',
      goal: 'Models in production',
      tasks: [
        {
          id: 'p3-q1', title: 'FastAPI inference', minutes: 60, method: 'build',
          steps: [
            { id: 'p3-q1-s1', text: 'POST /predict with pydantic input schema', xp: 6 },
            { id: 'p3-q1-s2', text: 'Load joblib/pickle model at startup', xp: 6 },
            { id: 'p3-q1-s3', text: 'Return prediction + confidence', xp: 6 },
            { id: 'p3-q1-s4', text: 'Dockerfile + docker build/run', xp: 8 },
          ],
        },
        {
          id: 'p3-q2', title: 'Monitoring & versioning', minutes: 75, method: 'build',
          steps: [
            { id: 'p3-q2-s1', text: 'Log latency per request', xp: 6 },
            { id: 'p3-q2-s2', text: 'MLflow or similar — log experiment run', xp: 8 },
            { id: 'p3-q2-s3', text: 'nginx reverse proxy to API', xp: 6 },
          ],
        },
      ],
    },
    {
      id: 'p4', emoji: '💼', color: 'var(--phase4)', focus: 'core',
      title: 'Phase 4 — Portfolio & Jobs',
      weeks: 'Weeks 19–24',
      goal: 'ML engineer interviews',
      tasks: [
        {
          id: 'p4-q1', title: 'ML portfolio', minutes: 120, method: 'build',
          steps: [
            { id: 'p4-q1-s1', text: 'Repo 1: training pipeline + metrics', xp: 10 },
            { id: 'p4-q1-s2', text: 'Repo 2: inference API + Docker', xp: 10 },
            { id: 'p4-q1-s3', text: 'Kaggle entry with notebook write-up', xp: 10 },
            { id: 'p4-q1-s4', text: '20+ ML Engineer applications', xp: 12 },
          ],
        },
      ],
    },
  ],

  'fullstack-ai': [
    {
      id: 'p1', emoji: '🐍', color: 'var(--phase1)', focus: 'light',
      title: 'Phase 1 — Pick your AI lane',
      weeks: 'Weeks 1–3',
      goal: 'Python OR Node for AI — decide fast',
      tasks: [
        {
          id: 'p1-q1', title: 'Python fast track', minutes: 45, method: 'do',
          steps: [
            { id: 'p1-q1-s1', text: 'Python venv + pip install openai', xp: 4 },
            { id: 'p1-q1-s2', text: '10-line script: send prompt, print reply', xp: 6 },
            { id: 'p1-q1-s3', text: 'Store API key in .env (never commit)', xp: 5 },
          ],
        },
        {
          id: 'p1-q2', title: 'OR Node fast track', minutes: 45, method: 'do',
          steps: [
            { id: 'p1-q2-s1', text: 'npm install @langchain/openai langchain', xp: 4 },
            { id: 'p1-q2-s2', text: 'Express route returns LLM response', xp: 6 },
            { id: 'p1-q2-s3', text: 'Compare: which felt faster for you?', xp: 4 },
          ],
        },
        {
          id: 'p1-q3', title: 'Embeddings quick win', minutes: 30, method: 'build',
          steps: [
            { id: 'p1-q3-s1', text: 'Embed 10 strings (OpenAI or local)', xp: 5 },
            { id: 'p1-q3-s2', text: 'Find most similar pair — log result', xp: 6 },
          ],
        },
      ],
    },
    {
      id: 'p2', emoji: '🔗', color: 'var(--phase2)', focus: 'light',
      title: 'Phase 2 — AI in your stack',
      weeks: 'Weeks 4–8',
      goal: 'Express + React + MongoDB + AI',
      tasks: [
        {
          id: 'p2-q1', title: 'Streaming chat API', minutes: 60, method: 'build',
          steps: [
            { id: 'p2-q1-s1', text: 'POST /api/chat with message body', xp: 5 },
            { id: 'p2-q1-s2', text: 'Stream OpenAI response with SSE', xp: 8 },
            { id: 'p2-q1-s3', text: 'React useEffect reads EventSource', xp: 8 },
            { id: 'p2-q1-s4', text: 'Display tokens as they arrive', xp: 6 },
          ],
        },
        {
          id: 'p2-q2', title: 'Persist + secure', minutes: 60, method: 'build',
          steps: [
            { id: 'p2-q2-s1', text: 'Save messages to MongoDB collection', xp: 6 },
            { id: 'p2-q2-s2', text: 'JWT middleware on /api/chat', xp: 6 },
            { id: 'p2-q2-s3', text: 'express-rate-limit on AI routes', xp: 6 },
            { id: 'p2-q2-s4', text: 'nginx proxy_pass to Node app', xp: 6 },
          ],
        },
      ],
    },
    {
      id: 'p3', emoji: '✨', color: 'var(--phase3)', focus: 'core',
      title: 'Phase 3 — Ship smart features',
      weeks: 'Weeks 9–16',
      goal: 'AI features users touch',
      tasks: [
        {
          id: 'p3-q1', title: 'RAG help center', minutes: 90, method: 'build',
          steps: [
            { id: 'p3-q1-s1', text: 'Index markdown docs in vector DB', xp: 8 },
            { id: 'p3-q1-s2', text: 'Search endpoint returns top chunks', xp: 6 },
            { id: 'p3-q1-s3', text: 'Chat UI uses RAG context', xp: 8 },
          ],
        },
        {
          id: 'p3-q2', title: 'NL → SQL (read-only)', minutes: 90, method: 'build',
          steps: [
            { id: 'p3-q2-s1', text: 'MySQL read-only user + schema doc for LLM', xp: 6 },
            { id: 'p3-q2-s2', text: 'LLM generates SELECT only — validate', xp: 8 },
            { id: 'p3-q2-s3', text: 'Run query, return table + NL summary', xp: 8 },
          ],
        },
        {
          id: 'p3-q3', title: 'Deploy HTTPS', minutes: 60, method: 'build',
          steps: [
            { id: 'p3-q3-s1', text: 'Env vars on server (no keys in repo)', xp: 5 },
            { id: 'p3-q3-s2', text: "Let's Encrypt or platform SSL", xp: 6 },
            { id: 'p3-q3-s3', text: 'Smoke test live URL', xp: 6 },
          ],
        },
      ],
    },
    {
      id: 'p4', emoji: '💼', color: 'var(--phase4)', focus: 'core',
      title: 'Phase 4 — Portfolio & Jobs',
      weeks: 'Weeks 17–22',
      goal: 'Full-stack + AI roles',
      tasks: [
        {
          id: 'p4-q1', title: 'Showcase', minutes: 90, method: 'build',
          steps: [
            { id: 'p4-q1-s1', text: 'Add 2 AI features to React app', xp: 10 },
            { id: 'p4-q1-s2', text: 'README architecture + demo video', xp: 8 },
            { id: 'p4-q1-s3', text: 'Resume with shipped metrics', xp: 8 },
            { id: 'p4-q1-s4', text: '20+ hybrid role applications', xp: 10 },
          ],
        },
      ],
    },
  ],
};

const METHOD_LABELS = {
  do: { icon: '⚡', label: 'Do it', tip: 'Active practice — fastest learning' },
  watch: { icon: '👁', label: 'Watch', tip: 'Preview only — follow with recall' },
  recall: { icon: '🧠', label: 'Recall', tip: 'Active recall — close notes first' },
  build: { icon: '🔨', label: 'Build', tip: 'Project-based — highest retention' },
  review: { icon: '🔁', label: 'Review', tip: 'Spaced repetition' },
};
