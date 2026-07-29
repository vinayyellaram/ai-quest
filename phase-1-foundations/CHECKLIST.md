# Phase 1 Checklist — Foundations (Weeks 1–4)

## Week 1: Python for engineers

- [ ] Install Python 3.11+ and verify: `python3 --version`
- [ ] Create project: `mkdir python-ml-starter && cd python-ml-starter`
- [ ] Setup venv: `python3 -m venv .venv && source .venv/bin/activate`
- [ ] Create `requirements.txt` with: `numpy`, `pandas`, `requests`, `jupyter`
- [ ] Complete **Automate the Boring Stuff** Ch 1–6 OR freeCodeCamp Python (first 4 hours)
- [ ] Script 1: Read a CSV, filter rows, write summary stats to JSON
- [ ] Script 2: Call a public API (e.g. GitHub), paginate, save to file
- [ ] Script 3: Batch rename or process files in a folder
- [ ] Push repo to GitHub with README

**Resources:** [Automate the Boring Stuff](https://automatetheboringstuff.com/) | [Real Python](https://realpython.com/)

---

## Week 2: Math intuition

- [ ] Watch 3Blue1Brown: [Neural Networks playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6Rfk6GOin7Q4jFpKWv-k) (episodes 1–4)
- [ ] Khan Academy: vectors and matrices (skim, 2–3 hours total)
- [ ] Understand in your own words (write in `notes/`):
  - What is a dot product and why it matters for similarity
  - What gradient descent does (ball rolling downhill analogy)
  - Train vs validation vs test set
- [ ] *Optional:* [Immersive Linear Algebra](https://immersivemath.com/ila/) — chapter 1–2

---

## Week 3: ML dev environment

- [ ] Install Jupyter: `pip install jupyter matplotlib scikit-learn`
- [ ] Create `notebooks/01-iris-exploration.ipynb`
- [ ] Load Iris dataset, EDA plots, basic statistics
- [ ] Add `.gitignore` (venv, `__pycache__`, `.ipynb_checkpoints`, `data/*.csv` if large)
- [ ] Learn: `df.head()`, `df.describe()`, `plt.scatter()`
- [ ] Practice git: meaningful commits, branch for experiment

---

## Week 4: Data + first prediction

- [ ] Pick dataset: [Titanic](https://www.kaggle.com/c/titanic) or [House Prices](https://www.kaggle.com/c/house-prices-advanced-regression-techniques)
- [ ] Notebook: load data, handle missing values, encode categories
- [ ] Train `LogisticRegression` or `RandomForestClassifier` with scikit-learn
- [ ] Report accuracy, confusion matrix
- [ ] *Stretch:* Connect to MySQL — store predictions in a table

**Phase 1 complete when:** GitHub repo `python-ml-starter` has scripts + 2 notebooks + clear README

---

## Commands cheat sheet

```bash
# Every new session
cd ~/path/to/python-ml-starter
source .venv/bin/activate

# Install new package
pip install package-name
pip freeze > requirements.txt

# Run notebook
jupyter notebook
```
