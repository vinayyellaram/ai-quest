# Phase 2 Checklist — ML Basics (Weeks 5–10)

## Weeks 5–6: Supervised learning with scikit-learn

**Primary course (pick one):**
- [ ] [Andrew Ng ML Specialization](https://www.coursera.org/specializations/machine-learning-introduction) — Courses 1–2
- OR [fast.ai Tabular](https://course.fast.ai/) — tabular section

**Hands-on:**
- [ ] Repo: `ml-classification-project`
- [ ] End-to-end pipeline: raw CSV → features → model → evaluation
- [ ] Try at least 3 algorithms: Logistic Regression, Random Forest, XGBoost
- [ ] Use `GridSearchCV` or `RandomizedSearchCV` for hyperparameters
- [ ] Document metrics: accuracy, precision, recall, F1 (know when each matters)
- [ ] Plot: learning curve or feature importance
- [ ] Understand: bias-variance, overfitting, regularization

---

## Weeks 7–8: Deep learning with PyTorch

**Course:**
- [ ] [fast.ai Practical Deep Learning](https://course.fast.ai/) — Lessons 1–4
- OR [PyTorch 60 Min Blitz](https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html)

**Hands-on:**
- [ ] Train on MNIST or Fashion-MNIST
- [ ] Write training loop from scratch once (loss, backward, optimizer.step)
- [ ] Save and load model weights
- [ ] *Optional:* Deploy inference via FastAPI endpoint

**Concepts to explain aloud:**
- [ ] What is a tensor?
- [ ] What happens in one training step?
- [ ] Why batch normalization / dropout? (high level)

---

## Weeks 9–10: NLP & transformers

- [ ] Read: [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- [ ] Install: `pip install transformers torch sentence-transformers`
- [ ] Load DistilBERT or similar — run sentiment on 10 sample sentences
- [ ] Generate embeddings with `sentence-transformers`
- [ ] Compute cosine similarity between two sentences
- [ ] Mini project: semantic search over 50 text snippets (no vector DB yet — numpy cosine)

**Phase 2 complete when:** `ml-classification-project` on GitHub + notebook showing transformer inference + semantic search demo

---

## FastAPI starter (bridge to Phase 3)

```python
# app/main.py — add when ready
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
def predict(features: dict):
    # transform features → prediction
    return {"prediction": 0, "confidence": 0.95}
```

Run: `uvicorn app.main:app --reload`

---

## Common mistakes to avoid

1. Training on test data (data leakage)
2. Not setting `random_state` for reproducibility
3. Chasing accuracy on imbalanced data without F1/AUC
4. Copy-pasting notebooks without understanding each cell
