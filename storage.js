/**
 * Storage adapter: browser localStorage or Mac app file on disk.
 */
const QuestStorage = {
  isDesktop() {
    return typeof window.aiQuestDesktop !== 'undefined';
  },

  async getItem(key) {
    if (this.isDesktop()) return window.aiQuestDesktop.getItem(key);
    return localStorage.getItem(key);
  },

  async setItem(key, value) {
    if (this.isDesktop()) return window.aiQuestDesktop.setItem(key, value);
    localStorage.setItem(key, value);
  },

  async removeItem(key) {
    if (this.isDesktop()) return window.aiQuestDesktop.removeItem(key);
    localStorage.removeItem(key);
  },

  async getDataPath() {
    if (!this.isDesktop()) return null;
    return window.aiQuestDesktop.getDataPath();
  },
};
